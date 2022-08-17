import salesImage from '../../images/Sales.png';
import Navigate from '../../components/Navigate/Navigate';
import style from './styles/Sales.module.css';

function Sales() {
    return (
        <div className={style.mainSalesBox}>
            <div className={style.navigationBox}>
                <Navigate />
                <h3>Sales</h3>
            </div>
            <img src={salesImage} />
        </div>
    );
}

export default Sales;