import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import { Fonts } from "../constants/styles";
import { BlockchainContext, BlockchainProvider } from "../context/BlockchainContext";

export default class Blockchain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BlockchainProvider>
        <BlockchainConsumer />
      </BlockchainProvider>
    );
  }
}

class BlockchainConsumer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
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
}