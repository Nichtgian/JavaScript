var showSideBarNumber = 1;
var sideAppBar;
var sideAppBarCover;
var menuIconHeaderBar;
var menuMore_VertHeaderBar;
var headerBar;
var sideAppBarHeader;
var appBar;
var sideAppBarFooter;
var sideBar;
var mainContent;
var mainContent2;
var footer;


function showSideBar() {
  if (showSideBarNumber == 1) {
    sideAppBar = document.getElementsByClassName('sideAppBar');
    for (var i = 0; i < sideAppBar.length; i++) {
      sideAppBar[i].style.display = "block";
    }
    sideAppBarCover = document.getElementsByClassName('sideAppBarCover');
    for (var i = 0; i < sideAppBarCover.length; i++) {
      sideAppBarCover[i].style.display = "block";
    }
    showSideBarNumber = 2;
  }

  else if (showSideBarNumber == 2) {
    for (var i = 0; i < sideAppBar.length; i++) {
      sideAppBar[i].style.display = "none";
    }
    for (var i = 0; i < sideAppBarCover.length; i++) {
      sideAppBarCover[i].style.display = "none";
    }
    showSideBarNumber = 1;
  }
}

checkScreenWidth();
window.onresize = checkScreenWidth;
function checkScreenWidth() {
  var windowWidth = self.innerWidth;
  document.getElementById("wrapper").style.width = "70%";
  document.getElementById("wrapper").style.marginLeft = "15%";
  menuIconHeaderBar = document.getElementsByClassName('menuIconHeaderBar');
  for (var i = 0; i  < menuIconHeaderBar.length; i++) {
    menuIconHeaderBar[i].style.marginLeft = "15%";
  }

  menuMore_VertHeaderBar = document.getElementsByClassName("menuMore_VertHeaderBar");
  for (var i = 0; i < menuMore_VertHeaderBar.length; i++) {
    menuMore_VertHeaderBar[i].style.marginRight = "15%";
  }

  sideAppBar= document.getElementsByClassName("sideAppBar");
  for (var i = 0; i < sideAppBar.length; i++) {
    sideAppBar[i].style.width = "20%";
  }

  if (windowWidth <= 1300) {
    document.getElementById("wrapper").style.width = "90%";
    document.getElementById("wrapper").style.marginLeft = "5%";
    menuIconHeaderBar = document.getElementsByClassName("menuIconHeaderBar");
    for (var i = 0; i < menuIconHeaderBar.length; i++) {
      menuIconHeaderBar[i].style.marginLeft = "5%";
    }

    menuMore_VertHeaderBar = document.getElementsByClassName("menuMore_VertHeaderBar");
    for (var i = 0; i < menuMore_VertHeaderBar.length; i++) {
      menuMore_VertHeaderBar[i].style.marginRight = "5%";
    }

    sideAppBar = document.getElementsByClassName("sideAppBar");
    for (var i = 0; i < sideAppBar.length; i++) {
      sideAppBar[i].style.width = "35%";
    }
  }
  if (windowWidth <= 800) {
    document.getElementById("wrapper").style.width = "100%";
    document.getElementById("wrapper").style.marginLeft = "0%";
    for (var i = 0; i < menuIconHeaderBar.length; i++) {
      menuIconHeaderBar[i].style.marginLeft = "0%";
    }

    menuMore_VertHeaderBar = document.getElementsByClassName("menuMore_VertHeaderBar");
    for (var i = 0; i < menuMore_VertHeaderBar.length; i++) {
      menuMore_VertHeaderBar[i].style.marginRight = "0%";
    }

    sideAppBar = document.getElementsByClassName("sideAppBar");
    for (var i = 0; i < sideAppBar.length; i++) {
      sideAppBar[i].style.width = "45%";
    }
  }
  if (windowWidth >= 2000) {
    document.getElementById("wrapper").style.width = "60%";
    document.getElementById("wrapper").style.marginLeft = "20%";
    for (var i = 0; i < menuIconHeaderBar.length; i++) {
      menuIconHeaderBar[i].style.marginLeft = "20%";
    }

    menuMore_VertHeaderBar = document.getElementsByClassName("menuMore_VertHeaderBar");
    for (var i = 0; i < menuMore_VertHeaderBar.length; i++) {
      menuMore_VertHeaderBar[i].style.marginRight = "20%";
    }

    sideAppBar = document.getElementsByClassName("sideAppBar");
    for (var i = 0; i < sideAppBar.length; i++) {
      sideAppBar[i].style.width = "20%";
    }
  }
}

var currentDomColor = 1;
function nextDOMColor() {
  var headerBarColor;
  var DOMbackgroundColor;
  var appBarColor;
  var sideBarColor;
  var contentColor;
  var footerColor;
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
  headerBar = document.getElementsByClassName("headerBar");
  for (var i = 0; i < headerBar.length; i++) {
    headerBar[i].style.background = headerBarColor;
  }
  appBar = document.getElementsByClassName("appBar");
  for (var i = 0; i < appBar.length; i++) {
    appBar[i].style.background = appBarColor;
  }
  sideAppBarHeader = document.getElementsByClassName('sideAppBarHeader');
  for (var i = 0; i < sideAppBarHeader.length; i++) {
    sideAppBarHeader[i].style.background = headerBarColor;
  }
  sideAppBarFooter = document.getElementsByClassName("sideAppBarFooter");
  for (var i = 0; i < sideAppBarFooter.length; i++) {
    sideAppBarFooter[i].style.background = footerColor;
  }
  sideBar = document.getElementsByClassName("sideBar");
  for (var i = 0; i < sideBar.length; i++) {
    sideBar[i].style.background = sideBarColor;
  }
  mainContent = document.getElementsByClassName("mainContent");
  for (var i = 0; i < mainContent.length; i++) {
    mainContent[i].style.background = contentColor;
  }
  mainContent2 = document.getElementsByClassName("mainContent2");
  for (var i = 0; i < mainContent2.length; i++) {
    mainContent2[i].style.background = contentColor;
  }
  footer = document.getElementsByClassName("footer");
  for (var i = 0; i < footer.length; i++) {
    footer[i].style.background = footerColor;
  }
}
