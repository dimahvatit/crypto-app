import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { millify } from "millify";
import { Card, Row, Col, Input, Radio } from "antd";
import { OrderedListOutlined, AppstoreOutlined } from '@ant-design/icons';
import { useGetCoinsQuery } from "../services/cryptoApi";
import { setPricePrecision } from './CryptoDetails';

const Cryptocurrencies = ({ simplified }) => {
	const count = simplified ? 10 : 100;
	const { data: coinsList, isFetching } = useGetCoinsQuery(count);
	const [coins, setCoins] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [coinsView, setCoinsView] = useState('grid');

	useEffect(() => {
		const filteredCoins = coinsList?.data?.coins.filter((coin) =>
			coin.name.toLowerCase().includes(searchTerm.toLowerCase()),
		);
		setCoins(filteredCoins);
	}, [coinsList, searchTerm]);

	const viewIconStyle = {
		fontSize: 25,
		color: "#3c71e4",
	}

	if (isFetching) return "Loading...";

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
					<Radio.Group className='change-view' defaultValue="grid" buttonStyle="outline" onChange={e => setCoinsView(e.target.value)} >
						<Radio.Button value="list"><OrderedListOutlined style={viewIconStyle} /></Radio.Button>
						<Radio.Button value="grid"><AppstoreOutlined style={viewIconStyle} /></Radio.Button>
					</Radio.Group>
				</Row>
			)}
			<Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} className='crypto-card-container'>
				{coins?.map((coin) => (
					<Col key={coin.uuid} xs={24} ms={12} lg={6} className='crypto-card'>
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
								<p>
									Price: ${setPricePrecision(coin.price)}
								</p>
								<p>
									Market Cap: $
									{millify(coin.marketCap, { precision: 3, space: true })}
								</p>
								<p>Daily Change: {coin.change}%</p>
							</Card>
						</Link>
					</Col>
				))}
			</Row>
		</>
	);
};

export default Cryptocurrencies;
