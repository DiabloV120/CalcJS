let name = document.querySelector("#name");
let price = document.querySelector("#price");
let amount = document.querySelector("#amount");
let add = document.querySelector("#add");
let table = document.querySelector("#table");
let total = document.querySelector("#total");

function createCell(tr, value, name) {
  td = document.createElement("td");
  td.textContent = value.value;
  td.classList.add(`${name.value}}`);
  tr.appendChild(td);
}

add.addEventListener("click", function () {
  let tr = document.createElement("tr");
  createCell(tr, name.value, "name");
  createCell(tr, price.value, "price");
  createCell(tr, amount.value, "amount");
  createCell(tr, price.value * amount.value, "cost");
  createCell(tr, "удалить", "remove");
  table.appendChild(tr);
});
