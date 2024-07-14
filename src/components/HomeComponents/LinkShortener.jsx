import { useState } from 'react';
import axios from 'axios';
import shortenBgDesktop from '../../assets/images/backgrounds/bg-shorten-desktop.svg';

const LinkShortener = () => {
  const [linkInput, setLinkInput] = useState('');
  const [isInputError, setIsInputError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [shortenedLinks, setShortenedLinks] = useState([]);

  const handleLinkInputChange = (event) => {
    setLinkInput(event.target.value);
    setIsInputError(false);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (linkInput === '') {
      return setIsInputError(true);
    }

    const encodedLinkInput = encodeURIComponent(linkInput);

    await axios
      .get(`https://tinyurl.com/api-create.php?url=${encodedLinkInput}`)
      .then((response) => {
        const responseObject = {
          longUrl: linkInput,
          shortUrl: response.data,
        };

        setIsLoading(true);
        setShortenedLinks([...shortenedLinks, responseObject]);
        setIsInputError(false);

        return true;
      })
      .catch((error) => {
        setIsLoading(true);
        setIsInputError(true);

        return error;
      })
      .finally(() => setIsLoading(false));

    return true;
  };

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
        <label htmlFor="linkInput" className="w-full">
          <input
            type="text"
            id="linkInput"
            placeholder="Shorten a link here..."
            onChange={handleLinkInputChange}
            className={`
            LINK-SHORTENER-INPUT
            flex w-full
            h-16
            px-8
            rounded-lg
            text-xl font-medium text-neutralVeryDarkViolet
            placeholder:text-neutralGrayishViolet
            ${isInputError && 'border-[0.188rem] border-secondaryRed'}`}
          />
          <div className={`
          ERROR-INPUT-NOTIF
          ${isInputError ? 'visible' : 'hidden'}
          h-0
          relative top-2
          text-base font-medium italic text-secondaryRed`}
          >
            Please add a link
          </div>
        </label>
        <button
          type="submit"
          onClick={handleFormSubmit}
          className="
          SUBMIT-LINK-BUTTON
          flex flex-row gap-2 justify-center items-center
          w-[11.75rem]
          rounded-lg
          text-xl font-bold text-white
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
          ) : 'Submit'}
        </button>
      </form>
    </section>
  );
};

export default LinkShortener;
