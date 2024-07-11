import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.svg';

const navLinks = ['Features', 'Pricing', 'Resources'];

const Navbar = () => {
  console.log();

  return (
    <nav className="
    NAVBAR
    border border-red-600
    flex flex-row justify-between items-center
    h-[8.5rem]
    text-semiBase font-bold text-neutralGrayishViolet"
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
        flex flex-row gap-[1.875rem]"
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
      flex flex-row gap-9"
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
    </nav>
  );
};

export default Navbar;
