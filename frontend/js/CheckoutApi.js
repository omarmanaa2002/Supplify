function getData() {
    const price = localStorage.getItem('total cost');
    const prods = JSON.parse(localStorage.getItem('productsInCart'));
    console.log(price);
    console.log(prods);

}

window.onload = async () => {

    getData();
}