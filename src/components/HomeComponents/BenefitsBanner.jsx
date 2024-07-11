import brandRecognitionIcon from '../../assets/icons/icon-brand-recognition.svg';
import detailedRecordsIcon from '../../assets/icons/icon-detailed-records.svg';
import fullyCustomizableIcon from '../../assets/icons/icon-fully-customizable.svg';

const benefitsData = [
  {
    title: 'Brand Recognition',
    description: 'Boost your brand recognition with each click. Generic links don\'t mean a thing. Branded links help instil confidence in your content.',
    icon: brandRecognitionIcon,
  },
  {
    title: 'Detailed Records',
    description: 'Gain insights into who is clicking your links. Knowing when and where people with you content helps inform better decisions.',
    icon: detailedRecordsIcon,
  },
  {
    title: 'Fully Customizable',
    description: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    icon: fullyCustomizableIcon,
  },
];

const BenefitsBanner = () => {
  console.log();

  return (
    <section className="
    BENEFITS-BANNER
    bg-neutralLightGray
    pt-[7.875rem] pb-[7.5rem]"
    >
      <div className="
      BENEFITS-BANNER-CONTAINER
      SECTION-CENTER
      flex flex-col gap-[6.5rem]"
      >
        <div className="
        BENEFITS-BANNER-DESCRIPTION
        flex flex-col gap-5
        self-center text-center
        max-w-[31.875rem]"
        >
          <h1 className="
          BENEFITS-BANNER-TITLE
          text-[2.375rem] font-bold text-neutralVeryDarkBlue"
          >
            Advanced Statistics
          </h1>
          <h2 className="
          BENEFITS-BANNER-SUBTITILE
          text-lg"
          >
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </h2>
        </div>
        <ul className="
        BENEFIT-CARDS-LIST
        flex flex-row justify-between"
        >
          {benefitsData.map((benefit, index) => (
            <li
              key={benefit.title.replace(/ /g, '')}
              className="
              BENEFIT-CARD
              relative
              max-w-[21.875rem] h-fit
              px-8 pb-9 pt-20
              bg-white
              rounded-md"
              style={{
                marginTop: `${index * 44}px`,
              }}
            >
              <div className="
              CARD-ICON-CONTAINER
              absolute  -top-[2.75rem]
              flex items-center justify-center
              w-[5.5rem] h-[5.5rem]
              rounded-full
              bg-primaryDarkViolet"
              >
                <img
                  src={benefit.icon}
                  alt=""
                />
              </div>
              <h1 className="text-[1.375rem] text-neutralVeryDarkViolet font-bold">{benefit.title}</h1>
              <p className="text-semiBase mt-5 leading-relaxed">{benefit.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BenefitsBanner;
