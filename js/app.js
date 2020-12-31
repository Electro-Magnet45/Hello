const showNavItems = document.getElementById("icon");

showNavItems.addEventListener("click", showItems);

function showItems() {
  var navItems = document.getElementById("navBar");
  if (navItems.className === "navBar") {
    navItems.className += " responsive";
  } else {
    navItems.className = "navBar";
  }
}
