const showNavItems = document.getElementById("icon");
const preloader = document.getElementById("preloader");
const chat1 = document.getElementById("sb1");
const chat2 = document.getElementById("sb2");
const mainDiv = document.getElementById("mainDiv");

showNavItems.addEventListener("click", showItems);

function showItems() {
  var navItems = document.getElementById("navBar");
  if (navItems.className === "navBar") {
    navItems.className += " responsive";
  } else {
    navItems.className = "navBar";
  }
}

LottieInteractivity.create({
  mode:"scroll",
  player:'#noRegisteration',
  actions: [
      {
          visibility:[0,1],
          type: "seek",
          frames: [0, 120],
      },
  ]  
});

chat1.style.opacity = "0";
chat2.style.opacity = "0";

setTimeout(function () {
  chat1.style.opacity = "1";
  chat1.classList.add("animate__fadeInLeft");
}, 1000);

setTimeout(function () {
  chat1.style.opacity = "2";
  chat2.classList.add("animate__fadeInRight");
}, 3000);

setTimeout(function () {
  preloader.classList.remove("preloaderShow");
  preloader.classList.add("preloaderHide");
}, 5000);

setTimeout(function () {
  mainDiv.classList.remove("mainDivHide");
  mainDiv.classList.add("mainDivShow");
}, 5000);
