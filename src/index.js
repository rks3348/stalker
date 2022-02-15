import React from "react";
import reactDom from "react-dom";
import App from './App';
import "./style.css"

reactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);