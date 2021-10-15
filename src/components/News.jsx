import React, { useState } from 'react';
import moment from 'moment';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import { useGetNewsQuery } from '../services/cryptoNewsApi';
import { useGetCoinsQuery } from '../services/cryptoApi';
import demoImg from '../images/crypto-news-demo-img.jpg';
import Loader from './Loader';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const {data: cryptoNews, isFetching} = useGetNewsQuery({newsCategory, count: simplified ? 6 : 15});
	const { data } = useGetCoinsQuery(100);

    if (isFetching) return <Loader />;

    return (
        <div>
            <Row gutter={[24, 24]}>
                {!simplified && (
                    <Col span={24}>
                        <Select 
                            showSearch
                            className='select-news'
                            placeholder='Select a coin'
                            optionFilterProp='children'
                            onChange={(value) => setNewsCategory(value)}
                            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                            {data?.data?.coins?.map(coin => (
                                <Option value={coin.name} key={coin.uuid}>{coin.name}</Option>
                            ))}
                            <Option value={"Cryptocurrency"}>All news</Option>
                        </Select>
                    </Col>
                )}
                {cryptoNews?.value?.map((news, i) => (
                    <Col key={i} xs={24} sm={12} lg={8}>
                        <Card hoverable className='news-card'>
                            <a href={news.url} target='_blank' rel='noreferrer'>
                                <div className="news-image-container">
                                    <Title className='news-title' level={4}>{news.name}</Title>
                                    <img style={{maxWidth: '200px', maxHeight: '100px'}} src={news?.image?.thumbnail?.contentUrl || demoImg} alt='news' />
                                </div>
                                <p>
                                    {news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}
                                </p>
                                <div className="provider-container">
                                    <div>
                                        <Avatar src={news?.provider[0]?.image?.thumbnail?.contentUrl || demoImg} alt='news' />
                                        <Text className='propvider-name'>{news.provider[0]?.name}</Text>
                                    </div>
                                    <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                                </div>
                            </a>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default News
