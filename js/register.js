const formEle = document.getElementById("register__form");
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