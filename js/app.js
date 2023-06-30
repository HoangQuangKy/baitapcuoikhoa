let openShopping = document.querySelector('.shopping'); //
let closeShopping = document.querySelector('.closeShopping');//
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})

let product = [
    {
        id: 1,
        name: "Nhẫn ngọc trai cao cấp",
        price: 998000,
        image: './imgs/blog/nhan-ngoc-trai.webp'
    },
    {
        id: 2,
        name: "Vòng tay cao cấp",
        price: 500000,
        image: './imgs/blog/vong-tay-bk.webp'
    },
    {
        id: 3,
        name: "Nhẫn vàng cao cấp",
        price: 400000,
        image: './imgs/blog/nhan-vang.webp'
    },
    {
        id: 4,
        name: "Nhẫn kim cương cao cấp",
        price: 700000,
        image: './imgs/blog/nhan-doi-kim-cuong.webp'
    },
    {
        id: 5,
        name: "Nhẫn tình yêu",
        price: 900000,
        image: './imgs/blog/nhan-tinh-yeu.webp'
    },
    {
        id: 6,
        name: "Bông tai cao cấp",
        price: 500000,
        image: './imgs/blog/bong-tai-cc.webp'
    },
    {
        id: 7,
        name: "Bông tai ngọc trai",
        price: 600000,
        image: './imgs/blog/bong-tai-ngoc-trai.webp'

},
{   id: 8,
   name : "Nhẫn đôi kim cương",
    price : 910.000,
    image: './img/nhan-doi-kim-cuong.webp'
},
{   id: 9,
   name : "Chìa khóa tình yêu",
    price: 400.000,
    image: './img/chia-khoa-TY.webp'
},
{   id: 10,
   name : "Dây chuyền số 8",
   price : 230.000,
    image: './img/day-duyen-so8.webp'
},
{   id: 11,
   name : "Vòng cổ đá xanh",
    price : 300.000,
    image: './img/vong-co.webp'
},
{   id: 12,
   name : "Nhẫn vòng basis",
    price : 400.000,
    image: './img/basis.webp'
},
{   id: 13,
    name : "Bông tai phá cách",
   price : 740.000,
    image: './img/bong-tai-pha-cach.webp'
},
{   id: 14,
   name : "Vòng tay tình nhân",
    price : 690.000,
    image: './img/vong-tay-tinh-nhan.webp'
},
{    id: 15,
   name : "Nhẫn vòng đặc biệt",
    price: 999.000,
    image: './img/nhan-hong-KT.webp'
} 
// RENDER 
];
let listCards  = [];
function initApp(){
    producst.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${producst.image}">
            <div class="title">${producst.name}</div>
            <div class="price">${producst.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
        // if (listCards[key]) {
        //     newDiv.innerHTML += `<div class="quantity">${listCards[key].quantity}</div>`;
        // }
    })
}
initApp();
function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(product[key]));
        listCards[key].quantity = 1;

    }
    else {
        listCards[key].quantity++;
        listCards[key].price = listCards[key].quantity * product[key].price;
    }
    reloadCard();
}
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        console.log(value.price)
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString() + 'Đ'}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString() + 'Đ';
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity === 0){
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * product[key].price;
    }
    reloadCard();
}

