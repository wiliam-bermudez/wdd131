document.addEventListener("DOMContentLoaded", () => {
  const temp = parseFloat(document.getElementById("temp").textContent);
  const wind = parseFloat(document.getElementById("wind").textContent);
  const windchillSpan = document.getElementById("windchill");

  function calculateWindChill(tempC, speedKph) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(speedKph, 0.16) +
    0.3965 * tempC * Math.pow(speedKph, 0.16)
  ).toFixed(1);
}

  // Wind chill conditions
  if (temp <= 50 && wind > 3) {
    windchillSpan.textContent = `${calculateWindChill(temp, wind)} °C`;
  } else {
    windchillSpan.textContent = "N/A";
  }

  // Footer year and last  
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});
