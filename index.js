import { menuArr } from "./data.js";

const menuEl = document.getElementById("menu");
const cartEl = document.getElementById("cart");
const cartSelection = document.getElementById("cart-selection");

const cartArr = [];

//display menu
menuEl.innerHTML = displayMenuHtml(menuArr);
// menu html function
function displayMenuHtml(menu) {
  let menuHtml = "";

  menu.forEach((item) => {
    console.log(item);
    const { id, name, ingredients, price, emoji } = item;
    menuHtml += `
      <div class="menu-section" id=${id}>
        <div class="menu-details"> 
           <p class="emoji" aria-label=${name}>${emoji}</p>
            <div class="menu-items">
              <h2 class="name">${name}</h2>
              <p>${ingredients.join(", ")}</p>
              <p class="price">$${price}</p></div>
        </div>
        <button class="add-btn" data-id=${id}>+</button>
      </div>
    `;
  });
  return menuHtml;
}

//display cart

//clicking on item and adding to cart
document.addEventListener("click", (e) => {
  if (e.target.dataset.id) {
    const id = e.target.dataset.id;
    const updateIndex = cartArr.findIndex((item) => item.id == id);

    // Is the item in the cartArr?
    if (updateIndex > -1) {
      // Add an item to the item already there
      cartArr[updateIndex].quantity += 1;
    } else {
      cartArr.push({ ...menuArr[id], quantity: 1 });
    }
    console.log(cartArr);
    cartSelection.innerHTML = displayCartHtml(cartArr);
    cartEl.classList.remove("hidden");
  }
});

// display cart
function displayCartHtml(cart) {
  let cartHtml = "";

  let totalPrice = 0;

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;

    cartHtml += `
      <div class="all-items" id=${item.id}>
        <p class="selected-name">${item.name} (${item.quantity})</p>
        <p class="selected-total">$${itemTotal}</p>
      </div>
    `;

    totalPrice += itemTotal;
  });
  document.getElementById("cart-price").innerHTML = `$${totalPrice}`;
  return cartHtml;
}
displayCartHtml(cartArr);
