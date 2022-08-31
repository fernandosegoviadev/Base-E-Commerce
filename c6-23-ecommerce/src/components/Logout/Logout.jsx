import { logout } from "../../helpers/signIn";
import { useNavigate } from "react-router-dom";


function Logout() {
    const navigate = useNavigate();

    const logoutSession = async () => {
        let logoutUser = await logout();
        if (logoutUser.logout === true) {
            localStorage.clear();
            navigate('/');
        } else {
            window.alert('Error, no se pudo cerrar la sesión')
        }
    }
    return (
        <div>
            <button onClick={logoutSession} > Logout</button>
        </div>
    );
}

export default Logout;