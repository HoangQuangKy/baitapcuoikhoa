let personIconEle = document.getElementsByClassName("profile")[0];
let loginBoxEle = document.getElementsByClassName("d-none")[0];
let socialMediaEle = document.getElementsByClassName("social-media")[0];
let bigContent = document.getElementsByClassName("big-content")[0];
const discountInformationItemEle = document.querySelectorAll("discount-information-item");
const displayBannerEle = document.getElementById("display-banner");
let header = document.getElementsByClassName("header__nav-bottom")[0];
let sticky = header.offsetTop;
//-------------Function---------------
function hidden() {
  loginBoxEle.classList.toggle("d-none");
  socialMediaEle.classList.toggle("d-none-special");
};
function refresh() {
  location.reload();
}
function upToHeader() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
function fixed() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
//-------------------------------------


personIconEle.addEventListener("click", hidden);
bigContent.addEventListener("click", refresh);

for (let i = 0; i < discountInformationItemEle.length; i++) {
  discountInformationItemEle[i].addEventListener('click', upToHeader)
}

window.onscroll = function () { fixed() };

var splide = new Splide('.splide', {
  type: 'loop',
  drag: 'free',
  perPage: 3,
});
splide.mount();

var productItems = document.getElementsByClassName("product-item");



var count = 1
setTimeout(demo, 500)
setTimeout(demo, 700)
setTimeout(demo, 900)
setTimeout(reset, 2000)

setTimeout(demo, 2500)
setTimeout(demo, 2750)
setTimeout(demo, 3050)


var mousein = false
function demo() {
  if (mousein) return
  document.getElementById('demo' + count++)
    .classList.toggle('hover')

}

function demo2() {
  if (mousein) return
  document.getElementById('demo2')
    .classList.toggle('hover')
}

function reset() {
  count = 1
  var hovers = document.querySelectorAll('.hover')
  for (var i = 0; i < hovers.length; i++) {
    hovers[i].classList.remove('hover')
  }
}

document.addEventListener('mouseover', function () {
  mousein = true
  reset()
})
let menuButtonEle = document.getElementById("click-img");
let noneELe = document.getElementsByClassName("none")[0];
menuButtonEle.addEventListener("click", () => {
  noneELe.classList.toggle("none");
  noneELe.classList.toggle("content-none")
})
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
function redirectToPage(pageUrl) {
  window.location.href = pageUrl;
}