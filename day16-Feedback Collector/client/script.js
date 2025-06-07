document.getElementById("submit").onclick = async () => {
  const username = document.getElementById("username").value;
  const comment = document.getElementById("comment").value;

  if (!username || !comment) return alert("Please fill both fields!");

  await fetch("/api/feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, comment })
  });

  document.getElementById("username").value = "";
  document.getElementById("comment").value = "";

  loadFeedbacks();
};

async function loadFeedbacks() {
  const res = await fetch("/api/feedback");
  const data = await res.json();

  document.getElementById("feedback-list").innerHTML = data
    .map(f => `<li><b>${f.username}</b>: ${f.comment}</li>`)
    .join("");
}

loadFeedbacks();
