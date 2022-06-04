//(function () {
//  const shoppingBag = document.querySelector(".shopping-bag");
//const addToCart = document.querySelector(".sale__items-item-button");

//shoppingBag.style.display = "none";
//})();

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
  updateCart;
}

//update cart
function updateCart(){
  renderCartProducts();
  // renderSubtotal();
}

// render cart products
