function displaySidebarNav(value) {
  if (value == 0) {
    setTimeout("document.getElementById('sidebarNav').style.right = '100%';", 250);
    document.getElementById("sidebarNav-Container").style.animation = "sidebarNav-SlideIn-Animation-Clear 0.3s ease-out";
    document.getElementById("sidebarNav-page-fill").style.animation = "page-fill-Animation-Clear 0.3s ease-out";

  }
  else if (value == 1) {
    document.getElementById("sidebarNav").style.right = "0%";
    document.getElementById("sidebarNav-Container").style.animation = "sidebarNav-SlideIn-Animation 0.2s ease";
    document.getElementById("sidebarNav-page-fill").style.animation = "page-fill-Animation 0.1s ease";
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
