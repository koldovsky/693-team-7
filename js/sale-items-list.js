(function () {
    const itemsJson = `
    [
        {
            "id": "1",
            "imgUrl": "img/sale/sale_adidas.jpeg",
            "name": "Adidas Cloudfoam Trainers",
            "price": 59.99
        },
        {
            "id": "2",
            "imgUrl": "img/sale/sale_nike.jpeg",
            "name": "Nike Classic Polo T-Shirt",
            "price": 22.99
        },
        {
            "id": "3",
            "imgUrl": "img/sale/sale_puma_top.jpeg",
            "name": "Puma Essential Tank Top",
            "price": 42.99
        },
        {
            "id": "4",
            "imgUrl": "img/sale/sale_puma.jpeg",
            "name": "Puma Fitness Shoes in Grey",
            "price": 59.99
        },
        {
            "id": "5",
            "imgUrl": "img/sale/sale_reebok.jpeg",
            "name": "Reebok Workout Shorts",
            "price": 24.99
        }
    ]
    `;

    function renderItems(items) {
        const itemsContainer = document.querySelector('.sale__items');
        for (const item of items) {
            itemsContainer.innerHTML += `
            <div class="sale__items-item a">
                <a href="catalogue01.html" class="sale__items-item-img"> <img src="${item.imgUrl}"
                alt="${item.name}"> </a>
                <a href="catalogue01.html" class="sale__items-item-link">${item.name}</a>
                <p class="sale__items-item-price">$ ${item.price}</p>
                <button class="sale__items-item-button" type="button" data-bs-toggle="modal"
                data-bs-target="#shopping-cart-modal"> Add to Cart</button>
            </div>
            `;
        }
    }

    const items = JSON.parse(itemsJson);
    renderItems(items);

})();