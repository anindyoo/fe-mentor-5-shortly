import workingIllustration from '../../assets/images/illustrations/illustration-working.svg';

const WelcomeBanner = () => {
  console.log();

  return (
    <section className="
    WELCOME-BANNER
    SECTION-CENTER
    flex flex-row justify-start gap-[6.563rem]
    w-full
    pt-[5.875rem] pb-[13.875rem]"
    >
      <div className="
      BANNER-DESCRIPTION
      w-[35rem]"
      >
        <h1 className="
        HEADLINE
        text-[5rem]/[1.163em] font-bold text-neutralVeryDarkBlue
        tracking-[-0.03em]"
        >
          More than just shorter links
        </h1>
        <h2 className="
        SUB-HEADLINE
        text-[1.375rem] font-medium text-neutralGrayishViolet"
        >
          Build your brand&#39;s recognition and get detailed insights on how your links
          are performing.
        </h2>
        <button
          type="button"
          className="
          GET-STARTED-BTN
          h-14
          mt-10
          px-10
          rounded-full
          bg-primaryCyan
          text-xl font-bold text-white"
        >
          Get Started
        </button>
      </div>
      <div className="
      BANNER-ILLUSTRATION
      relative
      -top-[4.063rem]"
      >
        <img
          src={workingIllustration}
          alt="A two dimensional illustration of a person sitting on a chair while typing on a keyboard while looking to a computer monitor on a table with a pot of plant on the left side."
          className="absolute min-w-[733px] min-h-[482px]"
        />
      </div>
    </section>
  );
};

export default WelcomeBanner;
