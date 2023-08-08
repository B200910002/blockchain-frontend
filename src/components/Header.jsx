import React, { useContext } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

import Loader from "./Loader";
import { Colors, Fonts } from "../constants/styles";
import { Images } from "../constants/assets";

import { UserContext } from "../context/UserContext";

export default function Header() {
  const {fetchClearCookie} = useContext(UserContext);

  return (
    <>
      <div style={styles.gridContainer}>
        <div style={styles.gridItem}>
          <Loader />
        </div>
      </div>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link style={styles.a} to="/blockchain">
            <p style={Fonts.smallGray}>Blockchain</p>
          </Link>
        </li>
        <li style={styles.li}>
          <Link style={styles.a} to="/blockchain/createTransaction">
            <p style={Fonts.smallGray}>Create Transaction</p>
          </Link>
        </li>{" "}
        <li style={styles.li}>
          <Link style={styles.a} to="/blockchain/pendingTransactions">
            <p style={Fonts.smallGray}>Pending Transactions</p>
          </Link>
        </li>
        {Cookies.get("username") ? (<li style={styles.li}>
          <Link style={styles.a} to="/blockchain/wallet">
            <p style={Fonts.smallGray}>My Wallet</p>
          </Link>
        </li>) : <></>}
        {Cookies.get("username") ? (<li style={styles.li}>
          <Link style={styles.a} onClick={() => fetchClearCookie()}>
            <p style={Fonts.smallGray}>Log Out</p>
          </Link>
        </li>) : <></>}
      </ul>
    </>
  );
}

const styles = {
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "300px auto",
    backgroundImage: `url(${Images.backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  gridItem: {
    padding: "20px",
    textAlign: "center",
  },
  ul: {
    listStyleType: "none",
    margin: 0,
    padding: "0 3%",
    overflow: "hidden",
    backgroundColor: Colors.headerBackColor,
    position: "sticky",
    top: 0,
    fontSize: 14,
  },
  li: {
    float: "left",
  },
  a: {
    display: "block",
    textAlign: "center",
    padding: "5px 10px 5px 0",
    textDecoration: "none",
  },
  timer: {
    display: "grid",
    gridTemplateColumns: "auto auto 55px",
    placeItems: "end",
    padding: "5px 0",
  },
};
