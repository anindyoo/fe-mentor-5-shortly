import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.svg';

const navLinks = ['Features', 'Pricing', 'Resources'];

const Navbar = () => {
  console.log();

  return (
    <nav className="
    NAVBAR
    fixed z-50
    w-full
    text-semiBase font-bold text-neutralGrayishViolet
    bg-white"
    >
      <div className="
      NAVBAR-CONTAINER
      SECTION-CENTER
      flex flex-row justify-between items-center
      h-[7.063rem] lg:h-[8.5rem]"
      >
        <div className="
        NAV-LINKS
        flex flex-row gap-11 items-center"
        >
          <Link
            to="/"
          >
            <img src={logo} alt="Shortly logo." />
          </Link>
          <ul className="
          NAV-LINKS-LIST
          hidden lg:flex flex-row gap-[1.875rem]"
          >
            {navLinks.map((navLink) => (
              <li key={navLink}>
                <Link
                  to="/"
                >
                  {navLink}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="
        NAV-AUTH
        hidden lg:flex flex-row gap-9"
        >
          <button
            type="button"
          >
            Login
          </button>
          <button
            type="button"
            className="
            SIGN-UP-BTN
            bg-primaryCyan
            w-[6.563rem] h-10
            rounded-full
            text-white"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
