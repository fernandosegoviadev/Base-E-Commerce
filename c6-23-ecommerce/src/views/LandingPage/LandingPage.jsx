import LandingPageInfoImage from '../../images/Landing page - Info.png';
// import Navigate from '../../components/Navigate/Navigate';
import Sign from '../../components/Sign/Sign';
import style from './styles/LandingPage.module.css';

function LandingPage() {
  return (
    <div className={style.mainLandingBox}>
      <div className={style.navigationBox}>
        <h4>Landing Page + Sign In / Sign Up</h4>
      </div>
      <div className={style.landingBox}>
        <div className={style.infoBox}>
          <img src={LandingPageInfoImage} className={style.imageLanding} />
        </div>
        <div className={style.signBox}>
          <Sign />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
