// get elements
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const BMI = document.querySelector("#result");
const condition = document.querySelector("span");
const btn = document.querySelector("button");
// variables

// functions

function BMICalculator(weight, height) {
  const BMI = +(weight / (((height / 100) * height) / 100)).toFixed(2);
  let condition;
  if (BMI < 18.5) {
    condition = "Underweight";
  } else if (BMI >= 18.5 && BMI < 25) {
    condition = "Normal weight";
  } else if (BMI >= 25 && BMI < 30) {
    condition = "Overweight";
  } else if (BMI >= 30) {
    condition = "Obesity";
  }
  return { BMI, condition };
}
function handleClick() {
  const data = BMICalculator(weight.value, height.value);
  BMI.value = data.BMI;
  condition.textContent = data.condition;
}
// eventListeners
btn.addEventListener("click", handleClick);
