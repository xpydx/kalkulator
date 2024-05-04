let value = "";
let dp = document.getElementById("input");
let pembungkus = document.querySelector("#bungkus");

function display(number) {
  value += number;
  dp.innerHTML = value;
}
function hapus() {
  value = "";
  dp.innerHTML = value;
}
function sama() {
  try {
    value = eval(value);
    dp.innerHTML = value;
  } catch (error) {
    dp.innerHTML = "error";
  }
}
