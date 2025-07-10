const fetchWeather = async (LAT,LONG,city) => {
  

  let resp = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LONG}&current=temperature_2m,rain`)

  let json = await resp.json()

  console.log(json.current.rain)
  document.getElementById(`pluie_${city}`).innerHTML = "<strong>" + json.current.rain + "</strong>"
  document.getElementById(`degres_${city}`).innerHTML = "<strong>" + json.current.temperature_2m + "</strong>"
  
}
  

fetchWeather(48.8534,2.3488,"paris");
fetchWeather(45.75,4.85,"lyon");
fetchWeather(47.2173,-1.5534,"nantes");
fetchWeather(43.3,5.4,"marseille");
fetchWeather(50.633333,3.066667,"lille");