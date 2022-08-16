import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // para poder rutear
import LandingPage from './views/LandingPage';
import Home from './views/Home';
import Shopping from './views/Shopping';
import Sales from './views/Sales';
import ProductDetail from './views/ProductDetail';
import Accounts from './views/Accounts';
import Profile from './views/Profile';

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/home" element={<Home/>} /> 
          <Route path="/shopping" element={<Shopping/>} />
          <Route path="/sales" element={<Sales/>} />
          <Route path="/detail/:productId" element={<ProductDetail/>} />
          <Route path="/accounts" element={<Accounts/>} />
          <Route path="/profile/:userId" element={<Profile/>} />               
        </Routes>
      </BrowserRouter>  
    </>
  );
}
// La lista de rutas está ordenada por prioridad
// La del perfil si da el tiempo la hacemos, si no, no.(la menos prioritaria)

export default App;
