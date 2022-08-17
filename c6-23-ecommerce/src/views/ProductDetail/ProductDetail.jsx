import productDetailImage from '../../images/Product Detail.png';
import Navigate from '../../components/Navigate/Navigate';
import CardDetail from '../../components/CardDetail/CardDetail';
import style from './styles/ProductDetail.module.css';


function ProductDetail() {
    return (
        <div className={style.mainProductDetailBox}>
            <div className={style.navigationBox}>
                <Navigate />
                <h4>Product Detail</h4>
            </div>
            <img src={productDetailImage} />
            <CardDetail />
        </div>
    );
}

export default ProductDetail;