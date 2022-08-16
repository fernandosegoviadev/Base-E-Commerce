import salesImage from '../images/Sales.png';
import Navigate from '../components/Navigate';


function Sales() {
    return (
        <div>
            <Navigate/>
            <h3>Sales</h3>
            <img src={salesImage} />
        </div>
    );
}

export default Sales;