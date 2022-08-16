import accountsImage from '../images/Accounts.png';
import Navigate from '../components/Navigate';


function Accounts() {
    return (
        <div>
            <Navigate/>
            <h4>Accounts</h4>
            <img src={accountsImage} />
        </div>
    );
}

export default Accounts;