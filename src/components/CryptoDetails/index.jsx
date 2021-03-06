import React, { useState } from "react";
import { useParams } from "react-router-dom";
import millify from "millify";
import { v4 as uuidv4 } from "uuid";
import HTMLReactParser from "html-react-parser";
import { Row, Col, Typography, Select } from "antd";
import LineChart from "../LineChart";
/*prettier-ignore*/
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from "../../services/cryptoApi";
/*prettier-ignore*/
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from "@ant-design/icons";
import Loader from '../Loader';
import './style.css';

const { Title, Text } = Typography;
const { Option } = Select;

export function setPricePrecision(price) {
	if (price.match(/[0-9]+/)[0] === "0") {
		if (price.match(/\.0+/) && price.match(/\.0+/)[0].length > 4) {
			return price.slice(0, 10);
		} else {
			return price.slice(0, 8);
		}
	} else {
		return Number(price).toLocaleString("en", { maximumFractionDigits: 2 });
	}
}

const CryptoDetails = () => {
	const { coinId } = useParams();
	const [timePeriod, setTimePeriod] = useState("7d");

	const { data: coinData, isFetching } = useGetCryptoDetailsQuery(coinId);
	const { data: coinHistory } = useGetCryptoHistoryQuery({
		coinId,
		timePeriod,
	});
	const cryptoDetails = coinData?.data?.coin;

	if (isFetching) return <Loader />;

	const time = ["24h", "7d", "30d", "3m", "1y", "3y", "5y"];

	/*prettier-ignore*/
	const stats = [
		{ title: 'Price to USD', value: `$ ${cryptoDetails?.price && setPricePrecision(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
		{ title: 'Rank', value: cryptoDetails.rank, icon: <NumberOutlined /> },
		{ title: '24h Volume', value: `$ ${cryptoDetails.volume && millify(cryptoDetails.volume, {precision: 3})}`, icon: <ThunderboltOutlined /> },
		{ title: 'Market Cap', value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap, {precision: 3})}`, icon: <DollarCircleOutlined /> },
		{ title: 'All-time-high (daily avg.)', value: `$ ${setPricePrecision(cryptoDetails.allTimeHigh.price)}`, icon: <TrophyOutlined /> },
	];

	/*prettier-ignore*/
	const genericStats = [
		{ title: 'Number Of Markets', value: cryptoDetails.numberOfMarkets, icon: <FundOutlined /> },
		{ title: 'Number Of Exchanges', value: cryptoDetails.numberOfExchanges, icon: <MoneyCollectOutlined /> },
		{ title: 'Aprroved Supply', value: cryptoDetails.approvedSupply ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
		{ title: 'Total Supply', value: `$ ${millify(cryptoDetails.totalSupply, {precision: 3})}`, icon: <ExclamationCircleOutlined /> },
		{ title: 'Circulating Supply', value: `$ ${millify(cryptoDetails.circulatingSupply, {precision: 3})}`, icon: <ExclamationCircleOutlined /> },
	];

	return (
		<div className='coin-detail-container'>
			<Col className='coin-heading-container'>
				<Title level={2} className='coin-name'>
					{cryptoDetails.name} ({cryptoDetails.symbol}) Price
				</Title>
				<p>
					{cryptoDetails.name} live price in USD View value statistics, market
					cap and suplpy
				</p>
			</Col>

			<Select
				defaultValue='7d'
				className='select-timeperiod'
				placeholder='Select Time Period'
				onChange={(value) => setTimePeriod(value)}>
				{time.map((date) => (
					<Option key={date}>{date}</Option>
				))}
			</Select>

			<LineChart
				coinHistory={coinHistory}
				currentPrice={millify(cryptoDetails.price, { precision: 4 })}
				coinName={cryptoDetails.name}
			/>

			<Row className='stats-container'>
				<Col className='coin-value-statistics'>
					<Col className='coin-value-statistics-heading'>
						<Title level={3} className='coin-details-heading'>
							{cryptoDetails.name} Value statistics
						</Title>
						<p>An overview showing the main stats of {cryptoDetails.name}</p>
					</Col>

					{stats.map(({ icon, title, value }) => (
						<Row className='coin-stats' key={uuidv4()}>
							<Col className='coin-stats-name'>
								<Text>{icon}</Text>
								<Text>{title}</Text>
							</Col>
							<Text className='coin-stats-value'>{value}</Text>
						</Row>
					))}
				</Col>

				<Col className='other-stats-info'>
					<Col className='coin-value-statistics-heading'>
						<Title level={3} className='coin-details-heading'>
							Other statistics
						</Title>
						<p>An overview showing the global stats of {cryptoDetails.name}</p>
					</Col>

					{genericStats.map(({ icon, title, value }) => (
						<Row className='coin-stats' key={uuidv4()}>
							<Col className='coin-stats-name'>
								<Text>{icon}</Text>
								<Text>{title}</Text>
							</Col>
							<Text className='coin-stats-value'>{value}</Text>
						</Row>
					))}
				</Col>
			</Row>

			<Row className='coin-desc-link'>
				<Col className='coin-desc'>
					<Title level={3} className='coin-details-heading'>
						What is {cryptoDetails.name}
					</Title>
					{HTMLReactParser(cryptoDetails.description)}
				</Col>

				<Col className='coin-links'>
					<Title level={3} className='coin-details-heading'>
						{cryptoDetails.name} Links
					</Title>
					{cryptoDetails.links.map((link) => (
						<Row className='coin-link' key={link.url}>
							<Title level={5} className='link-name'>
								{link.type}
							</Title>
							<a href={link.url} target='_blank' rel='noreferrer'>
								{link.name}
							</a>
						</Row>
					))}
				</Col>
			</Row>
		</div>
	);
};

export default CryptoDetails;
