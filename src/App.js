import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
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

function App() {
	return (
		<div className='app'>
			<div className='navbar' id='top'>
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
					<div style={{cursor: 'pointer'}} onClick={() => window.scrollTo({top: 0, left: 0, behavior: "smooth"})}>
						<Logo />
					</div>
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
