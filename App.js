//  Using JS to manipulate the DOM

// const heading = document.createElement("h1");

// heading.innerHTML = "Namaste Everyone";

// const root = document.getElementById("root");

// root.appendChild(heading);


import React from 'react';
import ReactDOM from 'react-dom/client';

// Using React 

const heading = React.createElement(
    "h1", 
    {
        id: "title"
    }, 
    "Namaste Everyone"
);

const headingOne = React.createElement(
    "h2", 
    {
        id: "title",
        className: "class"
    }, 
    "Namaste Heading One"
);

const headingMain = React.createElement(
    "div", 
    {
        id: "container"                
    }, 
    [heading,headingOne]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(headingMain);

