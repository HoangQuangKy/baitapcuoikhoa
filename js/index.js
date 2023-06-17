let personIconEle = document.getElementsByClassName("profile")[0];
let loginBoxEle = document.getElementsByClassName("login-box")[0];
let bigContent = document.getElementsByClassName("big-content")[0];
const discountInformationItemEle = document.querySelectorAll("discount-information-item");
const prevButtonEle = document.getElementById("prevButton");
const nextButtonEle = document.getElementById("nextButton");
const displayBannerEle = document.getElementById("display-banner");
let img = [
    "./imgs/banner/ngọc-trinh.png",
    "./imgs/banner/nghịch.png",
    "./imgs/banner/_Trong.png"
]
let currentIndex = 0;
//-------------Function---------------
function hidden() {
    loginBoxEle.classList.toggle("d-none")
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
function display () {
    displayBannerEle.src = img[currentIndex];
}
function prev (){
    currentIndex = currentIndex -1;
    display();
}
function next (){
    currentIndex = currentIndex+1;
    display;
}
//-------------------------------------


personIconEle.addEventListener("click", hidden); 
bigContent.addEventListener("click",refresh);

for (let i = 0; i < discountInformationItemEle.length; i++) {
    discountInformationItemEle[i].addEventListener('click',upToHeader)
}
prevButtonEle.addEventListener("click",prev);
nextButtonEle.addEventListener("click",next);
console.log(currentIndex);