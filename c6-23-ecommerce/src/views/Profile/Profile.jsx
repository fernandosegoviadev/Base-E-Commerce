import profileImage from '../../images/Profile.png';
import Navigate from '../../components/Navigate/Navigate';
import style from './styles/Profile.module.css';

function Profile() {
    return (
        <div className={style.mainProfileBox}>
            <div className={style.navigationBox}>
                <Navigate />
                <h3>Profile</h3>
            </div>
            <img src={profileImage} />
        </div>
    );
}

export default Profile;