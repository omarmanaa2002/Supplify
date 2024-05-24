// function displayCart() {
//   let cartItem = localStorage.getItem("productsInCart");
//   cartItem = JSON.parse(cartItem);
//   let productcon = document.querySelector(".products1");
//   console.log(cartItem);

//   let cartCost = localStorage.getItem('total cost');
//   if (cartItem && productcon) {
//     productcon.innerHTML = '';
//     Object.values(cartItem).map(item => {
//       productcon.innerHTML += `
//     <div class="product">
//         <button class="cartcl" onclick="removeItem('${item.id}')">x</button>
//         <img class="imgcart" src="${item.image}">
//         <span>${item.productName}<span>
//     </div>
//     <div class="price">£${item.price}</div>
//     <div class="quantity">
//         <button onclick="increment('${item.id}')" class="cartcl">+</button>
//         <span>${item.quantity}</span>
//         <button onclick="decrement('${item.id}')" class="cartcl">-</button>
//     </div>
// `;

//     });

//     productcon.innerHTML += `<div class="totalCon">
//                                    <h4 class="totalTil">Total price</h4>
//                                    <h4 class="Btotal">e£${cartCost},00</h4>
//                                 </div>`;
//   }
// }

// function removeItem(id) {
//   let cartItems = localStorage.getItem("productsInCart");
//   localStorage.removeItem("cartNumbers");


//   cartItems = JSON.parse(cartItems);

//   // Convert the object to an array
//   let cartArray = Object.values(cartItems);
//   const index = cartArray.findIndex(item => item.id === id);

//   // Remove the item at the specified index
//   const removed = cartArray.splice(index, 1);
//   const price = localStorage.getItem("total cost");
//   console.log(price);
//   console.log(removed);
//   localStorage.setItem("total cost", JSON.stringify(price - removed[0].price));
//   // Convert the array back to an object
//   let updatedCartItems = {};
//   cartArray.forEach(item => {
//     updatedCartItems[item.id] = item;

//   });

//   // Update local storage
//   localStorage.setItem("productsInCart", JSON.stringify(updatedCartItems));


//   // Refresh the cart display
//   displayCart();
// }

// function increment(id) {
//   console.log(id);
//   let cartItems = localStorage.getItem("productsInCart");
//   cartItems = JSON.parse(cartItems);

//   // Increment the quantity of the item
//   const cartItemsArray = Object.values(cartItems);
//   const index = cartItemsArray.findIndex(item => item.id === id);
//   console.log(index);

//   // Remove the item at the specified index
//   cartItems[index].quantity++;

//   // Update local storage
//   localStorage.setItem("productsInCart", JSON.stringify(cartItems));

//   // Refresh the cart display
//   displayCart();
// }

// function decrement(id) {
//   let cartItems = localStorage.getItem("productsInCart");
//   cartItems = JSON.parse(cartItems);

//   const cartItemsArray = Object.values(cartItems);
//   const index = cartItemsArray.findIndex(item => item.id === id);

//   // Remove the item at the specified index
//   // Check if the quantity is already 1, then remove the item instead of decrementing
//   if (cartItems[index].quantity === 1) {
//     removeItem(id);
//     return;
//   }

//   // Decrement the quantity of the item
//   cartItems[index].quantity--;

//   // Update local storage
//   localStorage.setItem("productsInCart", JSON.stringify(cartItems));

//   // Refresh the cart display
//   displayCart();
// }

// displayCart();


// function displayCart() {
//   let cartItem = localStorage.getItem("productsInCart");
//   cartItem = JSON.parse(cartItem);
//   let productcon = document.querySelector(".products1");
//   console.log(cartItem);

//   let cartCost = localStorage.getItem('total cost');
//   if (cartItem && productcon) {
//     productcon.innerHTML = '';
//     Object.values(cartItem).map(item => {
//       productcon.innerHTML += `
//     <div class="product">
//         <button class="cartcl" onclick="removeItem('${item.id}')">x</button>
//         <img class="imgcart" src="${item.image}">
//         <span>${item.productName}<span>
//     </div>
//     <div class="price">£${item.price}</div>
//     <div class="quantity">
//         <button onclick="increment('${item.id}')" class="cartcl">+</button>
//         <span>${item.quantity}</span>
//         <button onclick="decrement('${item.id}')" class="cartcl">-</button>
//     </div>
// `;

//     });

//     productcon.innerHTML += `<div class="totalCon">
//                                    <h4 class="totalTil">Total price</h4>
//                                    <h4 class="Btotal">e£${cartCost},00</h4>
//                                 </div>`;
//   }
// }

// function removeItem(id) {
//   let cartItems = localStorage.getItem("productsInCart");
//   localStorage.removeItem("cartNumbers");


//   cartItems = JSON.parse(cartItems);

//   // Convert the object to an array
//   let cartArray = Object.values(cartItems);
//   const index = cartArray.findIndex(item => item.id === id);

//   // Remove the item at the specified index
//   const removed = cartArray.splice(index, 1);
//   const price = localStorage.getItem("total cost");
//   console.log(price);
//   console.log(removed);
//   localStorage.setItem("total cost", JSON.stringify(price - removed[0].price));
//   // Convert the array back to an object
//   let updatedCartItems = {};
//   cartArray.forEach(item => {
//     updatedCartItems[item.id] = item;

//   });

//   // Update local storage
//   localStorage.setItem("productsInCart", JSON.stringify(updatedCartItems));


//   // Refresh the cart display
//   displayCart();
// }

// function increment(id) {
//   console.log(id);
//   let cartItems = localStorage.getItem("productsInCart");
//   cartItems = JSON.parse(cartItems);

//   // Increment the quantity of the item
//   const cartItemsArray = Object.values(cartItems);
//   const index = cartItemsArray.findIndex(item => item.id === id);
//   console.log(index);

//   // Remove the item at the specified index
//   cartItems[index].quantity++;

//   // Update local storage
//   localStorage.setItem("productsInCart", JSON.stringify(cartItems));

//   // Refresh the cart display
//   displayCart();
// }

// function decrement(id) {
//   let cartItems = localStorage.getItem("productsInCart");
//   cartItems = JSON.parse(cartItems);

//   const cartItemsArray = Object.values(cartItems);
//   const index = cartItemsArray.findIndex(item => item.id === id);

//   // Remove the item at the specified index
//   // Check if the quantity is already 1, then remove the item instead of decrementing
//   if (cartItems[index].quantity === 1) {
//     removeItem(id);
//     return;
//   }

//   // Decrement the quantity of the item
//   cartItems[index].quantity--;

//   // Update local storage
//   localStorage.setItem("productsInCart", JSON.stringify(cartItems));

//   // Refresh the cart display
//   displayCart();
// }

// displayCart();


function displayCart() {
  let cartItems = JSON.parse(localStorage.getItem("productsInCart"));
  let productcon = document.querySelector(".products1");
  let cartCost = localStorage.getItem('total cost');

  if (cartItems && productcon) {
    productcon.innerHTML = '';
    Object.keys(cartItems).forEach(key => {
      let item = cartItems[key];
      productcon.innerHTML += `
        <div class="product">
          <button class="cartcl" onclick="decrement('${key}')">x</button>
          <img class="imgcart" src="${item.image}">
          <span>${item.productName}</span>
        </div>
        <div class="price">£${item.price}</div>
        <div class="quantity">
          <button onclick="increment('${key}')" class="cartcl">+</button>
          <span>${item.quantity}</span>
          <button onclick="decrement('${key}')" class="cartcl">-</button>
        </div>
        <div class="total">£${item.quantity * item.price},00</div>
      `;
    });

    productcon.innerHTML += `<div class="totalCon">
                               <h4 class="totalTil">Total price</h4>
                               <h4 class="Btotal">£${cartCost}</h4>
                             </div>`;
  }
}

function updateTotalCost(delta) {
  let totalCost = parseFloat(localStorage.getItem("total cost")) || 0;
  totalCost += delta;
  localStorage.setItem("total cost", totalCost.toFixed(2));
}

function updateCartNumbers(delta) {
  let cartNumbers = parseInt(localStorage.getItem("cartNumbers")) || 0;
  cartNumbers += delta;
  localStorage.setItem("cartNumbers", cartNumbers);
}

function removeItem(key) {
  let cartItems = JSON.parse(localStorage.getItem("productsInCart"));
  let removedItem = cartItems[key];
  delete cartItems[key];

  updateTotalCost(-removedItem.price * removedItem.quantity);
  updateCartNumbers(-removedItem.quantity);
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
  displayCart();
}

function increment(key) {
  let cartItems = JSON.parse(localStorage.getItem("productsInCart"));
  cartItems[key].quantity++;

  updateTotalCost(cartItems[key].price);
  updateCartNumbers(1);
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
  displayCart();
}

function decrement(key) {
  let cartItems = JSON.parse(localStorage.getItem("productsInCart"));
  if (cartItems[key].quantity === 1) {
    removeItem(key);
  } else {
    cartItems[key].quantity--;

    updateTotalCost(-cartItems[key].price);
    updateCartNumbers(-1);
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    displayCart();
  }
}

function navigateCheckout() {
  let cartItems = JSON.parse(localStorage.getItem("productsInCart"));

  if (cartItems) {
    window.location.href = 'checkout.html'

  }
}

displayCart();
