let cities={
    tehran:{city:"Tehran",temp:"25°C",humidity:"6%",windspeed:"10km",weather:"Cloudy"},
    london:{city:"London",temp:"18°C",humidity:"55%",windspeed:"20km",weather:"Rainy"},
    tokyo:{city:"Tokyo",temp:"20°C",humidity:"3%",windspeed:"2km",weather:"Sunny"},
    newyork:{city:"NewYork",temp:"25°C",humidity:"80%",windspeed:"30km",weather:"Thunder"},
    beijing:{city:"Beijing",temp:"9°C",humidity:"30%",windspeed:"0km",weather:"Foggy"}
}
let inp = document.querySelector("#city")
let search = document.querySelector("#icon")
let sect = document.querySelector("#cities")
search.addEventListener("click",function(){ 
    /*console.log(cities[inp.value].city)
    console.log(cities[inp.value].temp)
    console.log(cities[inp.value].humidity)
    console.log(cities[inp.value].windspeed)
    console.log(cities[inp.value].weather)*/
    sect.innerHTML = ""
    let title = document.createElement("h1")
    let tmp = document.createElement("h4")
    let wthr = document.createElement("h2")
    let wind = document.createElement("h4")
    let hmdt = document.createElement("h4")
    wthr.innerHTML = "Weather:"+cities[inp.value.toLowerCase()].weather
    tmp.innerHTML ="Temperature:"+ cities[inp.value.toLowerCase()].temp
    wind.innerHTML ="Wind speed:"+ cities[inp.value.toLowerCase()].windspeed
    hmdt.innerHTML ="Humidity:"+ cities[inp.value.toLowerCase()].humidity
    title.innerHTML = cities[inp.value.toLowerCase()].city
    sect.append(title,wthr,tmp,hmdt,wind)
})