import landingPageImage from '../images/Landing page - SignIn-SignUp.png';
import Navigate from '../components/Navigate';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';

function LandingPage() {
  return (
    <div>
      <Navigate />
      {/* <h4>Landing Page</h4>
      <h4>Sign In / Sign Up</h4>
      <img src={landingPageImage} /> */}
      <RegisterForm />
    </div>
  );
}

export default LandingPage;
