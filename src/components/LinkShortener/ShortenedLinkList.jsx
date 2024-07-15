import { useState } from 'react';

const ShortenedLinkList = (props) => {
  const {
    shortenedLinkData,
  } = props;

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyButton = () => {
    navigator.clipboard.writeText(shortenedLinkData.shortUrl);
    setIsCopied(true);
  };

  return (
    <li className="
    SHORTLINK-LIST-ITEM
    flex flex-row justify-between items-center
    h-[4.5rem]
    px-8
    rounded-md
    bg-white"
    >
      <div className="
      LONG-URL
      text-xl font-medium text-neutralVeryDarkBlue"
      >
        {shortenedLinkData.longUrl}
      </div>
      <div className="
      SHORT-URL
      flex flex-row gap-6 items-center"
      >
        <a
          href={shortenedLinkData.shortUrl}
          className="text-lg font-medium text-primaryCyan"
        >
          {shortenedLinkData.shortUrl}
        </a>
        <button
          type="button"
          onClick={handleCopyButton}
          className={`
          COPY-SHORT-URL-BUTTON
          h-10
          w-[6.5rem]
          rounded-md
          text-semiBase font-bold text-white
          ${isCopied ? 'bg-primaryDarkViolet' : 'bg-primaryCyan'}`}
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </li>
  );
};

export default ShortenedLinkList;
