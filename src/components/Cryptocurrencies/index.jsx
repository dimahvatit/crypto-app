import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import { millify } from "millify";
import { Card, Row, Col, Input, Radio, Typography, Collapse, Avatar, Space } from "antd";
import { OrderedListOutlined, AppstoreOutlined } from "@ant-design/icons";
import { useGetCoinsQuery } from "../../services/cryptoApi";
import { setPricePrecision } from "../CryptoDetails/index.jsx";
import { Loader } from "..";
import './style.css';

const { Panel } = Collapse;
const { Text } = Typography;

const Cryptocurrencies = ({ simplified }) => {
	const count = simplified ? 10 : 100;
	const { data: coinsList, isFetching } = useGetCoinsQuery(count);
	const [coins, setCoins] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [coinsView, setCoinsView] = useState("grid");
	const [screenSize, setScreenSize] = useState(null);
	const [renderChangeView, setRenderChangeView] = useState(true);

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (screenSize < 550) {
			setRenderChangeView(false);
		} else {
			setRenderChangeView(true);
		}
	}, [screenSize])

	useEffect(() => {
		const filteredCoins = coinsList?.data?.coins.filter((coin) =>
			coin.name.toLowerCase().includes(searchTerm.toLowerCase()),
		);
		setCoins(filteredCoins);
	}, [coinsList, searchTerm]);

	const viewIconStyle = {
		fontSize: 25,
		color: "#3c71e4",
	};

	if (isFetching) return <Loader />;

	return (
		<>
			{!simplified && (
				<Row className='crypto-cards-header' gutter={[32, 32]}>
					<div className='search-crypto'>
						<Input
							placeholder='Search coins'
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</div>
					{renderChangeView && (
						<Radio.Group
							className='change-view'
							defaultValue='grid'
							buttonStyle='outline'
							onChange={(e) => setCoinsView(e.target.value)}>
							<Radio.Button value='list'>
								<OrderedListOutlined style={viewIconStyle} />
							</Radio.Button>
							<Radio.Button value='grid'>
								<AppstoreOutlined style={viewIconStyle} />
							</Radio.Button>
						</Radio.Group>
					)}
				</Row>
			)}

			{ coinsView === 'list' ? (<div className='coins-list-view'>
				<Row>
					<Col className='exchanges-col-heading' span={6}>
						Currency
					</Col>
					<Col className='exchanges-col-heading col-tex-center' span={6}>
						Price
					</Col>
					<Col className='exchanges-col-heading col-tex-center' span={6}>
						Market Cap
					</Col>
					<Col className='exchanges-col-heading col-tex-center' span={6}>
						Daily Change
					</Col>
				</Row>
				{coins?.map((coin, i) => (
					<Collapse>
						<Panel
							showArrow={false}
							key={coin.uuid}
							header={
								<Row className='exchanges-row' align='middle'>
									<Col className='col-exchange-container' span={6}>
										<Space size='middle'>
											<Text>{i + 1}. </Text>
											<Avatar
												size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80 }}
												src={coin?.iconUrl}></Avatar>
											<Text className='exchange-name'>{coin?.name}</Text>
										</Space>
									</Col>
									<Col className='col-tex-center' span={6}>
										{millify(coin?.price, { precision: 2 })}
									</Col>
									<Col className='col-tex-center' span={6}>
										{millify(coin?.marketCap, { precision: 1 })}
									</Col>
									<Col className='col-tex-center' span={6}>
										{coin?.change}%
									</Col>
								</Row>
							}>
							{coin?.description && HTMLReactParser(coin?.description)}
						</Panel>
					</Collapse>
				))}
			</div>)
				:
			(<Row
				gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}
				className='crypto-card-container'>
				{coins?.map((coin) => (
					<Col key={coin.uuid} xs={24} sm={12} md={12} xl={8} xxl={6} className='crypto-card'>
						<Link to={`/crypto/${coin.id}`}>
							<Card
								title={`${coin.rank}. ${coin.name}`}
								extra={
									<img
										className='coin-image'
										src={coin.iconUrl}
										alt={`${coin.name} icon`}
									/>
								}
								hoverable>
								<p>Price: ${setPricePrecision(coin.price)}</p>
								<p>
									Market Cap: $
									{millify(coin.marketCap, { precision: 3, space: true })}
								</p>
								<p>Daily Change: {coin.change}%</p>
							</Card>
						</Link>
					</Col>
				))}
			</Row>)}
		</>
	);
};

export default Cryptocurrencies;
