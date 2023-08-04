import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { Colors } from "./constants/styles";

import Blockchain from "./pages/Blockchain";
import NoPage from "./pages/NoPage";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateTransaction from "./components/blockchain/CreateTransaction";
import PendingTransactions from "./components/blockchain/PendingTransactions";
import Blocks from "./components/blockchain/Blocks";
import Transaction from "./components/blockchain/Transactions";
import BalanceOffAddress from "./components/blockchain/BalanceOfAddress";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blockchain-frontend" element={<Layout />}>
          <Route index element={<></>}></Route>
          <Route path="blockchain" element={<Blockchain />}>
            <Route index element={<><Blocks /><Transaction /></>}/>
            <Route path="createTransaction" element={<CreateTransaction />} />
            <Route path="pendingTransactions" element={<PendingTransactions />}/>
            <Route path="wallet" element={<BalanceOffAddress />} />
          </Route>
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const Layout = () => {
  return (
    <>
      <Header />
      <div style={styles.container}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    padding: "50px 3%",
    fontSize: 24,
    backgroundImage: `linear-gradient(${Colors.mainContainerBackColor},#101318)`,
  },
};
