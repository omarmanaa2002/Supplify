const baseUrl = `http://localhost:8000`

let products = [

];

async function getProducts() {

    try {
        const response = await fetch(`${baseUrl}/products`)
        const data = await response.json()
        products = data.result;
        console.log(data.result);
        for (i in products) {
            products[i].quantity = 1;
        }
        console.log(products[2].quantity)
    }

    catch {
        console.log("Error fetching products")
    }
}

window.onload = async () => {
    await getProducts();

    const formatDateString = (dateString) => {
        const date = new Date(dateString);
        if (isNaN(date)) {
            throw new Error('Invalid date string');
        }

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    for (let i of products) {
        //create cards

        let card = document.createElement("div");
        //card must have a cat and stay hidden
        card.classList.add("card", i.prodType, "hide");
        //image div
        let imgContainer = document.createElement("div");
        imgContainer.classList.add("image-container");

        //img tag
        let image = document.createElement("img");
        image.setAttribute("src",i.image);
        imgContainer.appendChild(image);
        card.appendChild(imgContainer);
        image.id = "imgid";

        //add button
        let btn = document.createElement("button");
        btn.id = "addbtn";
        btn.textContent = "+";

        //container

        let container = document.createElement("div");
        container.classList.add("container");
        //product name
        let name = document.createElement("h5");
        name.classList.add("product-name");
        name.innerText = i.name.toUpperCase();
        container.appendChild(name);

        let descrip = document.createElement("p");
        descrip.classList.add("product-descrip");
        descrip.innerText = i.descrip
        container.appendChild(descrip);

        let weight = document.createElement("p");
        weight.classList.add("weight");
        weight.innerText = i.weight + "kg"
        container.appendChild(weight);


        let proddate = document.createElement("p");
        proddate.classList.add("product-date");
        proddate.innerText = "product date " + formatDateString(i.proddate)
        container.appendChild(proddate);

        let expdate = document.createElement("p");
        expdate.classList.add("product-expdate");
        expdate.innerText = "expire date " + formatDateString(i.expdate)
        container.appendChild(expdate);

        //prices
        let price = document.createElement("h6");
        price.innerText = "e£" + i.price;
        container.appendChild(price);




        card.appendChild(container);
        container.appendChild(btn);
        document.getElementById("products").appendChild(card);
    }


    filterProduct("all");
    onLoadCartNumbers();
    let carts = document.querySelectorAll('#addbtn');





    for (let i = 0; i < carts.length; i++) {

        carts[i].addEventListener('click', () => {
            cartNumbers(products[i]);
            totalCost(products[i]);
        })
    }

    document.getElementById("search").addEventListener("click", () => {

        let searchInput = document.getElementById("search-input").value;
        let elements = document.querySelectorAll(".product-name");
        let cards = document.querySelectorAll(".card");


        //loop through prod
        elements.forEach((element, index) => {
            //check if text include search value
            if (element.innerText.includes(searchInput.toUpperCase())) {
                //display matching cards
                cards[index].classList.remove("hide");
            } else {
                //hide others
                cards[index].classList.add("hide");
            }
        })
    });


}



// for (let i of products) {
//     //create cards

//     let card = document.createElement("div");
//     //card must have a cat and stay hidden
//     card.classList.add("card", i.prodType, "hide");
//     //image div
//     let imgContainer = document.createElement("div");
//     imgContainer.classList.add("image-container");

//     //img tag
//     let image = document.createElement("img");
//     image.setAttribute("src", i.image);
//     imgContainer.appendChild(image);
//     card.appendChild(imgContainer);
//     image.id = "imgid";

//     //add button
//     let btn = document.createElement("button");
//     btn.id = "addbtn";
//     btn.textContent = "+";

//     //container

//     let container = document.createElement("div");
//     container.classList.add("container");
//     //product name
//     let name = document.createElement("h5");
//     name.classList.add("product-name");
//     name.innerText = i.name.toUpperCase();
//     container.appendChild(name);

//     //prices
//     let price = document.createElement("h6");
//     price.innerText = "e£" + i.price;
//     container.appendChild(price);




//     card.appendChild(container);
//     container.appendChild(btn);
//     document.getElementById("products").appendChild(card);
// }

//category passed from button
function filterProduct(value) {
    //button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check value 
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });


    //select all prod
    let elements = document.querySelectorAll(".card");
    //cards loops
    elements.forEach((element) => {
        //display all card in all
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            //check 
            if (element.classList.contains(value)) {
                //display based on category
                element.classList.remove("hide");
            } else {
                //hide other elements
                element.classList.add("hide");
            }
        }
    });

}



//search button


//initally display all products


//add to cart btn



function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {

        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);


}


function setItems(product) {

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);



    if (cartItems != null) {

        if (cartItems[product.name] == undefined) {
            cartItems = {
                ...cartItems,
                [product.name]: product
            }
        }


        cartItems[product.name].inCart += 1;
    } else {

        product.inCart = 1;

        cartItems = {
            [product.name]: product
        }
    }


    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

//calculate the total cost

function totalCost(product) {

    //console.log('the product price is',product.price);
    let cartCost = localStorage.getItem('total cost');




    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('total cost', cartCost + product.price);
    } else {
        localStorage.setItem("total cost", product.price);
    }

}


