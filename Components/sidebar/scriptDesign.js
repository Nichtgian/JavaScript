var showSideBarNumber = 1;
function showSideBar() {
  if (showSideBarNumber == 1) {
    document.getElementById('sideAppBar').style.display = "block";
    document.getElementById('sideAppBarCover').style.display = "block";
    showSideBarNumber = 2;
  }
  else if (showSideBarNumber == 2) {
    document.getElementById('sideAppBar').style.display = "none";
    document.getElementById('sideAppBarCover').style.display = "none";
    showSideBarNumber = 1;
  }
}

var widthMessage = "30%";
checkScreenWidth();
window.onresize = checkScreenWidth;
function checkScreenWidth() {
  var windowWidth = self.innerWidth;
  document.getElementById("wrapper").style.width = "70%";
  document.getElementById("wrapper").style.marginLeft = "15%";
  document.getElementById("menuIconHeaderBar").style.marginLeft = "15%";
  document.getElementById("menuMore_VertHeaderBar").style.marginRight = "15%";
  document.getElementById("sideAppBar").style.width = "20%";
  widthMessage = "40%";
  if (windowWidth <= 1300) {
    document.getElementById("wrapper").style.width = "90%";
    document.getElementById("wrapper").style.marginLeft = "5%";
    document.getElementById("menuIconHeaderBar").style.marginLeft = "5%";
    document.getElementById("menuMore_VertHeaderBar").style.marginRight = "5%";
    document.getElementById("sideAppBar").style.width = "35%";
    widthMessage = "50%";
  }
  if (windowWidth <= 800) {
    document.getElementById("wrapper").style.width = "100%";
    document.getElementById("wrapper").style.marginLeft = "0%";
    document.getElementById("menuIconHeaderBar").style.marginLeft = "0%";
    document.getElementById("menuMore_VertHeaderBar").style.marginRight = "0%";
    document.getElementById("sideAppBar").style.width = "45%";
    widthMessage = "70%";
  }
  if (windowWidth >= 2000) {
    document.getElementById("wrapper").style.width = "60%";
    document.getElementById("wrapper").style.marginLeft = "20%";
    document.getElementById("menuIconHeaderBar").style.marginLeft = "20%";
    document.getElementById("menuMore_VertHeaderBar").style.marginRight = "20%";
    document.getElementById("sideAppBar").style.width = "20%";
    widthMessage = "30%";
  }
}

var headerBarColor = "#263238";
var DOMbackgroundColor = "#ECEFF1";
var appBarColor = "#37474F";
var sideBarColor = "#546E7A";
var contentColor = "#546E7A";
var footerColor = "#263238";
var currentDomColor = 1;
function nextDOMColor() {
  currentDomColor++;
  if (currentDomColor == 7) {
    currentDomColor = 1;
  }
  if (currentDomColor == 1) {
    headerBarColor = "#263238";
    DOMbackgroundColor = "#ECEFF1";
    appBarColor = "#37474F";
    sideBarColor = "#546E7A";
    contentColor = "#546E7A";
    footerColor = "#263238";
  }
  else if (currentDomColor == 2) {
    headerBarColor = "#42A5F5";
    DOMbackgroundColor = "#E3F2FD";
    appBarColor = "#64B5F6";
    sideBarColor = "#BBDEFB";
    contentColor = "#BBDEFB";
    footerColor = "#1976D2";
  }
  else if (currentDomColor == 3) {
    headerBarColor = "#009688";
    DOMbackgroundColor = "#E0F2F1";
    appBarColor = "#26A69A";
    sideBarColor = "#B2DFDB";
    contentColor = "#B2DFDB";
    footerColor = "#00796B";
  }
  else if (currentDomColor == 4) {
    headerBarColor = "#FF5722";
    DOMbackgroundColor = "#FBE9E7";
    appBarColor = "#FF8A65";
    sideBarColor = "#FFCCBC";
    contentColor = "#FFCCBC";
    footerColor = "#F4511E";
  }
  else if (currentDomColor == 5) {
    headerBarColor = "#C2185B";
    DOMbackgroundColor = "#FCE4EC";
    appBarColor = "#E91E63";
    sideBarColor = "#F8BBD0";
    contentColor = "#F8BBD0";
    footerColor = "#AD1457";
  }
  else if (currentDomColor == 6) {
    headerBarColor = "#9C27B0";
    DOMbackgroundColor = "#F3E5F5";
    appBarColor = "#BA68C8";
    sideBarColor = "#E1BEE7";
    contentColor = "#E1BEE7";
    footerColor = "#6A1B9A";
  }
  document.documentElement.style.background = DOMbackgroundColor;
  document.getElementById("headerBar").style.background = headerBarColor;
  document.getElementById("appBar").style.background = appBarColor;
  document.getElementById('sideAppBarHeader').style.background = headerBarColor;
  document.getElementById('sideAppBarFooter').style.background = footerColor;
  document.getElementById("sideBar").style.background = sideBarColor;
  document.getElementById("mainContent").style.background = contentColor;
  document.getElementById("mainContent2").style.background = contentColor;
  document.getElementById("footer").style.background = footerColor;
}

function messageBox() {
  var messageBoxDivCover = document.createElement("div");
  var messageBoxDivAlert = document.createElement("div");

  messageBoxDivCover.style.width = "100%";
  messageBoxDivCover.style.height = "100%";
  messageBoxDivCover.style.background = "rgba(0,0,0,0.5)";
  messageBoxDivCover.style.position = "fixed";
  messageBoxDivCover.style.padding = "0px";

  messageBoxDivAlert.style.width = widthMessage;
  messageBoxDivAlert.style.height = "150px";
  messageBoxDivAlert.style.background = DOMbackgroundColor;                                           //COLOR == BACKGROUND
  messageBoxDivAlert.style.color = footerColor;                                                                        //COLOR == FOOTER
  messageBoxDivAlert.innerHTML = "Meldung";
  messageBoxDivAlert.style.position = "fixed";
  messageBoxDivAlert.style.padding = "0px";
  messageBoxDivAlert.style.Left = "50%";
  messageBoxDivAlert.style.top="30%";



  document.body.appendChild(messageBoxDivCover);
  document.body.appendChild(messageBoxDivAlert);
}
