import React from "react";
import HTMLReactParser from "html-react-parser";
import millify from "millify";
import { Row, Col, Typography, Collapse, Avatar } from "antd";
import { useGetExchangesQuery } from "../services/cryptoApi";

const { Panel } = Collapse;
const { Title, Text } = Typography;

function precFour(val) {
	return millify(val, { precision: 4 });
}

const Exchanges = () => {
	const { data: exchanges, isFetching } = useGetExchangesQuery();

	if (isFetching) return "Loading...";

	const exchangesList = exchanges?.data?.exchanges;

	return (
		<div>
			<Row>
				<Col span={6}>
					<Title level={4}>Exchanges</Title>
				</Col>
				<Col span={6}>
					<Title level={4}>24h Trade Volume</Title>
				</Col>
				<Col span={6}>
					<Title level={4}>Markets</Title>
				</Col>
				<Col span={6}>
					<Title level={4}>Market Share</Title>
				</Col>
			</Row>
			{exchangesList?.map((exchange, i) => (
				<Collapse accordion>
					<Panel
                        showArrow={false}
						key={exchange.uuid}
						header={
							<Row>
								<Col span={6}>
                                    <Text></Text>
                                    
                                    <Text></Text>
                                </Col>
								<Col span={6}>24h Trade Volume</Col>
								<Col span={6}>Markets</Col>
								<Col span={6}>Market Share</Col>
							</Row>
						}></Panel>
				</Collapse>
			))}
		</div>
	);
};

export default Exchanges;
