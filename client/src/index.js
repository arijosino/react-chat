import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./main.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import Chat from "./components/chat";


ReactDOM.render(<Provider store={store} ><Chat /></Provider>, document.getElementById("app"));