document.getElementById("calc-btn").addEventListener("click", function () {
  let firstInput = Number(document.getElementById("first-input").value);
  let secondInput = Number(document.getElementById("second-input").value);

  try {
    let result = divide(firstInput, secondInput);
    document.getElementById("result").innerHTML = `<( ${result} )>`;
  } catch (error) {
    alert("Error: " + error)
  }

});

function divide(num1, num2) {
  if (num2 == 0) {
    throw "you can't divide by zero"
  }
  return num1 / num2;
}
