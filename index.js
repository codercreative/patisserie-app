import { menuArr } from "./data.js";

const menuEl = document.getElementById("menu");

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
           <p class="emoji">${emoji}</p>
            <div class="menu-items">
              <h2>${name}</h2>
              <p>${ingredients.join(", ")}</p>
              <p>$${price}</p></div>
        </div>
        <button class="add-btn" data-id=${id}>+</button>
      </div>
    `;
  });
  return menuHtml;
}

//display order
//clicking on item and adding to order list
document.addEventListener("click", (e) => {
  if (e.target.dataset.id) {
    const id = e.target.dataset.id;
    const updateIndex = cartArr.findIndex((item) => item.id == id);

    if (updateIndex > -1) {
      cartArr[updateIndex].quantity += 1;
    } else {
      cartArr.push({ ...menuArr[id], quantity: 1 });
    }
    console.log(cartArr);
  }
});

function displayCartHtml(cart) {
  let cartHtml = "";

  let totalPrice = 0;
}
