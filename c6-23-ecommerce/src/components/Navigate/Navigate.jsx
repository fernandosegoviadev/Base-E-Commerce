import { useNavigate } from "react-router-dom";
import Logout from "../Logout/Logout";


function Navigate() {
    let navigate = useNavigate();
    let productTestId = '62f6de994a45dd69e42dc3a6';

    const goAccounts = () => {
        navigate('../accounts', {replace: true});
    }
    const goHome = () => {
        navigate('../home', {replace: true});
    }
    const goLanding = () => {
        navigate('../', {replace: true});
    }
    const goProductDetail = () => {
        navigate(`../detail/${productTestId}`, {replace: true});
    }
    const goProfile = () => {
        navigate('../profile/userId', {replace: true});
    }
    const goSales = () => {
        navigate('../sales', {replace: true});
    }
    const goShopping = () => {
        navigate('../shopping', {replace: true});
    }

    return (
        <div>
            <button onClick={goLanding}> Landing</button>
            <button onClick={goHome}> Home</button>
            <button onClick={goProductDetail}> Product Detail</button>
            <button onClick={goAccounts}> Accounts</button>
            <button onClick={goSales}> Sales</button>
            <button onClick={goShopping}> Shopping</button>          
            <button onClick={goProfile}> Profile</button>
            <Logout/>
        </div>
    );
}

export default Navigate;