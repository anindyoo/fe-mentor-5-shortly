import { useState } from 'react';
import axios from 'axios';
import LinkShortenerForm from '../LinkShortener/LinkShortenerForm';
import ShortenedLinkList from '../LinkShortener/ShortenedLinkList';

const LinkShortener = () => {
  const [linkInput, setLinkInput] = useState('');
  const [isInputError, setIsInputError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [shortenedLinks, setShortenedLinks] = useState([]);

  const handleLinkInputChange = (input) => {
    setLinkInput(input);
    setIsInputError(false);
  };

  const handleFormSubmit = async () => {
    if (linkInput === '') {
      return setIsInputError(true);
    }
    setIsLoading(true);

    const encodedLinkInput = encodeURIComponent(linkInput);

    await axios
      .get(`https://tinyurl.com/api-create.php?url=${encodedLinkInput}`)
      .then((response) => {
        const responseObject = {
          longUrl: linkInput,
          shortUrl: response.data,
        };

        setShortenedLinks([...shortenedLinks, responseObject]);
        setIsInputError(false);
        console.log(response.data);

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
    <section className="
    LINK-SHORTENER-SECTION
    relative
    bg-neutralLightGray"
    >
      <LinkShortenerForm
        handleLinkInputChange={handleLinkInputChange}
        handleFormSubmit={handleFormSubmit}
        isInputError={isInputError}
        isLoading={isLoading}
      />
      {shortenedLinks.length > 0 && (
        <ul className="
        SHORTENED-LINK-LIST
        SECTION-CENTER
        flex flex-col gap-4
        relative -top-[5.375rem]
        mt-6
        pb-[4.625rem]"
        >
          {shortenedLinks.map((shortenedLinkData) => (
            <ShortenedLinkList
              key={shortenedLinkData.shortUrl + Math.random}
              shortenedLinkData={shortenedLinkData}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default LinkShortener;
