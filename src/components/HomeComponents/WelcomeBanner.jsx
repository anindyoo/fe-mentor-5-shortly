import workingIllustration from '../../assets/images/illustrations/illustration-working.svg';

const WelcomeBanner = () => {
  console.log();

  return (
    <section className="
    WELCOME-BANNER
    SECTION-CENTER
    flex flex-col-reverse lg:flex-row justify-start gap-[2.188rem] lg:gap-[6.563rem]
    w-full
    mt-28 lg:mt-[8.5rem] lg:pt-[5.875rem] pb-[10.5rem] lg:pb-[13.875rem]"
    >
      <div className="
      BANNER-DESCRIPTION
      lg:w-[35rem]
      text-center md:text-left"
      >
        <h1 className="
        HEADLINE
        text-[2.625rem]/[1.163em] md:text-5xl/[1.6em] lg:text-[5rem]/[1.163em] font-bold text-neutralVeryDarkBlue
        tracking-[-0.03em]"
        >
          More than just shorter links
        </h1>
        <h2 className="
        SUB-HEADLINE
        text-lg lg:text-[1.375rem] font-medium text-neutralGrayishViolet
        mt-[0.875rem] md:m-0"
        >
          Build your brand&#39;s recognition and get detailed insights on how your links
          are performing.
        </h2>
        <button
          type="button"
          className="
          GET-STARTED-BTN
          h-14
          mt-[2.125rem] lg:mt-10
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
      lg:relative
      lg:-top-[4.063rem]"
      >
        <img
          src={workingIllustration}
          alt="A two dimensional illustration of a person sitting on a chair while typing on a keyboard while looking to a computer monitor on a table with a pot of plant on the left side."
          className="
          lg:absolute
          min-w-[31.563rem] min-h-[20.75rem]
          lg:min-w-[733px] lg:min-h-[482px]"
        />
      </div>
    </section>
  );
};

export default WelcomeBanner;
