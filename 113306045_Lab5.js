document.getElementById("submitButton").addEventListener("click", () => {
  const mathGrade = document.getElementById("mathGrade").value;
  const englishGrade = document.getElementById("englishGrade").value;

  if (!mathGrade || !englishGrade || isNaN(mathGrade) || isNaN(englishGrade)) {
    alert("Please enter valid numbers for both Math and English grades.");
    return;
  }

  const math = parseFloat(mathGrade);
  const english = parseFloat(englishGrade);
  const average = ((math + english) / 2).toFixed(2);

  const tbody = document.querySelector("#gradesTable tbody");
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td>${tbody.children.length + 1}</td>
    <td>${math}</td>
    <td>${english}</td>
    <td>${average}</td>
  `;

  tbody.appendChild(newRow);

  updateAverages();
});

function updateAverages() {
  const rows = document.querySelectorAll("#gradesTable tbody tr");
  let mathTotal = 0, englishTotal = 0, overallTotal = 0;

  rows.forEach(row => {
    const cells = row.querySelectorAll("td");
    mathTotal += parseFloat(cells[1].textContent);
    englishTotal += parseFloat(cells[2].textContent);
    overallTotal += parseFloat(cells[3].textContent);
  });

  const rowCount = rows.length;
  document.getElementById("mathAverage").textContent = (mathTotal / rowCount).toFixed(2);
  document.getElementById("englishAverage").textContent = (englishTotal / rowCount).toFixed(2);
  document.getElementById("overallAverage").textContent = (overallTotal / rowCount).toFixed(2);
}