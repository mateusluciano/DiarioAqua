const range = document.getElementById('pesorange');

range.addEventListener('input', function() {
  const percentage = range.value / range.max;

  let minValue, maxValue;

  if (percentage <= 0.7) {
    minValue = 10;
    maxValue = 110;
  } else {
    minValue = 111;
    maxValue = 250;
  }

  const valueRange = maxValue - minValue;
  const adjustedValue = Math.round(minValue + (percentage * valueRange));

  console.log(adjustedValue);
});