const products = [
  { id: 1, name: "T-Shirt", price: 499, image: "" },
  { id: 2, name: "Shoes", price: 1299, image: "" },
  { id: 3, name: "Watch", price: 999, image: "" }
];

const container = document.getElementById("product-list");

products.forEach((product) => {
  const div = document.createElement("div");
  div.className = "product-card";
  div.innerHTML = `
    <h2>${product.name}</h2>
    <p>₹${product.price}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  container.appendChild(div);
});

function addToCart(id) {
  const selected = products.find(p => p.id === id);
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(selected);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}
