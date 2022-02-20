const products = document.querySelector(".products");
const subTotal = document.querySelector("#cart-subtotal");
const tax = document.querySelector("#cart-tax");
const shipping = document.querySelector("#cart-shipping");
const totalAll = document.querySelector("#cart-total");
eventListeners();
function eventListeners(){
    products.addEventListener("click", increaseAmount);
    products.addEventListener("click", decreaseAmount);
    products.addEventListener("click", removeAmount);
    document.addEventListener("DOMContentLoaded", totalPrice);
};
function increaseAmount(e){
    if(e.target.className === "fas fa-plus"){
        let value = e.target.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.textContent;
        e.target.parentElement.previousElementSibling.textContent++;
        e.target.parentElement.parentElement.parentElement.lastElementChild.textContent = (value * e.target.parentElement.previousElementSibling.textContent).toFixed(2);
    }
    totalPrice();
}
function decreaseAmount(e){
    if(e.target.className === "fas fa-minus" && e.target.parentElement.nextElementSibling.textContent > 1){
        let value = e.target.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.textContent;
        e.target.parentElement.nextElementSibling.textContent--;
        e.target.parentElement.parentElement.parentElement.lastElementChild.textContent = (value * e.target.parentElement.nextElementSibling.textContent).toFixed(2) ; 
        totalPrice();    
    }
}
function removeAmount(e){    
    if(e.target.className === "remove-product"){
        // let value = e.target.parentElement.previousElementSibling.previousElementSibling.firstElementChild.firstElementChild.textContent;
        // console.log(e.target.parentElement.previousElementSibling.children[1].textContent = 1); 
        // e.target.parentElement.parentElement.lastElementChild.textContent = value;
        e.target.parentElement.parentElement.parentElement.remove()
        totalPrice();
    }
}
function totalPrice(e){
    const productTotal = document.querySelectorAll(".product-line-price");
    let total = 0;
    productTotal.forEach((el)=>{
      total += +el.textContent; 
   });
   subTotal.children[1].textContent = total.toFixed(2);
   tax.children[1].textContent = (total * 0.18).toFixed(2);
   let x = shipping.children[1].textContent = (productTotal.length) ? (15).toFixed(2) : (0).toFixed(2);
   totalAll.children[1].textContent = (total + (total * 0.18) + (+x)).toFixed(2);
}
