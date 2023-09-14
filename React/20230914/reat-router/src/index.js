import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import RouteQuiz from "./RouteQuiz";
import RouteQuiz2 from "./RouteQuiz2";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouteQuiz2 />);
