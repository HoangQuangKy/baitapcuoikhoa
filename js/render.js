let cardEle = document.querySelector(".row-product-view");
console.log(cardEle);

window.onload = () => {

    fetch("https://649c5833048075719237fecf.mockapi.io/san-pham")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // render(data);   
        })
        .catch((err) => console.log(err));
};

function render(listItems) {
    totalHtml = "";
    for (let index of listItems) {
        let rawHTML = `
        <div class="product-grid">
            <div class="product-meadi">
                <a href="">
                    <img src="${index.avatar}" alt="">
                </a>
                <div class="overlay">
                    <div class="overlay-icon">
                        <i class="fa-solid fa-bag-shopping"></i>
                    </div>
                </div>
                <div class="sale">
                    <a href="">sale</a>
                </div>
            </div>
            <div class="product--info">
                <div class="product-title">${index.name}</div>
                <div class="product-price">${index.sell}</div>
            </div>
        </div>
       `;
        totalHtml += rawHTML;
    };
    cardEle.innerHTML = totalHtml;
}
