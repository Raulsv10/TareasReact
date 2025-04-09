import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./components/index.scss";
import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
const DOMElement = document.getElementById("root"); //<div id="root"></div>
const VDOMElement = createRoot(DOMElement);

VDOMElement.render(
  <StrictMode>
    <App />
  </StrictMode>
);
