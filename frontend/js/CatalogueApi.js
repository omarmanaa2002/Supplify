const baseUrl = `http://localhost:8000`

async function postCatalogueData() {

    // Convert form data to a plain object (optional, adjust based on your API requirements)
    const catalogueData = {
      // Extract specific data from formData (e.g., formData.get('name'), formData.get('description'))
      name: document.getElementById('product_name').value,
      image: document.getElementById('product_image_hidden').value,
      descrip: document.getElementById('product_description').value,
      prodType: document.getElementById('product_types').value,
      price: document.getElementById('price').value,
      weight: document.getElementById('weight').value,
      quantity: document.getElementById('quantity').value,
      proddate: document.getElementById('production_date').value,
      expdate: document.getElementById('expiry_date').value,
    };
    if(!catalogueData.descrip ){
      alert("No")
      return
    }
      
    try {
      const response = await fetch(`${baseUrl}/Cat/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(catalogueData) // Serialize the catalogue data to JSON
      });
  
      // Check if the response is okay
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Parse the JSON from the response
      const data = await response.json();
      console.log('Catalogue data created:', data); // Handle successful creation
  
      // Handle response data
      if (data.errorOcurred) {
        alert(data.message);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('There was a problem creating catalogue data:', error);
      // Handle errors (e.g., display error message to the user)
    }
  
  }