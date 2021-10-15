import React from "react";
import HTMLReactParser from "html-react-parser";
import millify from "millify";
import { Row, Col, Typography, Collapse, Avatar, Space } from "antd";
import { useGetExchangesQuery } from "../services/cryptoApi";
import Loader from './Loader';

const { Panel } = Collapse;
const { Text } = Typography;

const Exchanges = () => {
	const { data: exchanges, isFetching } = useGetExchangesQuery();

	if (isFetching) return <Loader />;

	const exchangesList = exchanges?.data?.exchanges;

	return (
		<div className="exchanges">
			<Row>
				<Col className="exchanges-col-heading" span={6}>Exchanges</Col>
				<Col className="exchanges-col-heading col-tex-center" span={6}>24h Trade Volume</Col>
				<Col className="exchanges-col-heading col-tex-center" span={6}>Markets</Col>
				<Col className="exchanges-col-heading col-tex-center" span={6}>Market Share</Col>
			</Row>
			{exchangesList?.map((exchange, i) => (
				<Collapse accordion>
					<Panel
                        showArrow={false}
						key={exchange.uuid}
						header={
							<Row className='exchanges-row' align="middle">
								<Col className="col-exchange-container" span={6}>
									<Space size="middle">
                                    <Text>{i+1}. </Text>
                                    <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80 }} src={exchange?.iconUrl}></Avatar>
                                    <Text className="exchange-name">{exchange?.name}</Text>
									</Space>
                                </Col>
								<Col className="col-tex-center" span={6}>{millify(exchange?.volume, {precision: 1})}</Col>
								<Col className="col-tex-center" span={6}>{exchange?.numberOfMarkets}</Col>
								<Col className="col-tex-center" span={6}>{millify(exchange?.marketShare, {precision: 1})}</Col>

							</Row>}
							>
								{exchange?.description && HTMLReactParser(exchange?.description)}
							</Panel>
				</Collapse>
			))}
		</div>
	);
};

export default Exchanges;
