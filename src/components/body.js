import React from "react";
import { Link } from "react-router-dom";
import Styles from "../styles/body.module.scss";

import image1 from "../media/3.png";
import image2 from "../media/4.png";
import image3 from "../media/5.png";
import image4 from "../media/6.png";
import image5 from "../media/7.png";
import image6 from "../media/9.png";
import image7 from "../media/10.png";
import image8 from "../media/11.png";
import image9 from "../media/12.png";

export default function Body() {
  return (
    <div className={Styles.body}>

      <div className={Styles.icons}>

        <Link to="/">
          <img src={image1} alt="" />
        </Link>
        <Link to="/batches">
          <img src={image2} alt="" />
        </Link>
        <Link to="/module">
          <img src={image3} alt="" />
        </Link>
        <Link to="/project">
          <img src={image4} alt="" />
        </Link>
        <Link to="/mentor">
          <img src={image5} alt="" />
        </Link>
        <Link to="/tickets">
          <img src={image6} alt="" />
        </Link>
        <Link to="/student">
          <img src={image7} alt="" />
        </Link>
        <Link to="/g">
          <img src={image8} alt="" />
        </Link>
        <Link to="/h">
          <img src={image9} alt="" />
        </Link>

      </div>

      <div className={Styles.content}></div>

    </div>
  );
}
