import shoppingImage from '../../images/Shopping.png';
import Navigate from '../../components/Navigate/Navigate';
import style from './styles/Shopping.module.css';

function Shopping() {
    return (
        <div className={style.mainShoppingBox}>
            <div className={style.navigationBox}>
                <Navigate />
                <h3>Shopping</h3>
            </div>
            <img src={shoppingImage} />
        </div>
    );
}

export default Shopping;