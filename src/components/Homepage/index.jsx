import React from 'react';
import { millify } from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCoinsQuery } from '../../services/cryptoApi'; 
import { Cryptocurrencies, News, Loader } from '..';
import './style.css';

const { Title } = Typography;

function Homepage() {
    const { data, isFetching } = useGetCoinsQuery(10);
    const globalStats = data?.data?.stats;

    if (isFetching) return <Loader />;

    return (
        <>
            <Title level={2} className="heading">Global Crypto Stats</Title>
            <Row gutter={[0, 16]}>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats?.total} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats?.totalExchanges, {precision: 1})} /></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats?.totalMarketCap, {precision: 1})} /></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats?.total24hVolume, {precision: 1})} /></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalStats?.totalMarkets, {precision: 1})} /></Col>
            </Row>

            <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
                <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
            </div>
            <Cryptocurrencies simplified />

            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="show-more"><Link to="/news">Show more</Link></Title>
            </div>
            <News simplified />
        </>
    )
}

export default Homepage
