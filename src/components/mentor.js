import React, { useState } from "react";
import Styles from "../styles/mentor.module.scss";
import image from "../images/Image.png";
import { Switch } from "antd";

import settings from "../images/2.png";

export default function Mentor() {
  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  return (
    <div className={Styles.MentorM}>
      <div className={Styles.MentorContainer}>
        <div className={Styles.MentorName}>pk Details</div>
        <hr />
        <div className={Styles.gridContainer}>
          <div className={Styles.left}>
            <div className={Styles.grid}>
              <img src={image} alt="" />
              <div>
                <label className={Styles.label}>
                  UserName
                  <input disabled />
                </label>

                <br />
                <label className={Styles.label}>
                  Email
                  <input disabled />
                </label>
              </div>
            </div>
            <div>
              <label className={Styles.label}>
                FirstName <input disabled />{" "}
              </label>
              <br />

              <label className={Styles.label}>
                LastName
                <input disabled />
              </label>
              <br />

              <label className={Styles.label}>
                Phone
                <input disabled />
              </label>
              <br />

              <label className={Styles.label}>
                WhatsApp
                <input disabled />
              </label>
              <br />

              <label className={Styles.label}>
                Address
                <input className={Styles.addressInput} disabled />
              </label>
              <br />
            </div>
          </div>
          <div className={Styles.right}>
            <label className={Styles.label}>
              Qualification <input disabled />
            </label>
            <br />
            <label className={Styles.label}>
              Experience <input disabled />
            </label>
            <br />
            <label className={Styles.label}>
              Cources Allocated{" "}
              <input className={Styles.courseInput} disabled />
            </label>
            <br />
            <label className={Styles.label}>
              <null />
              <select>
                <option></option>
              </select>
            </label>
            <br />
            <label className={Styles.label}>
              Chat
              <div className={Styles.chatSwitch}>
                <Switch onClick={toggler} />
              </div>
            </label>
          </div>
        </div>
        <hr />
        <div className={Styles.tickets}>
          <div className={Styles.tickets}>
            <div className={Styles.ticketsTable}>
              <div className={Styles.ticketHeading}>Tickets</div>
              <tr className={Styles.tr}>
                <th className={Styles.id}>ID</th>
                <th className={Styles.th}>Created At</th>
                <th className={Styles.th}>Status</th>
                <th className={Styles.query}>Query</th>
                <th className={Styles.th}>Mentor</th>
              </tr>

              <tr className={Styles.tr}>
                <td className={Styles.td}>
                  <div></div>
                </td>
                <td className={Styles.td}>
                  <div></div>
                </td>
                <td className={Styles.td}>
                  <div></div>
                </td>
                <td className={Styles.td}>
                  <div></div>
                </td>
                <td className={Styles.td}>
                  <div></div>
                </td>
              </tr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
