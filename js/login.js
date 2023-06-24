let login = document.getElementById("login");
let regetPass = document.getElementById("reget_password");
let btnRegotPass = document.getElementById("btn__reget-password");
let register = document.getElementById("register");
let btnRegister = document.getElementById("btn__register");
let btnLogin = document.getElementById("btn__login");
const formEle = document.getElementById("register__form");
let loginEle = document.getElementById("login-form");
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


formEle.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    const listOfEmail = localStorage.getItem("accounts")
        ? JSON.parse(localStorage.getItem("accounts"))
        : [];

    const isExist = isEmailExist(listOfEmail, email);
    if (isExist) {
        alert("Tài khoản đã tồn tại");
    } else {
        listOfEmail.push({
            email: email,
            password: password,
        });
        console.log(listOfEmail);
        localStorage.setItem("accounts", JSON.stringify(listOfEmail));
        alert("Tài khoản đã được tạo thành công");
    }
});

function isEmailExist(list, email) {
    let isExist = false;
    for (let i = 0; i < list.length; i++) {
        if (list[i].email === email) {
            isExist = true;
            break;
        }
    }
    return isExist;
}
    loginEle = document.addEventListener("submit",(e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    const listOfEmail = localStorage.getItem("accounts")
        ? JSON.parse(localStorage.getItem("accounts"))
        : [];
    
    const isLogin = isLoginPage(listOfEmail,email, password);
        if (isLogin) {
            alert("Đăng nhập thành công");
        } else {
            alert("Đăng nhập thất bại");
}})
function isLoginPage(list, email,password) {
    let  isLogin = false;
    for (let i = 0; i < list.length; i++) {
        if (list[i].email === email && list[i].password === password) {
            isLogin = true;
            break;
        }
    }
    return isLogin = false;
}
loginEle.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    
    const listOfEmail = localStorage.getItem("accounts")
        ? JSON.parse(localStorage.getItem("accounts"))
        : [];
    
    const isLogin = isLoginPage(listOfEmail, email, password);
    if (isLogin) {
        alert("Đăng nhập thành công");
    } else {
        alert("Đăng nhập thất bại");
    }
});

function isLoginPage(list, email, password) {
    let isLogin = false;
    for (let i = 0; i < list.length; i++) {
        if (list[i].email === email && list[i].password === password) {
            isLogin = true;
            break;
        }
    }
    return isLogin;
}