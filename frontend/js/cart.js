function displayCart() {
    let cartItem = localStorage.getItem("productsInCart");
    cartItem = JSON.parse(cartItem);
  let productcon = document.querySelector(".products1");

  let cartCost = localStorage.getItem('total cost');
    if(cartItem && productcon){

     productcon.innerHTML = '';
     Object.values(cartItem).map(item => {
     productcon.innerHTML += `
     <div class="product">
     <button class="cartcl">x</button>
     <img class="imgcart"src="${item.image}">
     <span>${item.productName}<span>
     </div>
     <div class="price">e£
     ${item.price},00
     </div>
     <div class="quantity"><button class=cartcl>+</button>
    <span>${item.inCart}</span><button class=cartcl>-</button>
     </div>
     <div class="total">${item.inCart * item.price},00</div>
     
     `
     

     });

  productcon.innerHTML += `<div class=totalCon><h4 class=totalTil>Total price</h4><h4 class=Btotal>e£${cartCost},00</h4></div>`;

    }
  }
  displayCart();