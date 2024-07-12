import boostBgDesktop from '../../assets/images/backgrounds/bg-boost-desktop.svg';

const Footer = () => {
  console.log();

  return (
    <div className="
    FOOTER"
    >
      <div
        className="
        BOOST-BANNER-CONTAINER
        bg-primaryDarkViolet
        bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${boostBgDesktop})`,
        }}
      >
        <div className="
        BOOST-BANNER-CONTENT
        SECTION-CENTER
        flex flex-col gap-7 justify-center items-center
        h-[15.625rem]"
        >
          <span className="text-[2.5rem] font-bold tracking-[-0.03em] text-white">Boost your links today</span>
          <button
            type="button"
            className="
            BOOST-GET-STARTED-BTN
            h-14
            px-10
            rounded-full
            bg-primaryCyan
            text-xl font-bold text-white"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
