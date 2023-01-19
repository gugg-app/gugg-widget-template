import * as React from "preact";
import { render } from "preact";
import './index.css';

const body = document.getElementById("root");
render(<div className="bg-black text-white overflow-hidden select-none" style="height: 100vh;">Hello World! Give me a high-five!</div>, body);
