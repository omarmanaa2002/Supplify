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
  subtotalElement.textContent = `£${price} + 4%`;
  orderTotalElement.innerHTML = `<strong>£${(price * 1.04).toFixed(2)} </strong>`;
}

async function addOrder() {








  function validateEmail(email) {
    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Check if the email matches the regular expression
    if (!emailRegex.test(email)) {
      return false;
    }
    
    // If the format is correct, return true
    return true;
  }






  


function validatePostalCode(postal) {
  
  if (!/^\d+$/.test(postal)) {
    return false;
  }
  
  // If the format is correct, return true
  return true;
}

  function validatePhoneNumber(phone) {
    // Remove any non-numeric characters from the phone number
    const cleaned = phone.replace(/\D/g, '');
    
  
    if (cleaned.length !== 11) {
      return false;
    }
    
    // If the length is correct, return true
    return true;
  }





  
// Function to get current time in 12-hour clock format
  function getCurrentTime12HourFormat() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)
    minutes = minutes < 10 ? '0' + minutes : minutes; // Add leading zero to minutes if necessary
    const currentTime = hours + ':' + minutes + ' ' + ampm;
    return currentTime;
  }



  const date = getCurrentTime12HourFormat();

  const price = localStorage.getItem('total cost');
  const prods = JSON.parse(localStorage.getItem('productsInCart'));
  const itemsCount = Number.parseInt(localStorage.getItem('cartNumbers'));

  const addressInput = document.getElementById("c_address").value; 
  const comnameInput = document.getElementById("c_companyname").value; 
  const provincesInput = document.getElementById("c_prov").value; 
  const emailInput = document.getElementById("c_email").value; 
  const postalInput = document.getElementById("c_postal").value; 
  const phoneInput = document.getElementById("c_phone").value; 
  const ordernote = document.getElementById("c_notes").value; 
  const pricee = (price * 1.04).toFixed(2);

   // Check if addressInput is empty
   if (!addressInput || !comnameInput || !provincesInput || !emailInput || !postalInput || !phoneInput) {
    console.error('empty field');
    alert('Please complete every field.');
    return; // Stop execution of the function
  }

  if (!validatePhoneNumber(phoneInput)) {
    console.error('Invalid phone number format');
    alert('Please enter a valid phone number with 11 digits.');
    return; // Stop execution of the function
  }

  if (!validatePostalCode(postalInput)) {
    alert('Please enter a valid postal code containing only numbers.');
    return;
  }

  if (!validateEmail(emailInput)) {
    alert('Please enter a valid email address.');
    return; // Stop execution of the function
  }
  
  const body = {
    cart: prods,
    totalprice: pricee,
    time: date,
    quantity: itemsCount,
    shippingaddress: addressInput,
    Companyname: comnameInput,
    Provinces: provincesInput,
    Postalzip: postalInput,
    Email: emailInput,
    Phone: phoneInput,
    ordernote: ordernote
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
    else {
      const price = localStorage.removeItem('total cost');
      const prods = localStorage.removeItem('productsInCart');
      const itemsCount = localStorage.removeItem('cartNumbers');
      
      window.location.href = 'thankyou.html';
    }
  }
  catch {
    console.error('Error creating order:');
  }
}

// Call the function to display the cart
displayCart();
