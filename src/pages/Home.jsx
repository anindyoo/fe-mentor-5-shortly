import BenefitsBanner from '../components/HomeComponents/BenefitsBanner';
import LinkShortener from '../components/HomeComponents/LinkShortener';
import WelcomeBanner from '../components/HomeComponents/WelcomeBanner';

const Home = () => (
  <div className="
    HOME-PAGE"
  >
    <WelcomeBanner />
    <LinkShortener />
    <BenefitsBanner />
  </div>
);

export default Home;
