import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Menu } from "antd";
import Logo from '../Logo' ;
import {
	HomeOutlined,
	MoneyCollectOutlined,
	BulbOutlined,
	FundOutlined,
	MenuOutlined,
} from "@ant-design/icons";
import "./style.css";

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
		if (screenSize < 1000) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize]);

	return (
		<div className='nav-container'>
			<div className='logo-container'>
				<Link to='/'>
					<Logo withAvatar='true'/>
				</Link>
			<Button
				className='menu-control-container'
				onClick={() => setActiveMenu((prevVal) => !prevVal)}>
				<MenuOutlined />
			</Button>
			</div>
			{activeMenu && (
				<Menu theme='dark'>
					<Menu.Item key='1' icon={<HomeOutlined className='nav-menu-icon' />}>
						<Link to='/'>Home</Link>
					</Menu.Item>
					<Menu.Item key='2' icon={<FundOutlined className='nav-menu-icon' />}>
						<Link to='/cryptocurrencies'>Cryptocurrencies</Link>
					</Menu.Item>
					<Menu.Item
						key='3'
						icon={<MoneyCollectOutlined className='nav-menu-icon' />}>
						<Link to='/exchanges'>Exchanges</Link>
					</Menu.Item>
					<Menu.Item key='4' icon={<BulbOutlined className='nav-menu-icon' />}>
						<Link to='/news'>News</Link>
					</Menu.Item>
				</Menu>
			)}
		</div>
	);
};

export default Navbar;
