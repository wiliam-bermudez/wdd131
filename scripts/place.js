document.addEventListener("DOMContentLoaded", () => {
  const temp = parseFloat(document.getElementById("temp").textContent);
  const wind = parseFloat(document.getElementById("wind").textContent);
  const windchillSpan = document.getElementById("windchill");

  function calculateWindChill(tempF, speedMph) {
    return (
      35.74 +
      0.6215 * tempF -
      35.75 * Math.pow(speedMph, 0.16) +
      0.4275 * tempF * Math.pow(speedMph, 0.16)
    ).toFixed(1);
  }

  // Wind chill conditions
  if (temp <= 50 && wind > 3) {
    windchillSpan.textContent = `${calculateWindChill(temp, wind)} °F`;
  } else {
    windchillSpan.textContent = "N/A";
  }

  // Footer year and last modified
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});
