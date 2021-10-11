import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
	HomeOutlined,
	MoneyCollectOutlined,
	BulbOutlined,
	FundOutlined,
	MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency-logo.png";

const Navbar = () => {
	return (
		<div className='nav-container'>
			<div className='logo-container'>
				<Link to='/'>
					<Avatar src={icon} size='large' />
				</Link>
				<Typography.Title level={2} className='logo'>
					<Link to='/'>CrApp</Link>
				</Typography.Title>
				{/*to switch menus on mobile*/}
				{/* <Button className="menu-control-container"></Button> */}
			</div>
			<Menu theme='dark'>
				<Menu.Item key='1' icon={<HomeOutlined />}>
					<Link to='/' >Home</Link>
				</Menu.Item>
				<Menu.Item key='2' icon={<FundOutlined />}>
					<Link to='/cryptocurrencies'>Cryptocurrencies</Link>
				</Menu.Item>
				<Menu.Item key='3' icon={<MoneyCollectOutlined />}>
					<Link to='/exchanges'>Exchanges</Link>
				</Menu.Item>
				<Menu.Item key='4' icon={<BulbOutlined />}>
					<Link to='/news'>News</Link>
				</Menu.Item>
			</Menu>
		</div>
	);
};

export default Navbar;
