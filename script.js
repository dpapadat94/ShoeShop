const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.querySelector(".navbar");
const saleSectionBtn = document.querySelector(".sale-section");
const saleSection = document.querySelector("#sale-section");
const productEl = document.querySelector(".pro-container");
const productElw = document.querySelector("#product-w");
const productEls = document.querySelector("#product-s");
const cartspot = document.querySelector(".cart-items");
const subtotal = document.querySelector(".subtotal");
const cartvalue = document.querySelector(".cart-value");
const navbarLink = document.querySelectorAll(".not-active");
let MainImg = document.getElementById("MainImg");
let smallimg = document.querySelectorAll(".small-img");

//hamburger menu
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", (e) => {
    e.preventDefault();
    nav.classList.remove("active");
  });
}

/////smooth scrolling
saleSectionBtn.addEventListener("click", function (e) {
  saleSection.scrollIntoView({ behavior: "smooth" });
});

///// cart functionality
function renderProducts() {
  productsMen.forEach((product) => {
    productEl.innerHTML += ` <div class="pro">
 <img class="product-img" src=${product.img} alt="" />
 <div class="description1">
  <span>${product.brand}</span>
  <h5 class="cart-title">${product.title}</h5>
   <h4 class="cart-price">$${product.price}</h4>
   <p class="size" for="Size">Size:</p>
   <div class="sizes">
   <div tabindex="1">8</div><div tabindex="2">9</div><div tabindex="3">10</div><div tabindex="4">11</div><div tabindex="5">12</div><div tabindex="6">13</div>
   </div>
 </div>
 <button type="button" onclick="addToCart(${product.id})" class="pro-link" href="#">
   add to cart
 </button>
 </div>`;
  });
}
renderProducts();

let cart = [];

//add to cart function
function addToCart(id) {
  if (cart.some((item) => item.id === id)) {
    alert("product already in cart");
  } else {
    const item = productsMen.find((product) => product.id === id);
    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}

function updateCart() {
  renderCartItems();
  renderSubTotal();
}

//calc sub total
function renderSubTotal() {
  let totalPrice = 0;
  let totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  subtotal.innerHTML = `(${totalItems} items) :$${totalPrice.toFixed(2)}`;
  cartvalue.innerHTML = `Cart: ${totalItems}`;
}

function renderCartItems() {
  cartspot.innerHTML = "";
  cart.forEach((item) => {
    cartspot.innerHTML += `<div class="cart-item">
    <div class="item-info" onclick="removeItemFromCart()">
    <img src="${item.img}" alt="${item.title}">
    <h4>${item.title} </h4>
</div>
<div class="unit-price">
<small>$</small>${item.price}
</div>
<div class="btn minus" onclick="changeNumberOfUnits('minus',${item.id})">-</div>
<div class="number">${item.numberOfUnits}</div>
<div class="btn plus" onclick="changeNumberOfUnits('plus',${item.id})">+</div>
<div class="remove" onclick="removeItemFromCart(${item.id})">Remove</div>
</div>
</div>
    `;
  });
}

function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  updateCart();
}

function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let oldNumberOfUnits = item.numberOfUnits;
    if (item.id === id) {
      if (action === "minus") {
        oldNumberOfUnits--;
      } else if (action === "plus") {
        oldNumberOfUnits++;
      }
    }
    return {
      ...item,
      numberOfUnits: oldNumberOfUnits,
    };
  });
  updateCart();
}

function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

function renderProductsW() {
  productsWomen.forEach((product) => {
    productElw.innerHTML += ` <div class="pro">
   <img class="product-img" src=${product.img} alt="" />
   <div class="description1">
    <span>${product.brand}</span>
     <h5 class="cart-title">${product.title}</h5>
     <h4 class="cart-price">$${product.price}</h4>
     <p class="size" for="Size">Size:</p>
     <div class="sizes">
     <div tabindex="1">8</div><div tabindex="2">9</div><div tabindex="3">10</div><div tabindex="4">11</div><div tabindex="5">12</div><div tabindex="6">13</div>
     </div>
   </div>
   <button type="button" onclick="addToCartW(${product.id})" class="pro-link" href="#">
     add to cart
   </button>
   </div>`;
  });
}
renderProductsW();

function addToCartW(id) {
  if (cart.some((item) => item.id === id)) {
    alert("product already in cart");
  } else {
    const item = productsWomen.find((product) => product.id === id);
    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}
//////
function renderProductsS() {
  saleProducts.forEach((product) => {
    productEls.innerHTML += ` <div class="pro">
     <img class="product-img" src=${product.img} alt="" />
     <div class="description1">
      <span>${product.brand}</span>
       <h5 class="cart-title">${product.title}</h5>
       <h4 class="cart-price">$${product.price}</h4>
       <p class="size" for="Size">Size:</p>
       <div class="sizes">
       <div tabindex="1">8</div><div tabindex="2">9</div><div tabindex="3">10</div><div tabindex="4">11</div><div tabindex="5">12</div><div tabindex="6">13</div>
       </div>
     </div>
     <button type="button" onclick="addToCartS(${product.id})" class="pro-link" href="#">
       add to cart
     </button>
     </div>`;
  });
}
renderProductsS();

function addToCartS(id) {
  if (cart.some((item) => item.id === id)) {
    alert("product already in cart");
  } else {
    const item = saleProducts.find((product) => product.id === id);
    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}
function submitAlert() {
  alert("Thank you for your order!");
  location.reload();
}
