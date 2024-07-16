import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/images/logo/logo.svg';
import useScreenSize from '../../hooks/useScreenSize';
import config from '../../config/config';

const navLinks = ['Features', 'Pricing', 'Resources'];

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const screenSize = useScreenSize();
  const screenWidth = screenSize.width;
  const breakpoints = config.screenBreakpoints;

  const handleToggler = () => setIsToggled(!isToggled);

  return (
    <nav className="
    NAVBAR
    fixed z-50
    w-full
    text-lg lg:text-semiBase font-bold text-neutralGrayishViolet
    bg-white"
    >
      <div className="
      NAVBAR-CONTAINER
      SECTION-CENTER
      flex flex-row justify-between lg:justify-normal items-center gap-11
      h-[7.063rem] lg:h-[8.5rem]"
      >
        <Link
          to="/"
        >
          <img src={logo} alt="Shortly logo." />
        </Link>
        <div className={`
        NAV-LINKS-AND-AUTH
        flex-col lg:flex-row justify-between items-center
        w-full
        px-6 lg:px-0
        text-white lg:text-inherit
        ${screenWidth >= breakpoints.laptop
          ? 'flex'
          : `${isToggled
            ? 'SECTION-CENTER flex absolute top-24 pt-[2.063rem] pb-10 rounded-lg bg-primaryDarkViolet'
            : 'hidden'}`}`}
        >
          <ul className="
          NAV-LINKS-LIST
          flex flex-col lg:flex-row gap-[1.125rem] lg:gap-[1.875rem]
          w-full lg:w-auto
          pb-[1.563rem] lg:pb-0
          border-b border-[#544a6d] lg:border-none
          text-center lg:text-left"
          >
            {navLinks.map((navLink) => (
              <li key={navLink} className="py-2 lg:py-0">
                <Link
                  to="/"
                >
                  {navLink}
                </Link>
              </li>
            ))}
          </ul>
          <div className="
          NAV-AUTH
          flex flex-col lg:flex-row gap-[1.188rem] lg:gap-9
          w-full lg:w-auto
          pt-[1.563rem] lg:pt-0
          text-center lg:text-left"
          >
            <button
              type="button"
              className="py-2 lg:py-0"
            >
              Login
            </button>
            <button
              type="button"
              className="
              SIGN-UP-BTN
              bg-primaryCyan
              w-full lg:w-[6.563rem] h-12 lg:h-10
              rounded-full
              text-white"
            >
              Sign Up
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={handleToggler}
          className="
          MOBILE-MENU-TOGGLE
          lg:hidden"
        >
          <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H24V3H0V0Z" fill="#9E9AA7" />
            <path d="M0 9H24V12H0V9Z" fill="#9E9AA7" />
            <path d="M0 18H24V21H0V18Z" fill="#9E9AA7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
