const users = [
  { name: "Rudra", age: 25, role: "Developer" },
  { name: "Pratap", age: 30, role: "Designer" },
  { name: "Guddu", age: 22, role: "Manager" },
];

const grid = document.getElementById("userGrid");

users.forEach(({ name, age, role }) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h2>Name: ${name}</h2>
    <p>Age: ${age}</p>
    <p>Role: ${role}</p>
  `;
  grid.appendChild(card);
});
