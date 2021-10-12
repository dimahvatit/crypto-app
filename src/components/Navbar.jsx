import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar, Sider } from "antd";
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
	const [activeMenu, setActiveMenu] = useState(true);
	const [screenSize, setScreenSize] = useState(null);

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (screenSize < 786) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize]);

	return (
		<>
			<div className='logo-container'>
				<Link to='/'>
					<Avatar src={icon} size='large' />
				</Link>
				<Typography.Title level={2} className='logo'>
					<Link to='/'>CrApp</Link>
				</Typography.Title>
				<Button
					className='menu-control-container'
					onClick={() => setActiveMenu((prevVal) => !prevVal)}>
					<MenuOutlined />
				</Button>
			</div>
			{activeMenu && (
				<Menu theme='dark'>
					<Menu.Item key='1' icon={<HomeOutlined />}>
						<Link to='/'>Home</Link>
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
			)}
		</>
	);
};

export default Navbar;
