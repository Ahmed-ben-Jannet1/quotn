import { NavLink } from "react-router-dom";

import { BsFillChatRightQuoteFill } from "react-icons/bs";

import { MdAddComment } from "react-icons/md";

import "./MainNavigation.css";

const MainNavigation = () => {
  return (
    <nav>
      <div className="menu">
        <a href="/">
          <img src="/./logo512.png" alt="" />
        </a>
        <a className="logo" href="/">
          Quo'Tn
        </a>
        <div className="separ">
          <NavLink className="navLink" to="/quotes">
            <BsFillChatRightQuoteFill />
            &nbsp; All Quotes
          </NavLink>
          <NavLink to="/new-quote">
            <MdAddComment />
            &nbsp; Add a Quote
          </NavLink>
        </div>
      </div>
      <div className="extra">
        <div className="translate">
          <a href="*">translate</a>
          <div className="more">
            <a href="/">العربية</a>
            <a href="/">Francais</a>
            <a href="/">Espanol</a>
            <a href="/">Deutsch</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
