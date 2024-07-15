import { Fragment } from 'react';
import brandRecognitionIcon from '../../assets/icons/icon-brand-recognition.svg';
import detailedRecordsIcon from '../../assets/icons/icon-detailed-records.svg';
import fullyCustomizableIcon from '../../assets/icons/icon-fully-customizable.svg';
import useScreenSize from '../../hooks/useScreenSize';
import config from '../../config/config';

const benefitsData = [
  {
    title: 'Brand Recognition',
    description: 'Boost your brand recognition with each click. Generic links don\'t mean a thing. Branded links help instill confidence in your content.',
    icon: brandRecognitionIcon,
    iconAlt: 'A flat icon of a four bar graph with dots that are connected with a line above it.',
  },
  {
    title: 'Detailed Records',
    description: 'Gain insights into who is clicking your links. Knowing when and where people with you content helps inform better decisions.',
    icon: detailedRecordsIcon,
    iconAlt: 'A flat icon of a circular measuring device that resembles a speedometer.',
  },
  {
    title: 'Fully Customizable',
    description: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    icon: fullyCustomizableIcon,
    iconAlt: 'A flat icon of a bundle that consists of a highlighter marker, a fountain pen, & a pointed paint brush.',
  },
];

const CardBuffer = () => (
  <li className="
    CARD-BUFFER
    w-2 lg:w-[1.875rem] h-14 lg:h-2
    bg-primaryCyan
    lg:mt-[9.5rem]"
  />
);

const BenefitsBanner = () => {
  const screenSize = useScreenSize();
  const screenWidth = screenSize.width;

  const breakpoints = config.screenBreakpoints;

  return (
    <section className="
    BENEFITS-BANNER
    relative z-10
    bg-neutralLightGray
    lg:mt-[-2.625rem]
    pt-2.5 pb-20 lg:pb-[7.5rem]"
    >
      <div className="
      BENEFITS-BANNER-CONTAINER
      SECTION-CENTER
      flex flex-col gap-[3.125rem] lg:gap-[6.5rem]"
      >
        <div className="
        BENEFITS-BANNER-DESCRIPTION
        flex flex-col gap-5
        self-center text-center
        max-w-[31.875rem]"
        >
          <h1 className="
          BENEFITS-BANNER-TITLE
          text-[1.75rem] md:text-[2rem] lg:text-[2.375rem] font-bold text-neutralVeryDarkBlue
          tracking-[-0.03em] md:tracking-normal"
          >
            Advanced Statistics
          </h1>
          <h2 className="
          BENEFITS-BANNER-SUBTITILE
          text-lg"
          >
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </h2>
        </div>
        <ul className="
        BENEFIT-CARDS-LIST
        flex flex-col lg:flex-row items-center lg:items-start"
        >
          {benefitsData.map((benefit, index) => (
            <Fragment key={benefit.title.replace(/ /g, '')}>
              {index === 1 && <CardBuffer />}
              <li
                className="
                BENEFIT-CARD
                relative
                flex flex-col items-center lg:items-start
                max-w-[21.875rem] h-fit
                px-9 lg:px-8 pb-[2.625rem] lg:pb-9 pt-20
                bg-white
                rounded-md"
                style={{
                  marginTop: screenWidth >= breakpoints.laptop ? `${index * 44}px` : '44px',
                }}
              >
                <div className="
                CARD-ICON-CONTAINER
                absolute -top-[2.75rem]
                flex items-center justify-center
                w-[5.5rem] h-[5.5rem]
                rounded-full
                bg-primaryDarkViolet"
                >
                  <img
                    src={benefit.icon}
                    alt={benefit.iconAlt}
                  />
                </div>
                <h1 className="text-[1.375rem] text-neutralVeryDarkViolet font-bold">{benefit.title}</h1>
                <p className="text-semiBase mt-5 leading-[1.533em] lg:leading-relaxed text-center lg:text-left">{benefit.description}</p>
              </li>
              {index === 1 && <CardBuffer />}
            </Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BenefitsBanner;
