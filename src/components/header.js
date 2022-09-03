import React from "react";
import Styles from "../styles/header.module.scss";
import logo from "../media/logoCS.png";
import gender from "../media/1.png";
import settings from "../media/2.png";
import searchLogo from "../media/13.png";

export default function Header() {
  return (
    <div className={Styles.header}>
      <div className={Styles.nav}>
        <div className={Styles.logoSearch}>
          <img className={Styles.logo} src={logo} alt="logo" />
          <div>
            <span>
              <img
                className={Styles.magnet}
                src={searchLogo}
                alt="ssearchlogo"
              />
            </span>
            <input type={Styles.search} placeholder="Search" />
          </div>
        </div>

        <div className={Styles.settings}>
          <img className={Styles.gender} src={gender} alt="women" />
          <img className={Styles.set} src={settings} alt="settings" />
        </div>
      </div>
    </div>
  );
}
