const baseUrl = `http://localhost:8000`

function displayCart() {
  const price = localStorage.getItem('total cost');
  const prods = JSON.parse(localStorage.getItem('productsInCart'));
  const cartBody = document.getElementById('cart-body');
  const subtotalElement = document.getElementById('subtotal');
  const orderTotalElement = document.getElementById('ordertotal');

  // Clear the existing content
  cartBody.innerHTML = '';

  // Populate the cart items
  for (const [key, product] of Object.entries(prods)) {
    const productRow = document.createElement('tr');
    const total = product.price * product.quantity;
    productRow.innerHTML = `
        <td>${product.name} <strong class="mx-2">x</strong> ${product.quantity}</td>
        <td>£${total.toFixed(2)}</td>
      `;
    cartBody.appendChild(productRow);
  }

  // Update the subtotal and order total
  subtotalElement.textContent = `£${price}`;
  orderTotalElement.innerHTML = `<strong>£${price}</strong>`;
}

async function addOrder() {
  const price = localStorage.getItem('total cost');
  const prods = JSON.parse(localStorage.getItem('productsInCart'));
  const itemsCount = Number.parseInt(localStorage.getItem('cartNumbers'));
  const body = {
    cart: prods,
    totalprice: price,
    quantity: itemsCount
  }
  try {
    const response = await fetch(`${baseUrl}/order/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body) // Serialize the catalogue data to JSON
    });

    const data = await response.json();
    console.log(data);
    if (data.error) {
      console.log("Error occurred while placing order");
    }
    else{
      window.location.href = 'thankyou.html'; 
    }
  }
  catch {
    console.error('Error creating order:');
  }
}

// Call the function to display the cart
displayCart();
