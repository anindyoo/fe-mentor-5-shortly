import shortenBgDesktop from '../../assets/images/backgrounds/bg-shorten-desktop.svg';

const LinkShortener = () => {
  console.log();

  return (
    <section
      className="
      LINK-SHORTENER
      SECTION-CENTER
      relative top-[5.25rem]
      flex items-center
      w-full
      px-16 py-[3.25rem]
      rounded-lg
      bg-primaryDarkViolet"
      style={{
        backgroundImage: `url(${shortenBgDesktop})`,
      }}
    >
      <form action="" className="flex gap-6 w-full">
        <input
          type="text"
          placeholder="Shorten a link here..."
          className="
          LINK-SHORTENER-INPUT
          flex w-full
          h-16
          px-8
          rounded-lg
          placeholder:text-xl placeholder:font-medium"
        />
        <button
          type="submit"
          className="
          SUBMIT-LINK-BUTTON
          w-fit
          px-10
          rounded-lg
          text-xl font-bold text-white
          bg-primaryCyan"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default LinkShortener;
