import BenefitsBanner from '../components/HomeComponents/BenefitsBanner';
import WelcomeBanner from '../components/HomeComponents/WelcomeBanner';

const Home = () => {
  console.log();

  return (
    <div className="
    HOME-PAGE"
    >
      <WelcomeBanner />
      <BenefitsBanner />
    </div>
  );
};

export default Home;
