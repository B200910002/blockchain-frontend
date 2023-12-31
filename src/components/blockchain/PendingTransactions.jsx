import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { Colors, Fonts } from "../../constants/styles";
import { BlockchainContext } from "../../context/BlockchainContext";

export default function PendingTransactions() {
  const { blockchain, createBlock, getBalanceOfAddress } = useContext(BlockchainContext);

  return (
    <div>
      <p style={Fonts.largeGray}>Pending transactions</p>
      {blockchain?.pendingTransactions?.length !== 0 ? (
        <>
          <div style={styles.table}>
            <Table className="mt-4" bordered size="sm">
              <thead style={Fonts.smallGray}>
                <tr>
                  <td>#</td>
                  <td>From</td>
                  <td>To</td>
                  <td>Amount</td>
                  <td>Timestamp</td>
                  <td>Valid?</td>
                </tr>
              </thead>
              <tbody style={Fonts.smallGray}>
                {blockchain?.pendingTransactions?.map((transaction) => (
                  <tr key={transaction.timestamp}>
                    <td>1</td>
                    <td>
                      {transaction.fromAddress ? (
                        <Link
                          to="/blockchain/wallet"
                          onClick={() => {
                            getBalanceOfAddress(transaction?.fromAddress);
                          }}
                        >
                          {transaction?.fromAddress?.slice(0, 40)}
                        </Link>
                      ) : (
                        <p>System</p>
                      )}
                    </td>
                    <td>
                      <Link
                        to="/blockchain/wallet"
                        onClick={() => {
                          getBalanceOfAddress(transaction?.toAddress);
                        }}
                      >
                        {transaction?.toAddress?.slice(0, 40)}
                      </Link>
                    </td>
                    <td>{transaction?.amount}</td>
                    <td>
                      {transaction?.timestamp}{" "}
                      <p style={styles.timestamp}>
                        {new Date(transaction?.timestamp).toString()}
                      </p>
                    </td>
                    <td>valid</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <Button
            onClick={() => {
              createBlock();
            }}
          >
            Start mining...
          </Button>
        </>
      ) : (
        <>
          <p style={Fonts.smallGrayItalic}>No pending transactions.</p>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {},
  table: {
    backgroundColor: Colors.containerBackColor,
  },
  timestamp: {
    fontSize: "10px",
  },
};
