import React from "react";
import { Outlet } from "react-router-dom";
import { Fonts } from "../constants/styles";
import { BlockchainContext, BlockchainProvider } from "../context/BlockchainContext";

export default function Blockchain() {
  return (
    <BlockchainProvider>
      <BlockchainConsumer />
    </BlockchainProvider>
  );
}

function BlockchainConsumer() {
  return (
    <BlockchainContext.Consumer>
      {(context) => context.server ? (
        <>
          <Outlet />
        </>
      ) : (
        <>
          <p style={Fonts.normalGray}>Block chain server has turn off!</p>
        </>
      )}
    </BlockchainContext.Consumer>
  );
}