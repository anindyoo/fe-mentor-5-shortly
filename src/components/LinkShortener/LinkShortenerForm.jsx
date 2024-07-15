import shortenBgDesktop from '../../assets/images/backgrounds/bg-shorten-desktop.svg';
import shortenBgMobile from '../../assets/images/backgrounds/bg-shorten-mobile.svg';
import config from '../../config/config';
import useScreenSize from '../../hooks/useScreenSize';

const LinkShortenerForm = (props) => {
  const {
    handleLinkInputChange,
    handleFormSubmit,
    isInputError,
    isLoading,
  } = props;

  const screenSize = useScreenSize();
  const screenWidth = screenSize.width;
  const breakpoints = config.screenBreakpoints;

  const handleOnchange = (event) => {
    handleLinkInputChange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit();
  };

  return (
    <div
      className="
      LINK-SHORTENER-FORM-CONTAINER
      SECTION-CENTER
      relative -top-20 md:-top-14 lg:-top-[5.25rem]
      flex items-center
      w-full
      p-6 lg:px-16 lg:py-[3.25rem]
      rounded-lg
      bg-no-repeat bg-right-top bg-primaryDarkViolet"
      style={{
        backgroundImage: `url(${screenWidth >= breakpoints.tablet ? shortenBgDesktop : shortenBgMobile})`,
      }}
    >
      <form
        action=""
        className="
        LINK-SHORTENER-FORM
        flex flex-col md:flex-row gap-4 w-full"
      >
        <label htmlFor="linkInput" className="w-full">
          <input
            type="text"
            id="linkInput"
            placeholder="Shorten a link here..."
            onChange={handleOnchange}
            className={`
              LINK-SHORTENER-INPUT
              flex w-full
              h-12 md:h-16
              px-4 md:px-8
              rounded-lg
              text-base md:text-xl font-medium text-neutralVeryDarkViolet
              placeholder:text-neutralGrayishViolet
              ${isInputError && 'border-[0.188rem] border-secondaryRed'}`}
          />
          <div className={`
            ERROR-INPUT-NOTIF
            ${isInputError ? 'visible' : 'hidden'}
            lg:h-0
            relative top-2
            text-[0.75rem] md:text-base font-medium italic text-secondaryRed
            mb-1 md:mb-0`}
          >
            Please add a link
          </div>
        </label>
        <button
          type="submit"
          onClick={handleSubmit}
          className="
            SUBMIT-LINK-BUTTON
            flex flex-row gap-2 justify-center items-center
            md:w-[11.75rem]
            h-12 md:h-16
            rounded-lg
            text-lg md:text-xl font-bold text-white
            bg-primaryCyan"
        >
          {isLoading ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 stroke-[2] animate-spin"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
              </svg>
              <span className="italic">Loading...</span>
            </>
          ) : 'Shorten it!'}
        </button>
      </form>
    </div>
  );
};

export default LinkShortenerForm;
