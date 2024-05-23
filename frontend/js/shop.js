let products = {
    data:[{
        productName:"Raw Meat",
        category:"Meat",
        price:400,
        image:"images/Meat.png",
        inCart:0,
        
       
    },
    {
        productName:"Raw Chicken",
        category:"ChickenMeat",
        price:130,
        image:"images/chicken.png",
        inCart:0,
        
    },
    {
        productName:"Banana",
        category:"Fruits&Vegetables",
        price:50,
        image:"images/banana.png",
        inCart:0,
      
    },
    {
        productName:"Raw Fish",
        category:"Fishmeat",
        price:100,
        image:"images/fish.png",
        inCart:0,
      
    },
],
};

for(let i of products.data){
   //create cards
   
   let card = document.createElement("div");
   //card must have a cat and stay hidden
   card.classList.add("card", i.category , "hide");
   //image div
   let imgContainer = document.createElement("div");
   imgContainer.classList.add("image-container");
   
//img tag
let image =document.createElement("img");
image.setAttribute("src", i.image);
imgContainer.appendChild(image);
card.appendChild(imgContainer);
image.id ="imgid";

//add button
let btn = document.createElement("button");
btn.id ="addbtn";
btn.textContent = "+";

//container

let container = document.createElement("div");
container.classList.add("container");
//product name
let name = document.createElement("h5");
name.classList.add("product-name");
name.innerText = i.productName.toUpperCase();
container.appendChild(name);

//prices
let price = document.createElement("h6");
price.innerText = "e£" + i.price;
container.appendChild(price);




card.appendChild(container);
container.appendChild(btn);
document.getElementById("products").appendChild(card);
}

//category passed from button
function filterProduct(value) {
    //button class code
let buttons = document.querySelectorAll(".button-value");
buttons.forEach((button) => {
  //check value 
  if(value.toUpperCase() == button.innerText.toUpperCase()){
    button.classList.add("active");
  } else{
    button.classList.remove("active");
  }
});


//select all prod
let elements = document.querySelectorAll(".card");
//cards loops
elements.forEach((element) => {
    //display all card in all
    if(value == "all"){
        element.classList.remove("hide");
    }else{
        //check 
        if(element.classList.contains(value)){
            //display based on category
            element.classList.remove("hide");
        }else{
            //hide other elements
            element.classList.add("hide");
        }
    }
});

}



//search button
document.getElementById("search").addEventListener("click", () =>{
    
    let searchInput =document.getElementById("search-input").value;
    let elements =document.querySelectorAll(".product-name");
    let cards= document.querySelectorAll(".card");
    

    //loop through prod
    elements.forEach((element,index) => {
        //check if text include search value
        if(element.innerText.includes(searchInput.toUpperCase())){
            //display matching cards
            cards[index].classList.remove("hide");
        }else{
            //hide others
            cards[index].classList.add("hide");
        }
    })
});

//initally display all products

window.onload = () =>   {
    filterProduct("all");
};


//add to cart btn

let carts = document.querySelectorAll('#addbtn');





for (let i=0; i < carts.length;i++){
   
    carts[i].addEventListener('click', () =>{
        cartNumbers(products.data[i]);
        totalCost(products.data[i]);
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){

        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product){

    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);

if(productNumbers){
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1;
}else{
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
}

setItems(product);


}


function setItems(product){
   
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    


    if(cartItems != null){
   
if(cartItems[product.productName] == undefined) {
    cartItems = {
        ...cartItems,
        [product.productName]: product
    }
}


        cartItems[product.productName].inCart += 1;
    }else{

    product.inCart = 1;

    cartItems = {[product.productName]: product
    }
    }

  
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

//calculate the total cost

function totalCost(product){

    //console.log('the product price is',product.price);
let cartCost = localStorage.getItem('total cost');




if(cartCost != null){
    cartCost = parseInt(cartCost);
localStorage.setItem('total cost', cartCost + product.price);
}else{
    localStorage.setItem("total cost", product.price);
}

}


onLoadCartNumbers();