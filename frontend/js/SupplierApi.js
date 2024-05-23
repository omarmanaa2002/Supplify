//constants
const baseUrl = `http://localhost:8000`
let info = {};

//APIs
async function getSupp() {
  try {
    const response = await fetch(baseUrl + '/Supplier/getById/664bb6ab638188d96e031cd2');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json(); // Parse response body as JSON
    // Handle successful response
    info = data.result; // Assign result to info variable
    console.log(info);
    var nameElement = document.getElementById('username');
    nameElement.innerText = info.name.fName + " " + info.name.lName;
    var nameElement2 = document.getElementById('email');
    nameElement2.innerText = info.email;
  } catch (error) {
    // Handle errors
    console.error('There was a problem with the API call:', error);
  }
}

window.onload = async () => {
  await getCons();
}



// Attach click event listener to the "Add to Shop" button
const addToShopButton = document.querySelector('.btn.btn-primary');
addToShopButton.addEventListener('click', postCatalogueData);

// Call getSupp function on page load (assuming you still need it)
window.onload = async () => {
  await getSupp();
}


