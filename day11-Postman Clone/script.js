const urlInput = document.getElementById("url");
const methodSelect = document.getElementById("method");
const bodyInput = document.getElementById("body");
const sendBtn = document.getElementById("sendBtn");
const responseOutput = document.getElementById("responseOutput");

sendBtn.addEventListener("click", async () => {
  const url = urlInput.value.trim();
  const method = methodSelect.value;
  const body = bodyInput.value;

  if (!url) {
    responseOutput.textContent = "❌ Please enter a URL.";
    return;
  }

  try {
    let options = {
      method,
      headers: {
        "Content-Type": "application/json"
      }
    };

    if (method === "POST" && body) {
      options.body = body;
    }

    const res = await fetch(url, options);
    const data = await res.json();

    responseOutput.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    responseOutput.textContent = `❌ Error: ${err.message}`;
  }
});
