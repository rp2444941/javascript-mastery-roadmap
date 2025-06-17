const form = document.getElementById('employee-form');
const nameInput = document.getElementById('name');
const roleInput = document.getElementById('role');
const list = document.getElementById('employee-list');
const searchInput = document.getElementById('search');

let employees = JSON.parse(localStorage.getItem('employees')) || [];

function renderEmployees(data = employees) {
  list.innerHTML = '';
  data.forEach((emp, index) => {
    const li = document.createElement('li');
    li.innerHTML = \`
      ${emp.name} - ${emp.role}
      <span>
        <button onclick="editEmployee(${index})">Edit</button>
        <button onclick="deleteEmployee(${index})">Delete</button>
      </span>
    \`;
    list.appendChild(li);
  });
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = nameInput.value.trim();
  const role = roleInput.value.trim();

  if (!name || !role) {
    alert('Both fields are required!');
    return;
  }

  employees.push({ name, role });
  localStorage.setItem('employees', JSON.stringify(employees));
  renderEmployees();
  form.reset();
});

function deleteEmployee(index) {
  employees.splice(index, 1);
  localStorage.setItem('employees', JSON.stringify(employees));
  renderEmployees();
}

function editEmployee(index) {
  const emp = employees[index];
  nameInput.value = emp.name;
  roleInput.value = emp.role;
  deleteEmployee(index);
}

searchInput.addEventListener('input', function() {
  const term = this.value.toLowerCase();
  const filtered = employees.filter(emp =>
    emp.name.toLowerCase().includes(term) ||
    emp.role.toLowerCase().includes(term)
  );
  renderEmployees(filtered);
});

renderEmployees();
