//  Using JS to manipulate the DOM
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);
// Using React 
const heading = React.createElement("h1", {
    id: "title"
}, "Namaste Everyone");
const headingOne = React.createElement("h2", {
    id: "title",
    className: "class"
}, "Namaste Heading One");
const headingMain = React.createElement("div", {
    id: "container"
}, [
    heading,
    headingOne
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingMain);

//# sourceMappingURL=index.6bd02f5a.js.map
