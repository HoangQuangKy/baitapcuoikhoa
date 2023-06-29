let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let producst = [
    { 
    id:1,
    name: "Nhẫn ngọc trai cao cấp",
    price: 998.000,
    image: './img/nhan-doi-kim-cuong.webp'},
   {
    id:2,
    name: "Vòng tay cao cấp",
    price: 500.000,
    image: './img/VONG_TAY_CC.webp',
   },
{   id: 3, 
   name: "Nhẫn vàng cao cấp",
   price: 400.000,
    image: './img/nhan-vang.webp'
},
{   id: 4,
   name: "Nhẫn kim cương cao cấp",
    price : 700.000,
    image: './img/nhan-kim-cuong.webp'
},
{    id: 5,
    name: "Nhẫn tình yêu",
   price: 900.000,
    image: './img/nhan-tinh-yeu.webp'
},
{   id: 6,
    name: "Bông tai cao cấp",
    price : 500.000,
    image: './img/bongtaicc.webp'
},
{   id: 7,
   name : "Bông tai ngọc trai",
   price : 600.000,
    image: './img/bong-tai-ngoc-trai.webp'

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
}, 
// RENDER 
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${producst.image}">
            <div class="title">${product.name}</div>
            <div class="price">${product.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity)
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    
