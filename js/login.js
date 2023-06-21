let login = document.getElementById("login");
let regetPass = document.getElementById("reget_password");
let btnRegotPass = document.getElementById("btn__reget-password");
let register = document.getElementById("register");
let btnRegister = document.getElementById("btn__register");
let btnLogin = document.getElementById("btn__login");

function toRegetPass() {
    login.style.display = 'none';
    regetPass.style.display = 'block';
    register.style.display = 'none';
}
function toRegister() {
    login.style.display = 'none';
    regetPass.style.display = 'none';
    register.style.display = 'block';
}
function toLogin() {
    login.style.display = 'block';
    regetPass.style.display = 'none';
    register.style.display = 'none';
}
btnRegotPass.addEventListener("click",toRegetPass);
btnRegister.addEventListener('click',toRegister);
btnLogin.addEventListener('click',toLogin);

