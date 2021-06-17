const table = document.querySelector("table");

function makeRow() {
  const tr = document.createElement("tr");
  table.appendChild(tr);
  for (let i = 0; i < 20; i++) {
    const td = document.createElement("td");
    tr.appendChild(td);
  }
}

function colorize(ev) {
  if (ev.target.className !== "table") {
    if (ev.target.className.length) {
      ev.target.className = "";
    } else {
      ev.target.className = selector.value;
    }
  }
}

const button = document.getElementById("add-row");

button.addEventListener("click", makeRow);

table.addEventListener("click", colorize);

const selector = document.querySelector("select");

selector.addEventListener("change", function (event) {
  console.log(event.target.value);
});
