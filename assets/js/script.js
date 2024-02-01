

const key = "df8df12fa900589527d550feb69b4161"


function clickOnButton(){
    const city = document.querySelector(".city-input").value

    searchCity(city)
}

async function searchCity(city){

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`).then(response => response.json())

   putDataOnScreen(data)
}

function putDataOnScreen(data){
    console.log(data)
    document.querySelector(".city").innerHTML = "Temp em " + data.name   
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".preview-text").innerHTML = data.weather[0].description
    document.querySelector(".moisture").innerHTML = "Moisture: " + data.main.humidity + " %"
    document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}