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
        top:0,
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
bigContent.addEventListener("click",refresh);

for (let i = 0; i < discountInformationItemEle.length; i++) {
    discountInformationItemEle[i].addEventListener('click',upToHeader)
}

window.onscroll = function() {fixed()};

var splide = new Splide( '.splide', {
    type   : 'loop',
    drag   : 'free',
    perPage: 3,
  } );
splide.mount();

var productItems = document.getElementsByClassName("product-item");

function removeDNoneClass() {
  var dNoneElement = this.getElementsByClassName("d-none")[0];
  if (dNoneElement) {
    dNoneElement.classList.remove("d-none");
  }
}

function addDNoneClass() {
  var dNoneElement = this.getElementsByClassName("d-none")[0];
  if (dNoneElement) {
    dNoneElement.classList.add("d-none");
  }
}

for (let i = 0; i < productItems.length; i++) {
  productItems[i].addEventListener("mouseenter", removeDNoneClass);
  productItems[i].addEventListener("mouseleave", addDNoneClass);
}