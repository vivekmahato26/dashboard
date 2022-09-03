import React, { useState, useEffect } from "react";
import Styles from "../styles/ticketpage.module.scss";
import { useSelector, useDispatch } from "react-redux";

import { filterData } from "../redux/slices/tickets";

export default function Ticketspage() {
  const tdata = useSelector((state) => state.tickets.value);
  const filteredTickets = useSelector((state) => state.tickets.filterData);
  const dispatch = useDispatch();
  let data = tdata;
  if (filteredTickets.length) {
    data = filteredTickets;
  }

  return (
    <div className={Styles.ticketsPage}>
      <div className={Styles.TicketType}>
        <div
          onClick={(e) => {
            dispatch(filterData(""));
          }}
        >
          ALL
        </div>
        <div
          onClick={(e) => {
            dispatch(filterData("technical"));
          }}
        >
          TECHNICAL
        </div>
        <div
          onClick={(e) => {
            dispatch(filterData("support"));
          }}
        >
          SUPPORT
        </div>
        <div
          onClick={(e) => {
            dispatch(filterData("queries"));
          }}
        >
          STUDENT QUERIES
        </div>
      </div>
      <hr />
      <div>
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
            {data &&
              data.map((e) => {
                return (
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
                      <div>{e.topic ? e.topic[0] : ""}</div>
                    </td>
                    <td className={Styles.td}>
                      <div>{e.mentor ? e.mentor.name : ""}</div>
                    </td>
                  </tr>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
