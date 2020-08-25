// console.log('Hi');

let sideNav = document.getElementById('sideNav');
let menuBtn = document.getElementById('menuBtn');

sideNav.style.right = '-250px';
menuBtn.onclick = function () {
  if (sideNav.style.right == '-250px') {
    sideNav.style.right = '0';
  } else {
    sideNav.style.right = '-250px';
  }
};
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
