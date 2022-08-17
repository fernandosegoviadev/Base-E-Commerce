import homeImage from '../../images/Home.png';
import Navigate from '../../components/Navigate/Navigate';
import Cards from '../../components/Cards/Cards';
import { useState } from 'react';
import CreateButtons from '../../components/CreateButtons/CreateButtons';
import style from './styles/Home.module.css';



function UserView({ userType }) {
    return (
        <div>
            <h1>User View</h1>
            <Cards userType={userType} />
        </div>
    )
}

function AdminView({ userType }) {
    return (
        <div>
            <h1>Admin View</h1>
            <CreateButtons />
            <Cards userType={userType} />
        </div>
    )
}

function Home() {
    const [userType, setUserType] = useState('user');
    const [image, setImage] = useState(false);

    const onImage = () => {
        if (image === true) return setImage(false);
        if (image === false) return setImage(true);
    }

    return (
        <div className={style.mainHomeBox}>
            <div className={style.navigationBox}>
                <Navigate />
                <h4>Home</h4>
            </div>
            <button onClick={() => onImage()}>Imagen on/off</button>
            {image && <img src={homeImage} />}
            <p></p>
            <button onClick={() => setUserType('user')}>Home User</button>
            <button onClick={() => setUserType('admin')}>Home Admin</button>

            {userType === 'user' && <UserView userType={userType} />}
            {userType === 'admin' && <AdminView userType={userType} />}
        </div>
    );
}



export default Home;