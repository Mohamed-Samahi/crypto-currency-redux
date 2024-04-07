import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import {
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
  Navbar,
  Footer,
} from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main main-content">
        <div>
          <Layout>
            <div className="routes">
              <Routes>
                {/* <Route path="/" element></Route> */}

                <Route exact path="/" element={<Homepage />} />

                <Route
                  exact
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                />

                <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />

                <Route exact path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
