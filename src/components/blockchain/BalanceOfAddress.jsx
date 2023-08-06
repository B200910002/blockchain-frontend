import React, { useContext, useEffect } from "react";
import { Fonts } from "../../constants/styles";
import { BlockchainContext } from "../../context/BlockchainContext";
import Cookies from "js-cookie";
// import Transaction from "./Transactions";

export default function BalanceOffAddress() {
  const { wallet, getBalanceOfAddress } = useContext(BlockchainContext);
  
  const refresh = () => {
    getBalanceOfAddress(Cookies.get("username"));
  }

  useEffect(() => {
    refresh();
  }, []);
 
  return (
    <>
      <p style={Fonts.largeGray}>Wallet details</p>
      <div className="d-flex">
        <p style={Fonts.normalGrayBold}>Address:</p>
        <p style={Fonts.normalGrayItalic}>{wallet.address}</p>
      </div>
      <div className="d-flex">
        <p style={Fonts.normalGrayBold}>Balance:</p>
        <p style={Fonts.normalGrayItalic}>{wallet.balance}</p>
        </div>
      {/* <Transaction /> */}
    </>
  );
}

// const styles = {};
