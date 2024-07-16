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
    flex flex-col lg:flex-row justify-between items-start lg:items-center
    gap-4 lg:gap-3
    lg:h-[4.5rem]
    py-4 lg:py-0 lg:px-8
    rounded-md
    bg-white"
    >
      <div className="
      LONG-URL
      w-full lg:w-auto
      px-4 lg:px-0 pb-3 lg:pb-0
      border-b border-[#e6e6e6] lg:border-none
      text-base lg:text-xl font-medium text-neutralVeryDarkBlue
      truncate"
      >
        {shortenedLinkData.longUrl}
      </div>
      <div className="
      SHORT-URL
      w-full lg:w-auto
      px-4 lg:px-0
      flex flex-col lg:flex-row gap-3.5 lg:gap-6 items-start lg:items-center"
      >
        <a
          href={shortenedLinkData.shortUrl}
          target="_blank"
          rel="noreferrer"
          className="text-base lg:text-lg font-medium text-primaryCyan"
        >
          {shortenedLinkData.shortUrl}
        </a>
        <button
          type="button"
          onClick={handleCopyButton}
          className={`
          COPY-SHORT-URL-BUTTON
          h-10
          w-full lg:w-[6.5rem]
          rounded-md
          text-semiBase font-bold text-white
          tracking-[-0.03em] lg:tracking-normal
          ${isCopied ? 'bg-primaryDarkViolet' : 'bg-primaryCyan'}`}
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </li>
  );
};

export default ShortenedLinkList;
