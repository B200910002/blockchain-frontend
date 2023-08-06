import React from "react";
import Cookies from "js-cookie";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { Colors } from "./constants/styles";

import Blockchain from "./pages/Blockchain";
import NoPage from "./pages/NoPage";

import Join from "./components/join/Join";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateTransaction from "./components/blockchain/CreateTransaction";
import PendingTransactions from "./components/blockchain/PendingTransactions";
import Blocks from "./components/blockchain/Blocks";
import Transaction from "./components/blockchain/Transactions";
import BalanceOffAddress from "./components/blockchain/BalanceOfAddress";

import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter basename="/blockchain-frontend">
        <Routes>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/" element={<Layout />}>
            <Route path="blockchain" element={<Blockchain />}>
              <Route index element={<><Blocks /><Transaction /></>} />
              <Route path="createTransaction" element={<CreateTransaction />} />
              <Route path="pendingTransactions" element={<PendingTransactions />} />
              <Route path="wallet" element={<BalanceOffAddress />} />
            </Route>
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

const Layout = () => {
  return (
    <>
      {Cookies.get("username") ?
        (<>
          <Header />
          <div style={styles.container}>
            <Outlet />
          </div>
          <Footer />
        </>) 
        : <>{window.location.href = "/blockchain-frontend/join"}</>
      }
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
