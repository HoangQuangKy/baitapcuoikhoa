let loginEle = document.getElementById("login-form");

loginEle = document.addEventListener("submit", (e) => {
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
})
function isLoginPage(list, email, password) {
    let isLogin = false;
    for (let i = 0; i < list.length; i++) {
        if (list[i].email === email && list[i].password === password) {
            isLogin = true;
            break;
        }
    }
    return isLogin = false;
}