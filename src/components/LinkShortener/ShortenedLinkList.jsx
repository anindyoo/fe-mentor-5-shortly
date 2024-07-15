const ShortenedLinkList = (props) => {
  const {
    shortenedLinkData,
  } = props;

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
          className="text-lg font-normal text-primaryCyan"
        >
          {shortenedLinkData.shortUrl}
        </a>
        <button
          type="button"
          className="
          COPY-SHORT-URL-BUTTON
          h-10
          px-8
          rounded-md
          text-semiBase font-bold text-white
          bg-primaryCyan"
        >
          Copy
        </button>
      </div>
    </li>
  );
};

export default ShortenedLinkList;
