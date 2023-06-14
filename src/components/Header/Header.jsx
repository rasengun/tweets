import { NavLink } from "react-router-dom";

import items from "./items";

import s from "./header.module.css";

const Header = () => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={s.link} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={s.menu}>{elements}</ul>;
};

export default Header;
