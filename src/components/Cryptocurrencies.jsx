import React, { useEffect, useState } from "react";
import { millify } from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCoinsQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
	const count = simplified ? 10 : 100;
	const { data: coinsList, isFetching } = useGetCoinsQuery(count);
	const [coins, setCoins] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const filteredCoins = coinsList?.data?.coins.filter((coin) =>
			coin.name.toLowerCase().includes(searchTerm.toLowerCase()),
		);
		setCoins(filteredCoins);
	}, [coinsList, searchTerm]);

	if (isFetching) return "Loading...";

	return (
		<>
			{!simplified && (
				<div className='search-crypto'>
					<Input
						placeholder='Search coins'
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>
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
