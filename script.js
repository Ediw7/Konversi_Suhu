const amountInput = document.querySelector(".amount input");
const fromSelect = document.getElementById("fromSelect");
const toSelect = document.getElementById("toSelect");
const konversisuhu = document.querySelector(".konversi-suhu");
const konversiBtn = document.getElementById("konversiBtn");

const temperatureConversion = {
  celsius: {
    fahrenheit: (celsius) => (celsius * 9) / 5 + 32,
    kelvin: (celsius) => celsius + 273.15,
  },
  fahrenheit: {
    celsius: (fahrenheit) => ((fahrenheit - 32) * 5) / 9,
    kelvin: (fahrenheit) => ((fahrenheit - 32) * 5) / 9 + 273.15,
  },
  kelvin: {
    celsius: (kelvin) => kelvin - 273.15,
    fahrenheit: (kelvin) => ((kelvin - 273.15) * 9) / 5 + 32,
  },
};

function convertTemperature() {
  const amount = parseFloat(amountInput.value);
  const fromUnit = fromSelect.value;
  const toUnit = toSelect.value;

  const convertedAmount = temperatureConversion[fromUnit][toUnit](amount);

  konversisuhu.textContent = `${amount} ${fromUnit} = ${convertedAmount.toFixed(
    2
  )} ${toUnit}`;
}

konversiBtn.addEventListener("click", convertTemperature);
