import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space, Anchor } from "antd";
import {
	Navbar,
	Homepage,
	Exchanges,
	Cryptocurrencies,
	CryptoDetails,
	News,
} from "./components";
import Logo from "./components/Logo";
import "./css/App.css";
const { Link: AnchorLink } = Anchor;

function App() {
	return (
		<div className='app' id='top'>
			<div className='navbar'>
				<Navbar />
			</div>
			<div className='main'>
				<Layout>
					<div className='routes'>
						<Switch>
							<Route exact path='/'>
								<Homepage />
							</Route>
							<Route exact path='/cryptocurrencies'>
								<Cryptocurrencies />
							</Route>
							<Route exact path='/exchanges'>
								<Exchanges />
							</Route>
							<Route exact path='/crypto/:coinId'>
								<CryptoDetails />
							</Route>
							<Route exact path='/news'>
								<News />
							</Route>
						</Switch>
					</div>
				</Layout>
				<div className='footer'>
					<Anchor affix={false}>
						<AnchorLink href='#top' title={<Logo />} />
					</Anchor>
					<Typography.Title
						level={5}
						style={{ color: "white", textAlign: "center" }}>
						All rights reserved
					</Typography.Title>
					<Space>
						<Link to='/'>Home</Link>
						<Link to='/cryptocurrencies'>Cryptocurrencies</Link>
						<Link to='/news'>News</Link>
					</Space>
				</div>
			</div>
		</div>
	);
}

export default App;
