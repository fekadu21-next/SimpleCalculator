// const heading = React.createElement("h1", null, "Hello, React!");
// console.log(heading);
const list = React.createElement(
    "ul",
    null,
    React.createElement("li", null, "Item 1"),
    React.createElement("li", null, "Item 2"),
    React.createElement("li", null, "Item 3")
);
console.log(list)
const rootElement = document.querySelector("root");

// Render the list inside the root div
ReactDOM.render(list, rootElement); 




