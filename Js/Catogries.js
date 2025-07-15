
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function updateCartCount() {
  const cart = getCart();
  const cartCount = document.getElementById('cart-count');
  if (cartCount) {
    cartCount.innerText = cart.length;
  }
}

function addToCart(name, price, img) {
  const cart = getCart();
  cart.push({ name, price, img });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert(`${name} added to cart!`);
}

function addToWishlist(name, price, img) {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  wishlist.push({ name, price, img });
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  alert(`${name} added to wishlist!`);
}

function filterByPrice(min, max) {
  document.querySelectorAll('.product-card').forEach(card => {
    const price = parseInt(card.getAttribute('data-price'));
    card.style.display = (price >= min && price <= max) ? 'block' : 'none';
  });
}

function resetFilter() {
  document.querySelectorAll('.product-card').forEach(card => {
    card.style.display = 'block';
  });
}

window.addEventListener('DOMContentLoaded', updateCartCount);

//header
fetch('header.html')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.text();
})
.then(data => {
  document.getElementById('header-placeholder').innerHTML = data;
})
.catch(error => {
  console.error('Error loading header:', error);
});