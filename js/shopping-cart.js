//(function () {
//  const shoppingBag = document.querySelector(".shopping-bag");
//const addToCart = document.querySelector(".sale__items-item-button");

//shoppingBag.style.display = "none";
//})();

const cartProductElement = document.querySelector(".shopping-cart-products");

//cart array

let cart = [];

//Add to Cart
function addToCart(id) {
  // check if product already exist in cart
  if (cart.some((product) => product.id === id)) {
    alert("Product already in cart!");
  } else {
    const product = items.find((item) => item.id === id);

    cart.push({
      ...product,
      numberOfUnits: 1,
    });
    console.log(cart);
  }
  updateCart();
}

//update cart

function updateCart() {
  renderCartProducts();
  // renderSubtotal();
}

// render cart products

function renderCartProducts() {
  cartProductElement.innerHTML = ""; //clear cart element
  cart.forEach((item) => {
    cartProductElement.innerHTML += `
    <article class="shopping-cart__products">
          <h6 class="shopping-cart__h6">Products</h6>
          <div class="shopping-cart__item">
              <img src="${item.smallImgUrl}" alt="${item.name}">
              <h6 class="shopping-cart__h6">${item.name}</h6>
              <div class="units">
                  <div class="btn minus">-</div>
                  <div class="number">${item.numberOfUnits}</div>
                  <div class="btn plus">+</div>
              </div>
          </div>
    </article>
    `;
  })
}