(async function () {
    function renderItems(items) {
      const itemsContainer = document.querySelector(".sale__items");
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
  
    const response = await fetch("sale-items.json");
    const items = await response.json();
  
    renderItems(items);
  })();
  