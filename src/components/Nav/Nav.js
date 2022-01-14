import React from "react";
import style from "./Nav.module.css";

function Nav() {
  return (
    <div className={style.nav}>
      <img
        className={style.logo}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
      />
      <img
        className={style.avatar}
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
      />
    </div>
  );
}

export default Nav;
