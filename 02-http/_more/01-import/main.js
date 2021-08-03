// main.ts
import "./imported.js";
const handler = (e) => {
  console.log(`got ${e.type} event in event handler (main)`);
};
window.addEventListener("load", handler);
window.addEventListener("unload", handler);
window.onload = (e) => {
  console.log(`got ${e.type} event in onload function (main)`);
};
window.onunload = (e) => {
  console.log(`got ${e.type} event in onunload function (main)`);
};
console.log("log from main script");