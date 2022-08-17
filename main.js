const slid = document.querySelector("#slid").children;
const slidLen = slid.length;
let index = 0;
let timeIn = 3000;

function showInfo() {
  for (let i = 0; i < slidLen; i++) {
    slid[i].classList.remove("show", "show-out");
  }
  slid[index].classList.add("show");

  setTimeout(function () {
    slid[index].classList.add("show-out");
  });

  if (index == slidLen - 1) {
    index = 0;
  } else {
    index++;
  }

  setTimeout(showInfo, timeIn);
}
window.onload = showInfo;

const nav = document.getElementById("navigation");
const goTop = document.getElementById("go-top");

window.onscroll = function () {
  let pos = window.scrollY;

  if (pos >= 500) {
    nav.style.opacity = "0";
    goTop.style.display = "block";
  } else {
    nav.style.opacity = "1";
    goTop.style.display = "none";
  }
};

goTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

const lists = document.querySelectorAll(".link");

