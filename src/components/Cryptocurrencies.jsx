import React, { useEffect, useState } from "react";
import { millify } from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Button } from "antd";
import { OrderedListOutlined, AppstoreOutlined } from '@ant-design/icons';
import { useGetCoinsQuery } from "../services/cryptoApi";
import ServerIssues from './ServerIssues';

const Cryptocurrencies = ({ simplified }) => {
	const count = simplified ? 10 : 100;
	const { data: coinsList, isFetching } = useGetCoinsQuery(count);
	const [coins, setCoins] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [isGridView, setIsGridView] = useState(true);

	useEffect(() => {
		const filteredCoins = coinsList?.data?.coins.filter((coin) =>
			coin.name.toLowerCase().includes(searchTerm.toLowerCase()),
		);
		setCoins(filteredCoins);
	}, [coinsList, searchTerm]);

	const viewIconStyle = {
		fontSize: 25,
		color: "#0071bd",
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
					<div className='change-view'>
						<Button size='large' type='primary' ghost={!isGridView} onClick={() => setIsGridView(prev => !prev)} icon={<OrderedListOutlined style={viewIconStyle}/>} />
						<Button size='large' type='primary' ghost={isGridView} onClick={() => setIsGridView(prev => !prev)} icon={<AppstoreOutlined style={viewIconStyle} />}/>
					</div>
				</Row>
			)}
			<Row gutter={[32, 32]} className='crypto-card-container'>
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
									Price: ${millify(coin.price, { precision: 6, space: true })}
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
