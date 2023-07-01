var text = {
    contact: [{
        productTitle: "Nhẫn ngọc trai cao cấp",
        productPrice: 998.000,
        image: './imgs/blog/nhan-ngoc-trai.webp'
    },
    {
        productTitle: "Vòng tay cao cấp",
        productPrice: 500.000,
        image: './imgs/blog/vong-tay-bk.webp'
    },
    {
        productTitle: "Nhẫn vàng cao cấp",
        productPrice: 400.000,
        image: './imgs/blog/nhan-vang.webp'
    },
    {
        productTitle: "Nhẫn kim cương cao cấp",
        productPrice: 700.000,
        image: './imgs/blog/nhan-doi-kim-cuong.webp'
    },
    {
        productTitle: "Nhẫn tình yêu",
        productPrice: 900.000,
        image: './imgs/blog/nhan-tinh-yeu.webp'
    },
    {
        productTitle: "Bông tai cao cấp",
        productPrice: 500.000,
        image: './imgs/blog/bong-tai-cc.webp'
    },
    {
        productTitle: "Bông tai ngọc trai",
        productPrice: 600.000,
        image: './imgs/blog/bong-tai-ngoc-trai.webp'

    },
    {
        productTitle: "Nhẫn đôi kim cương",
        productPrice: 910.000,
        image: './imgs/blog/nhan-kim-cuong.webp'
    },
    {
        productTitle: "Chìa khóa tình yêu",
        productPrice: 400.000,
        image: './imgs/blog/chia-khoa-TY.webp'
    },
    {
        productTitle: "Dây chuyền số 8",
        productPrice: 230.000,
        image: './imgs/blog/day-duyen-so8.webp'
    },
    {
        productTitle: "Vòng cổ đá xanh",
        productPrice: 300.000,
        image: './imgs/blog/vong-co.webp'
    },
    {
        productTitle: "Nhẫn vòng basis",
        productPrice: 400.000,
        image: './imgs/blog/basis.webp'
    },
    {
        productTitle: "Bông tai phá cách",
        productPrice: 740.000,
        image: './imgs/blog/bong-tai-pha-cach.webp'
    },
    {
        productTitle: "Vòng tay tình nhân",
        productPrice: 690.000,
        image: './imgs/blog/vong-tay-tinh-nhan.webp'
    },
    {
        productTitle: "Nhẫn vòng đặc biệt",
        productPrice: 999.000,
        image: './imgs/blog/nhan.webp'
    },
    ]
}
let formEle = document.getElementById("range-total");
let productPriceEle = document.getElementsByClassName("product-price");
let productGridEle = document.getElementsByClassName("product-grid");

formEle.addEventListener("submit", (e) => {
    e.preventDefault();
    let price = document.querySelector("input[name='amountRange']").value;
    let priceNum = Number(price);

    for (let i = 0; i < productPriceEle.length; i++) {
        let priceText = productPriceEle[i].innerText;
        let numberPrice = priceText.replace(/\D/g, '');
        let numberPriceNum = Number(numberPrice);

        if (priceNum === 1000000) {
            for (let j = 0; j < productGridEle.length; j++) {
                productGridEle[j].style.display = 'block';
            }
        } else if (numberPriceNum <= priceNum) {
            productGridEle[i].style.display = "block";
        } else {
            productGridEle[i].style.display = "none";
        }
    }
});
window.addEventListener("DOMContentLoaded", () => {
    const profileEle = document.getElementById("userName");
    const email = localStorage.getItem("email");
    if (email) {
        profileEle.innerHTML = `
      <a href="./login.html"><img src="./img/Person.png" alt="" class="profile--img"></a>
      <p style="display: flex;padding-top:15px; font-size: 15px">${email}</p>`
    }
})
let menuButtonEle = document.getElementById("click-img");
let noneELe = document.getElementsByClassName("none")[0];
menuButtonEle.addEventListener("click", () => {
    noneELe.classList.toggle("none");
    noneELe.classList.toggle("content-none")
})
let acc = document.getElementsByClassName("accordion");

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
let btnIcnEles = document.getElementById("btn-add");
let btnBlockEles = document.getElementById("list-none");
btnIcnEles.addEventListener("click", () => {
    btnBlockEles.classList.toggle("block")
})

