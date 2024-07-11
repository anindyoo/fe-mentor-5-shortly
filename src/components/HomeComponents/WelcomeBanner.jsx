const WelcomeBanner = () => {
  console.log();

  return (
    <section className="
    WELCOME-BANNER
    border pt-[5.875rem] pb-[13.875rem]"
    >
      <div className="
      BANNER-DESCRIPTION
      max-w-[35rem]"
      >
        <h1 className="
        HEADLINE
        text-[5rem] font-bold tracking-[-0.03em] text-neutralVeryDarkBlue"
        >
          More than just shorter links
        </h1>
        <h2 className="
        SUB-HEADLINE
        text-[1.375rem] text-neutralGrayishViolet"
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
    </section>
  );
};

export default WelcomeBanner;
