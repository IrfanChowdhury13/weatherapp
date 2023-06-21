// $(document).ready(funtion(){
//     const apiKey = "0fb6e67a4fc6a535bf51d8fc52390134"
//     const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=dhaka"

//      const getWeatherData = (location) => {
//          const response = await fetch(apiUrl + `&appid=${apiKey}`)
//         let  currentData = await response.json()

//      }


// })


function getWeatherData() {
    event.preventDefault()

    const location = document.getElementById("location").value

    const apiKey = "0fb6e67a4fc6a535bf51d8fc52390134"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`

    const cityName = document.querySelector(".cityname")
    const cityTemp = document.querySelector(".temperature")
    const cityHumidity = document.querySelector(".humidity")
    const cityWind = document.querySelector(".wind")
    const cityForcast = document.querySelector(".weatherForcast")

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            cityName.innerHTML = `${data.name},${data.sys.country}`
            cityTemp.innerHTML = `${data.main.temp}`
            cityHumidity.innerHTML = `Humidity: ${data.main.humidity}`
            cityWind.innerHTML = `Wind : ${data.wind.speed}`
            cityForcast.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png"/>`


        })


}

