import React, {useState} from "../_snowpack/pkg/react.js";
import ContentEditable from "../_snowpack/pkg/react-contenteditable.js";
import "./App.css.proxy.js";
function App({}) {
  const [p1Name, setP1Name] = useState("Dev Girl");
  const [p2Name, setP2Name] = useState("Dev Boy");
  const [p1Score, setP1Score] = useState(10);
  const [p2Score, setP2Score] = useState(10);
  return /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "player-container"
  }, /* @__PURE__ */ React.createElement("p", null, "DEV GIRL"), /* @__PURE__ */ React.createElement("h2", null, /* @__PURE__ */ React.createElement(ContentEditable, {
    html: p1Name,
    onChange: (e) => setP1Name(e.target.value)
  })), /* @__PURE__ */ React.createElement("h3", null, "score - " + p1Score), /* @__PURE__ */ React.createElement("button", {
    onClick: () => setP1Score(p1Score - 1)
  }, "-")), /* @__PURE__ */ React.createElement("div", {
    className: "player-container"
  }, /* @__PURE__ */ React.createElement("p", null, "DEV BOY"), /* @__PURE__ */ React.createElement("h2", null, /* @__PURE__ */ React.createElement(ContentEditable, {
    html: p2Name,
    onChange: (e) => setP2Name(e.target.value)
  })), /* @__PURE__ */ React.createElement("h3", null, "score - " + p2Score), /* @__PURE__ */ React.createElement("button", {
    onClick: () => setP2Score(p2Score - 1)
  }, "-")));
}
export default App;
