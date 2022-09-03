import React, { useState } from "react";
import Styles from "../styles/students.module.scss";
import { ExportToExcel } from "./exportfile";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Student() {
  const sdata = useSelector((state) => state.student.value);
  // const table = document.getElementsByTagName("table")[0];

  return (
    <div className={Styles.studentContainerMain}>
      <div className={Styles.studentContainer}>
        <div className={Styles.table}>
          <tr>
            <th className={Styles.tableHeading}>
              <div>Full Name</div>
            </th>
            <th className={Styles.tableHeading}>
              <div>Gender</div>
            </th>
            <th className={Styles.tableHeading}>
              <div>Email Address</div>
            </th>
            <th className={Styles.tableHeading}>
              <div>Username</div>
            </th>
            <th className={Styles.tableHeading}>
              <div>Phone</div>
            </th>
            <th className={Styles.tableHeading}>
              <div>Batch ID</div>
            </th>
            <th className={Styles.tableHeading}>
              <div>Order ID</div>
            </th>
          </tr>

          {sdata &&
            sdata.map((e) => (
              <div className={Styles.table}>
                <table>
                  <Link to={"/profiles"} state={e}>
                    <tr>
                      <td>
                        <div>{e.firstName + e.lastName}</div>
                      </td>
                      <td>
                        <div>{e.gender}</div>
                      </td>
                      <td>
                        <div>{e.email}</div>
                      </td>
                      <td>
                        <div>{e.userName}</div>
                      </td>
                      <td>
                        <div>{e.phone}</div>
                      </td>
                      <td>
                        <div>{e.batch[0]._id}</div>
                      </td>
                      <td>
                        <div>{e.orders[0]._id}</div>
                      </td>
                    </tr>
                  </Link>
                </table>
              </div>
            ))}
        </div>
      </div>

      <div className={Styles.excel}>
        <ExportToExcel />
      </div>
    </div>
  );
}
