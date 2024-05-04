document.getElementById("calc-btn").addEventListener("click", function () {
  let firstInput = Number(document.getElementById("first-input").value);
  let secondInput = Number(document.getElementById("second-input").value);

  let result = divide(firstInput, secondInput);
  document.getElementById("result").innerHTML = result;
});

function divide(num1, num2) {
  return num1 / num2;
}
