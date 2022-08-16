import shoppingImage from '../images/Shopping.png';
import Navigate from '../components/Navigate/Navigate';


function Shopping() {
    return (
        <div>
            <Navigate/>
            <h3>Shopping</h3>
            <img src={shoppingImage} />
        </div>
    );
}

export default Shopping;