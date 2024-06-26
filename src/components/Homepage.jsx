import React from "react";
import { Typography, Row, Col, Statistic } from "antd";

import millify from "millify";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { Link } from "react-router-dom";

import { News, Cryptocurrencies, Loader } from "./index";

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();

  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>

      <Row gutter={[32, 32]}>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={millify(globalStats?.total || 0)}
          />
        </Col>

        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats?.totalExchanges || 0)}
          />
        </Col>

        <Col span={12}>
          <Statistic
            title="Total Market Cap:"
            value={millify(globalStats?.totalMarketCap || 0)}
          />
        </Col>

        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats?.total24hVolume || 0)}
          />
        </Col>

        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats?.totalMarkets || 0)}
          />
        </Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptos In The World
        </Title>

        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>

      <Cryptocurrencies simplified />

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>

        <Title level={3}>
          <Link to="/news">Show more</Link>
        </Title>
      </div>

      <News simplified />
    </>
  );
};

export default Homepage;