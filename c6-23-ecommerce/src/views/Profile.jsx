import profileImage from '../images/Profile.png';
import Navigate from '../components/Navigate/Navigate';

function Profile() {
    return (
        <div>
            <Navigate/>
            <h3>Profile</h3>
            <img src={profileImage} />
        </div>
    );
}

export default Profile;