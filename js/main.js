//
const input = document.querySelector("input"),
  basicSalary = document.getElementById("basic-salary"),
  profSalary = document.getElementById("prof-salary"),
  masterSalary = document.getElementById("master-salary");

input.onclick = check;

function check() {
  if (!input.checked) {
    basicSalary.textContent = "$ 199.99";
    profSalary.textContent = "$ 249.99";
    masterSalary.textContent = "$ 399.99";
  } else {
    basicSalary.textContent = "$ 19.99";
    profSalary.textContent = "$ 24.99";
    masterSalary.textContent = "$ 39.99";
  }
}
