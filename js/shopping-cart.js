//shopping-bag icon hide/display
const shoppingBag = document.querySelector(".shopping-bag");
const displayBag = document.querySelector(".sale__items-item-button");
shoppingBag.style.display = "none";

const cartProductElement = document.querySelector(".shopping-cart-products");

//cart array

let cart = [];

//Add to Cart
function addToCart(id) {
  // check if product already exist in cart
  if (cart.some((product) => product.id === id)) {
    shoppingBag.style.display = "block"; //to display shopping bag icon
    changeNumberOfUnits("plus", id);
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
              <p class="shopping-cart__price">$ ${item.price}</p>
              <div class="units">
                  <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                  <div class="number">${item.numberOfUnits}</div>
                  <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>
              </div>
          </div>
    </article>
    `;
  });
}

//change number of units
function changeNumberOfUnits(action, id) {
  cart = cart.map((product) => {
    let oldNumberOfUnits = product.numberOfUnits;

    if (product.id === id) {
      if (action === "minus" && oldNumberOfUnits > 1) {
        oldNumberOfUnits--;
      } else if (action === "plus") {
        oldNumberOfUnits++;
      }
    }
    return {
      ...product,
      numberOfUnits: oldNumberOfUnits,
    };
  });

  updateCart();
}