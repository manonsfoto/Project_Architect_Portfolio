import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/SVG/Logo";

import "./Header.css";
import DarkMode from "../darkMode/DarkMode";

const Header = () => {
  return (
    <header className="flex header ">
      <Link to={"/"}>
        {" "}
        <Logo />
      </Link>
      <nav>
        <ul className="flex nav-list">
          <li>
            {" "}
            <NavLink to={"/"}>main</NavLink>
          </li>

          <li>
            {" "}
            <NavLink to={"/gallery"}>gallery</NavLink>
          </li>

          <li>
            <a href="#">projects </a>
          </li>

          <li>
            {" "}
            <a href="#">certifications </a>
          </li>

          <li>
            {" "}
            <a href="#">contacts </a>
          </li>
        </ul>
      </nav>
      <DarkMode />
    </header>
  );
};

export default Header;
