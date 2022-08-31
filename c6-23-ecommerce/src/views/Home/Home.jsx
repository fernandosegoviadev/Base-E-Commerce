import homeImage from '../../images/Home.png';
import Navigate from '../../components/Navigate/Navigate';
import Cards from '../../components/Cards/Cards';
import { useState } from 'react';
import CreateButtons from '../../components/CreateButtons/CreateButtons';
import style from './styles/Home.module.css';
import { userInfo } from '../../helpers/others';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getAllCategories } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';



function UserView({ userData }) {
    return (
        <div>
            <h1>User View</h1>
            <Cards userData={userData} />
        </div>
    )
}

function AdminView({ userData }) {
    return (
        <div>
            <h1>Admin View</h1>
            <CreateButtons />
            <Cards
                userData={userData}
            />
        </div>
    )
}

function Home() {
    const [userData, setUserData] = useState(false);
    const [image, setImage] = useState(false);

    const { name, userId, role } = userInfo();

    const navigate = useNavigate();

    const dispatch = useDispatch();

    // console.log(name, userId, role, 'local strorage');
    const categories = useSelector((state) => state.listCategories);

    const getCategories = () => {
        console.log('se ejecuta get Categories')
        dispatch(getAllCategories());
    }

    useEffect(() => {
        if (!userData) {
            setUserData({ name, userId, role });
        }
        if (!categories.length) {
            getCategories();
        }
        if (userData) {
            if (!name && !userId && !role) { // Madar el user a la landin page
                navigate('../', { replace: true });
            }
        }
    }, [name, userId, role])


    const onImage = () => {
        if (image === true) return setImage(false);
        if (image === false) return setImage(true);
    }

    return (
        <div className={style.mainHomeBox}>
            <div className={style.navigationBox}>
                <Navigate />
                <h4>Home {userData.name}</h4>

            </div>
            <button onClick={() => onImage()}>Imagen on/off</button>
            {image && <img src={homeImage} />}
            <p></p>
            <button onClick={() => setUserData({ ...userData, role: 'user' })}>Home User</button>
            <button onClick={() => setUserData({ ...userData, role: 'admin' })}>Home Admin</button>

            {userData.role === 'user' && <UserView userData={userData} />}
            {userData.role === 'admin' && <AdminView userData={userData} />}
        </div>
    );
}



export default Home;