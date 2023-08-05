import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import {
  BLOCKCHAIN_BASE_URL,
  BLOCKCHAIN_BALANCE_URL,
  BLOCKCHAIN_CREATE_TRANSACTION_URL,
  BLOCKCHAIN_CREATE_BLOCK_URL,
} from "../constants/config";

export const BlockchainContext = createContext({});

export function BlockchainProvider(props) {
  const [server, setServer] = useState(false);
  const [selectedBlock, setSelectedBlock] = useState({index: 0, transactions: []});
  const [wallet, setWallet] = useState({});
  const [blockchain, setBlockchain] = useState({});

  const refreshData = () => {
    axios.get(BLOCKCHAIN_BASE_URL)
      .then((response) => {
        if (response.status === 200) {
          setBlockchain(response.data);
          setServer(true);
        }
      })
      .catch((error) => {
        alert(error.response.data);
      })
  };

  useEffect(() => {
    refreshData();
    console.log(selectedBlock);
  }, [selectedBlock]);

  const getBalanceOfAddress = (address) => {
    axios
      .get(BLOCKCHAIN_BALANCE_URL, {withCredentials: true})
      .then((response) => {
        setWallet({ address: address, balance: response.data });
      })
      .catch((error) => {
        alert(error.response.data);
      })
  };

  const createTransaction = (newTransaction) => {
    axios
      .post(BLOCKCHAIN_CREATE_TRANSACTION_URL, {
        toAddress: newTransaction.toAddress,
        amount: newTransaction.amount,
      }, {withCredentials: true})
      .then((response) => {
        if (response.status === 200) {
          alert(response.data);
        } else alert(response.data);
      })
      .catch((error) => {
        alert(error.response.data);
      })
  };

  const createBlock = () => {
    axios.post(BLOCKCHAIN_CREATE_BLOCK_URL, {}, {withCredentials: true})
      .then((response) => {
        if (response.status === 200) alert(response.data);
        else console.log("pezdaa");
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

  return (
    <BlockchainContext.Provider
      value={{
        server,
        blockchain,
        selectedBlock,
        setSelectedBlock,
        createTransaction,
        createBlock,
        wallet,
        getBalanceOfAddress,
      }}
    >
      {props.children}
    </BlockchainContext.Provider>
  );
}
