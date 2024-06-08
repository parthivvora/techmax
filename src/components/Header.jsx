import { Navbar } from "react-bootstrap";
import apiRoutes from "../constants/apiRoutes";
import logoImage from "../assets/logo.png";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar py-4">
      <div className="container">
        <a href={apiRoutes.HOME}>
          <img src={logoImage} alt="logo.png" className="w-20 sm:w-24" />
        </a>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-between flex flex-col items-start gap-4 sm:items-center sm:flex-row"
        >
          <ul className="header-menus flex flex-col gap-[0.5rem] sm:gap-[2rem] sm:flex-row sm:items-center sm:mx-auto mt-[0.75rem] sm:mt-0">
            <li className="capitalize text-base sm:text-lg">
              <a href={apiRoutes.HOME} className="font-medium">
                home
              </a>
            </li>
            <li className="capitalize text-base sm:text-lg">
              <a href={apiRoutes.ABOUT} className="font-medium">
                about us
              </a>
            </li>
            <li className="capitalize text-base sm:text-lg">
              <a href={apiRoutes.SERVICE} className="font-medium">
                services
              </a>
            </li>
            {/* <li className="capitalize text-base sm:text-lg">
              <a href={apiRoutes.BLOG} className="font-medium">
                blog
              </a>
            </li> */}
            <li className="capitalize text-base sm:text-lg">
              <a href={apiRoutes.CONTACT} className="font-medium">
                contact
              </a>
            </li>
          </ul>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
