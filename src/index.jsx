import './index.less'
import React from "react";
import {render} from 'react-dom'
import App from "./components/App.jsx";
import {Provider} from "react-redux";
import {store} from "./reducers";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <Provider store={store}>
        <App/>
    </Provider>
    </React.StrictMode>
);
































