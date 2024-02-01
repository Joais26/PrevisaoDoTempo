

const key = "df8df12fa900589527d550feb69b4161"


function clickOnButton(){
    const city = document.querySelector(".city-input").value

    searchCity(city)
}

async function searchCity(city){

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).then(response => response.json())

   putDataOnScreen(data)
}

function putDataOnScreen(data){
    console.log(data)
    document.querySelector(".city").innerHTML = "Temp em " + data.name
  
}
