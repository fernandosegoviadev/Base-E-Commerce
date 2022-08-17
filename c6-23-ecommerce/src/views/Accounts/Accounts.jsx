import accountsImage from '../../images/Accounts.png';
import Navigate from '../../components/Navigate/Navigate';
import style from './styles/Accounts.module.css';

function Accounts() {
    return (
        <div className={style.mainAccountBox}>
            <div className={style.navigationBox}>
                <Navigate />
                <h4>Accounts</h4>
            </div>
            <img src={accountsImage} />
        </div>
    );
}

export default Accounts;