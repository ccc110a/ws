// imported.ts
const handler = (e) => {
  console.log(`got ${e.type} event in event handler (imported)`);
};
window.addEventListener("load", handler);
window.addEventListener("unload", handler);
window.onload = (e) => {
  console.log(`got ${e.type} event in onload function (imported)`);
};
window.onunload = (e) => {
  console.log(`got ${e.type} event in onunload function (imported)`);
};
console.log("log from imported script");
