import { Link } from 'react-router-dom';
import boostBgDesktop from '../../assets/images/backgrounds/bg-boost-desktop.svg';
import boostBgMobile from '../../assets/images/backgrounds/bg-boost-mobile.svg';
import logo from '../../assets/images/logo/logo.svg';
import facebookIcon from '../../assets/icons/icon-facebook.svg';
import twitterIcon from '../../assets/icons/icon-twitter.svg';
import pinterestIcon from '../../assets/icons/icon-pinterest.svg';
import instagramIcon from '../../assets/icons/icon-instagram.svg';
import useScreenSize from '../../hooks/useScreenSize';
import config from '../../config/config';

const footerLinksData = {
  features: ['Link Shortening', 'Branded Links', 'Analytics'],
  resources: ['Blog', 'Developers', 'Support'],
  company: ['About', 'Our Team', 'Careers', 'Contact'],
};

const socialLinksData = [
  {
    title: 'Facebook',
    link: '',
    icon: facebookIcon,
    iconAlt: 'Facebook logo. A rounded square with a tranparent form of a letter f on the right side.',
  },
  {
    title: 'Twitter',
    link: '',
    icon: twitterIcon,
    iconAlt: 'Twitter logo. A bird facing to the right.',
  },
  {
    title: 'Pinterest',
    link: '',
    icon: pinterestIcon,
    iconAlt: 'Pinterest logo. A circle with a letter p that resembles the shape of rounded push pin.',
  },
  {
    title: 'Instagram',
    link: '',
    icon: instagramIcon,
    iconAlt: 'Instagram logo. A rounded square border with a circle in the center, & a dot at the top right, resembling a camera frame, camera lense, & camera flashlight respectively',
  },
];

const Footer = () => {
  const screenSize = useScreenSize();
  const screenWidth = screenSize.width;
  const breakpoints = config.screenBreakpoints;

  return (
    <div className="
    FOOTER"
    >
      <div
        className="
        BOOST-BANNER-CONTAINER
        bg-primaryDarkViolet
        bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url(${screenWidth >= breakpoints.tablet ? boostBgDesktop : boostBgMobile})`,
        }}
      >
        <div className="
        BOOST-BANNER-CONTENT
        SECTION-CENTER
        flex flex-col gap-7 justify-center items-center
        h-[18.75rem] lg:h-[15.625rem]
        text-center"
        >
          <span className="text-[1.75rem] lg:text-[2.5rem] font-bold tracking-[-0.03em] text-white">Boost your links today</span>
          <button
            type="button"
            className="
            BOOST-GET-STARTED-BTN
            h-14
            px-10
            rounded-full
            bg-primaryCyan
            text-xl font-bold text-white"
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="
      FOOTER-BANNER
      bg-neutralVeryDarkViolet"
      >
        <div className="
        FOOTER-BANNER-CONTAINER
        SECTION-CENTER
        flex flex-col md:flex-row justify-between
        gap-[3.125rem] md:gap-0
        items-center md:items-start
        py-[3.438rem] md:py-[4.375rem]"
        >
          <Link to="/" className="w-fit h-fit">
            <div
              className="
              LOGO-WHITE
              w-[7.563rem] h-[2.063rem]
              bg-white"
              style={{
                mask: `url(${logo}) no-repeat`,
              }}
            />
          </Link>
          <div className="
          FOOTER-LINKS
          flex flex-col lg:flex-row justify-between gap-12 lg:gap-8
          w-fit
          text-center md:text-left"
          >
            <div className="
            FOOTER-NAVLINKS-LIST
            flex flex-col md:flex-row justify-between gap-[2.625rem] md:gap-10
            items-center md:items-start"
            >
              {Object.keys(footerLinksData).map((footerLink) => (
                <ul
                  key={`${footerLink}-navlinks`}
                  className={`
                  FOOTER-NAVLINKS-SUBLIST-${footerLink}
                  flex flex-col gap-[1.625rem] md:gap-6
                  w-[9.375rem]`}
                >
                  <div className="text-base tracking-[-0.01em] font-bold text-white">
                    {footerLink[0].toUpperCase() + footerLink.substring(1)}
                  </div>
                  <ul className="
                  SUBLIST-NAVLINKS-LIST
                  flex flex-col gap-3"
                  >
                    {footerLinksData[footerLink].map((navlink) => (
                      <li
                        key={navlink.replace(/ /g, '')}
                        className="text-base/[1.25em] tracking-tighter font-medium"
                      >
                        <Link to="/">
                          {navlink}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </ul>
              ))}
            </div>
            <ul className="
            SOCIAL-LINKS-LIST
            flex flex-row items-center gap-6
            h-fit"
            >
              {socialLinksData.map((social) => (
                <li key={social.title}>
                  <a href={social.link} title={social.title}>
                    <img src={social.icon} alt={social.iconAlt} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
