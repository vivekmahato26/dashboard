import React, { useState, useEffect } from "react";
import Styles from "../styles/studentprofile.module.scss";
import { useSelector } from "react-redux";
import image from "../images/Image.png";
import { Switch } from "antd";

import { useLocation } from "react-router-dom";

export default function Studentprofile() {
  const sdata = useSelector((state) => state.student.value);

  const location = useLocation();

  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div className={Styles.scroll}>
      <div className={Styles.profileContainer}>
        <div className={Styles.studentDetails}>
          {location.state.firstName + location.state.lastName} Details
        </div>
        <hr />
        <div className={Styles.detailsBox}>
          <div className={Styles.left}>
            <div className={Styles.grid}>
              <img src={image} alt="" />
              <div>
                <label>
                  UserName
                  <input
                    style={{ marginLeft: "-2rem", width: "14rem" }}
                    disabled
                    value={location.state.userName}
                  />
                </label>

                <br />
                <label>
                  Email
                  <input
                    style={{ marginLeft: "-2rem", width: "14rem" }}
                    disabled
                    value={location.state.email}
                  />
                </label>
              </div>
              <label>FirstName </label>
              <input disabled value={location.state.firstName} />
              <label>LastName</label>
              <input disabled value={location.state.lastName} />
              <label>Phone</label>
              <input disabled value={location.state.phone} />
              <label>WhatsApp</label>
              <input disabled value={location.state.phone} />
              <label>Address</label>
              <p className={Styles.addressInput}>
                {location.state.address.Country}
                <br />
                {location.state.address.Flat}
              </p>
              <label>Gender</label>
              <input disabled value={location.state.gender} />
              <label>DOB</label>
              <input disabled value={location.state.dob} />
              <label>Placement</label>
              <input disabled value={location.state.placement} />

              <label>Chat</label>
              <div className={Styles.chatSwitch}>
                <Switch onClick={toggler} />
              </div>
            </div>
          </div>
          <div className={Styles.right}>
            <div className={Styles.first}>
              <div className={Styles.heading}>FULL STACK DEVELOPMENT</div>
              <div className={Styles.card}>
                <label>
                  Order ID
                  <input
                    className={Styles.input}
                    disabled
                    value={location.state.orders[0]._id}
                  />
                </label>

                <label>
                  Batch ID
                  <input
                    className={Styles.input}
                    disabled
                    value={location.state.batch[0]._id}
                  />
                </label>

                <label>
                  Course Status
                  <input
                    className={Styles.input}
                    disabled
                    value={location.state.course[0].status}
                  />
                </label>

                <label>
                  Subscription end date
                  <input
                    className={Styles.input}
                    disabled
                    value={location.state.Subscription}
                  />
                </label>

                <label>
                  Extended Subscription
                  <input className={Styles.input} disabled />
                </label>

                <label>
                  Pause Subscription till
                  <input className={Styles.input} disabled />
                </label>

                <label>
                  Cancel Subscription
                  <div>
                    <Switch onClick={toggler} />
                  </div>
                </label>
              </div>
            </div>
            <br />
            <div className={Styles.first}>
              <div className={Styles.heading}>FULL STACK DEVELOPMENT</div>
              <div className={Styles.card}>
                <label>
                  Order ID{" "}
                  <input
                    className={Styles.input}
                    disabled
                    value={location.state.orders[0]._id}
                  />
                </label>

                <label>
                  Batch ID{" "}
                  <input
                    className={Styles.input}
                    disabled
                    value={location.state.batch[0]._id}
                  />
                </label>

                <label>
                  Course Status{" "}
                  <input
                    className={Styles.input}
                    disabled
                    value={location.state.course[0].status}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

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
          {location.state.tickets.map((e) => (
            <tr className={Styles.tr}>
              <td className={Styles.td}>
                <div>{e._id}</div>
              </td>
              <td className={Styles.td}>
                <div>{e.createdAt}</div>
              </td>
              <td className={Styles.td}>
                <div>{e.status}</div>
              </td>
              <td className={Styles.td}>
                <div>{e.ticket_type}</div>
              </td>
              <td className={Styles.td}>
                <div>{e.mentor.name}</div>
              </td>
            </tr>
          ))}
        </div>
      </div>
    </div>
  );
}
