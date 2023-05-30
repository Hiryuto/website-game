function windowload() {
  document.getElementById("displayVersion").innerHTML = `version:${version}`;
}
function init() {
  document.documentElement.style.setProperty(
    "--window-width",
    `${window.innerWidth}px`
  );
  document.documentElement.style.setProperty(
    "--window-height",
    `${window.innerHeight}px`
  );
}

window.addEventListener("load", init());
