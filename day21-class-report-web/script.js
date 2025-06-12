const students = [
  { id: 1, name: "Aarav", marks: 78 },
  { id: 2, name: "Neha", marks: 22 },
  { id: 3, name: "Vikram", marks: 56 },
  { id: 4, name: "Simran", marks: 91 },
  { id: 5, name: "Rahul", marks: 33 }
];

document.getElementById('generateBtn').addEventListener('click', () => {
  let total = 0, passed = 0, failed = 0;
  let highest = students[0].marks, lowest = students[0].marks;
  const highScorers = [], lowScorers = [];

  students.forEach(s => {
    total += s.marks;
    s.marks >= 33 ? passed++ : failed++;
    if (s.marks > highest) highest = s.marks;
    if (s.marks < lowest) lowest = s.marks;
  });

  students.forEach(s => {
    if (s.marks === highest) highScorers.push(s.name);
    if (s.marks === lowest) lowScorers.push(s.name);
  });

  const avg = (total / students.length).toFixed(2);
  const reportDiv = document.getElementById('report');
  reportDiv.innerHTML = `
    <p><strong>📊 Class Average:</strong> ${avg}</p>
    <p><strong>🏆 Highest Marks:</strong> ${highest} - ${highScorers.join(", ")}</p>
    <p><strong>📉 Lowest Marks:</strong> ${lowest} - ${lowScorers.join(", ")}</p>
    <p><strong>✅ Passed:</strong> ${passed}</p>
    <p><strong>❌ Failed:</strong> ${failed}</p>
  `;
});
