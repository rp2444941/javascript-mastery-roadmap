const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
const container = document.getElementById("cart-items");
let total = 0;

cartItems.forEach((item, index) => {
  const div = document.createElement("div");
  div.className = "cart-item";
  div.innerHTML = `
    <h2>${item.name}</h2>
    <p>₹${item.price}</p>
    <button onclick="removeItem(${index})">Remove</button>
  `;
  container.appendChild(div);
  total += item.price;
});

document.getElementById("total").innerText = "Total: ₹" + total;

function removeItem(index) {
  cartItems.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  location.reload();
}
