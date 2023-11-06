document.getElementById("button1").addEventListener("click", function () {
  let url = document.getElementById("url").value;
  openIPhoneWindow(url);
});

document.getElementById("button2").addEventListener("click", function () {
  let url = document.getElementById("url").value;
  openGalaxyWindow(url);
});

document.getElementById("button3").addEventListener("click", function () {
  let url = document.getElementById("url").value;

  openIPadWindow(url);
});

document.getElementById("button4").addEventListener("click", function () {
  let url = document.getElementById("url").value;
  openMacWindow(url);
});

function openIPhoneWindow(url) {
  var screenWidth = 375;
  var screenHeight = 810;
  var windowFeatures = `width=${screenWidth},height=${screenHeight},resizable,scrollbars=yes`;

  window.open(url, "_blank", windowFeatures);
}
function openGalaxyWindow(url) {
  var screenWidth = 410;
  var screenHeight = 869;
  var windowFeatures = `width=${screenWidth},height=${screenHeight},resizable,scrollbars=yes`;

  window.open(url, "_blank", windowFeatures);
}
function openIPadWindow(url) {
  var screenWidth = 1024;
  var screenHeight = 1366;
  var windowFeatures = `width=${screenWidth},height=${screenHeight},resizable,scrollbars=yes`;

  window.open(url, "_blank", windowFeatures);
}
function openMacWindow(url) {
  var screenWidth = 1920;
  var screenHeight = 1080;
  var windowFeatures = `width=${screenWidth},height=${screenHeight},resizable,scrollbars=yes`;

  window.open(url, "_blank", windowFeatures);
}
