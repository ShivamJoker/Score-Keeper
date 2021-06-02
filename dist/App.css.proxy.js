// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".App {\n  text-align: center;\n}\n.App code {\n  background: #fff3;\n  padding: 4px 8px;\n  border-radius: 4px;\n}\n.App p {\n  margin: 0.4rem;\n}\np {\n  text-decoration: underline;\n}\n.App {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n}\n\nh3 {\n  font-weight: normal;\n}\nh2 {\n  margin: 5px;\n  font-weight: 600;\n}\n.player-container {\n  padding: 20px;\n  border: 2px dashed black;\n}\n.App div:nth-child(1) {\n  border-right: none;\n}\n.player-container div {\n  /* display: inline-block; */\n}\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}