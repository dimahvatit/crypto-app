import React from "react";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import store from "./app/store.js";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import ruRU from "antd/lib/locale/ru_RU";

render(
	<React.StrictMode>
		<Router>
			<Provider store={store}>
				<ConfigProvider locale={ruRU}>
					<App />
				</ConfigProvider>
			</Provider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root"),
);
