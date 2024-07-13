import { useState } from 'react';
import shortenBgDesktop from '../../assets/images/backgrounds/bg-shorten-desktop.svg';

const LinkShortener = () => {
  const [linkInput, setLinkInput] = useState('');
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  const handleLinkInputChange = (event) => {
    setLinkInput(event.target.value);
    setIsInputEmpty(false);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (linkInput === '') {
      setIsInputEmpty(true);
    }
    console.log(linkInput);
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
            ${isInputEmpty && 'border-[0.188rem] border-secondaryRed'}`}
          />
          <div className={`
          ERROR-INPUT-NOTIF
          ${isInputEmpty ? 'visible' : 'hidden'}
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
