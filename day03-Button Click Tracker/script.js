function createClickTracker(limit, callback) {
  let count = 0;

  return function () {
    count++;
    document.getElementById("message").textContent = `Clicked ${count} time(s)`;

    if (count === limit) {
      callback(); // Run callback when limit is reached
    }
  };
}

function showCongratsMessage() {
  alert("🎉 You clicked 5 times!");
}

const button = document.getElementById("clickBtn");
const handleClick = createClickTracker(5, showCongratsMessage);

button.addEventListener("click", handleClick);
