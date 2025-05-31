const runBtn = document.getElementById("runBtn");
const output = document.getElementById("output");

runBtn.addEventListener("click", () => {
  output.innerHTML = ""; // Clear previous output
  visualizeFactorial(5);
});

function visualizeFactorial(n) {
  const steps = [];

  // Capture the recursive call stack
  function factorial(x) {
    steps.push(`factorial(${x})`);
    if (x === 1) {
      steps.push(`return 1`);
      return 1;
    }
    const result = x * factorial(x - 1);
    steps.push(`return ${result}`);
    return result;
  }

  factorial(n);

  // Animate the steps using setTimeout
  steps.forEach((step, index) => {
    setTimeout(() => {
      output.innerHTML += step + "\n";
    }, index * 600); // 600ms delay between steps
  });
}
