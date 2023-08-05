import React, { useContext } from "react";
import { Fonts } from "../../constants/styles";
import { BlockchainContext } from "../../context/BlockchainContext";
// import Transaction from "./Transactions";

export default function BalanceOffAddress() {
  const { wallet } = useContext(BlockchainContext);

  return (
    <>
      <p style={Fonts.largeGray}>Wallet details</p>
      <p style={Fonts.smallGrayBold}>Address:</p>
      <p style={Fonts.smallGrayItalic}>{wallet.address}</p>
      <p style={Fonts.smallGrayBold}>Balance:</p>
      <p style={Fonts.smallGrayItalic}>{wallet.balance}</p>
      {/* <Transaction /> */}
    </>
  );
}

// const styles = {};
