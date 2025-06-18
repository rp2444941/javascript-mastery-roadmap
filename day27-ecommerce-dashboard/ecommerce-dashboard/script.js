document.getElementById("uploadForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const fileInput = document.getElementById("pdfFile");
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select a file");
    return;
  }

  if (file.type !== "application/pdf") {
    alert("Only PDF files are allowed!");
    return;
  }

  const table = document.getElementById("fileTable");
  const newRow = table.insertRow();
  const fileIndex = table.rows.length;

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);

  cell1.innerText = fileIndex;
  cell2.innerText = file.name;
  cell3.innerText = (file.size / 1024).toFixed(2);

  fileInput.value = "";
});
