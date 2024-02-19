const products = [
    { name: "The fault in our stars",id: 1, quantity: 1,imageSrc:"book_8.png",price: 2500,},
    { name: "It end with us",id: 2, quantity: 1,imageSrc:"book_7.png",price: 1200,},
    { name: "The summer broken rules",id: 3, quantity: 1,imageSrc:"book_9.png",price: 120, },
    { name: "My fault",id: 4, quantity: 1,imageSrc:"book_10.png",price: 300, },
    { name: "Better than movies",id: 5, quantity: 1,imageSrc:"book_11.png",price: 400, },
    { name: "Games",id: 6, quantity: 1,imageSrc:"book_12.png",price: 500,},
    { name: "Hopeless",id: 7, quantity: 1,imageSrc:"book.13.png",price: 650,},
    { name: "Spanish love deception",id: 8, quantity: 1,imageSrc:"book_14.png",price: 450,},
  ];
  
  let cart = []
  
  const productsHTML = products.map(
    (product) => `<div class="product-card">
          <h2 class="product-name">${product.name}</h2>
          
          <img src="${product.imageSrc}" alt="${product.name}" width="100" height="150">
          <strong>$${product.price}</strong>
          <button class="product-btn" id=${product.id}>Add to Cart</button>
          
      </div>`
  );
  const result = document.querySelector(".result");
  result.innerHTML = productsHTML.join("");
  
  
  function updateCart() {
    const cartHTML = cart.map(
      (item) => `<div class="cart-item">
      <img src="${item.imageSrc}" alt="${item.name}" width="50" height="70"/>
              <h3>${item.name}</h3>
              <div class="cart-detail"><div class="mid">
                  <button onclick={decrItem(${item.id})}>-</button>
                  <p>${item.quantity}</p>
                  <button onclick={incrItem(${item.id})}>+</button>
              </div>
              <p>$${item.price}</p>
              <button onclick={deleteItem(${item.id})} class="cart-product" id=${item.id}>Delete</i></button></div>
             </div>`
    );
  
    const cartItems = document.querySelector(".cart-items");
    cartItems.innerHTML = cartHTML.join("");
  }
  
  let num = document.querySelectorAll(".product-btn").length;
  for (let i = 0; i < num; i++) {
    document
      .querySelectorAll(".product-btn")
    [i].addEventListener("click", function (e) {
      addToCart(products, parseInt(e.target.id));
    });
  }
  
  function addToCart(products, id){
    const product = products.find((product) => product.id === id);
    const cartProduct = cart.find((product) => product.id === id);
    if (cartProduct != undefined && product.id == cartProduct.id) {
      incrItem(id);
    } else {
      cart.unshift(product);
    }
    updateCart();
    getTotal(cart);
  };
  
  function getTotal(cart) {
    let { totalItem, cartTotal } = cart.reduce(
      (total, cartItem) => {
        total.cartTotal += cartItem.price * cartItem.quantity;
        total.totalItem += cartItem.quantity;
        return total;
      },
      { totalItem: 0, cartTotal: 0 }
    );
    const totalItemsHTML = document.querySelector(".noOfItems");
    totalItemsHTML.innerHTML = `${totalItem} items`;
    const totalAmountHTML = document.querySelector(".total");
    totalAmountHTML.innerHTML = `$${cartTotal}`;
  }
  
  function incrItem(id) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i] && cart[i].id == id) {
        cart[i].quantity += 1;
      }
    }
    updateCart();
    getTotal(cart);
  }
  
  function decrItem(id) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == id && cart[i].quantity > 1) {
        cart[i].quantity -= 1;
      }
    }
    updateCart();
    getTotal(cart);
  }
  
  function deleteItem(id) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        cart[i].quantity = 1;
        cart.splice(i, 1);
      }
    }
    updateCart();
    getTotal(cart);
  }

  document.getElementById("pay").addEventListener("click",function(){

  var buttonclicked= true;

  if(buttonclicked){
    alert("Your order has been place.\n\nThank you!");
  }
});