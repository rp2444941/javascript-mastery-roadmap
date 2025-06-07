const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

const filePath = path.join(__dirname, "data.json");

app.use(express.static(path.join(__dirname, "../client")));
app.use(express.json());

// Load existing feedbacks if file exists
let feedbacks = [];
if (fs.existsSync(filePath)) {
  feedbacks = JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

app.post("/api/feedback", (req, res) => {
  const { username, comment } = req.body;
  const newFeedback = { username, comment, time: new Date().toISOString() };
  feedbacks.push(newFeedback);

  fs.writeFileSync(filePath, JSON.stringify(feedbacks, null, 2));

  res.json({ status: "saved" });
});

app.get("/api/feedback", (req, res) => {
  res.json(feedbacks);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
