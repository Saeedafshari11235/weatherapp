let cities={
    tehran:{city:"Tehran",temp:"25°C",humidity:"6%",windspeed:"10km",weather:"Cloudy"},
    london:{city:"London",temp:"18°C",humidity:"55%",windspeed:"20km",weather:"Rainy"},
    tokyo:{city:"Tokyo",temp:"20°C",humidity:"3%",windspeed:"2km",weather:"Sunny"},
    newyork:{city:"NewYork",temp:"25°C",humidity:"80%",windspeed:"30km",weather:"Thunder"},
    beijing:{city:"Beijing",temp:"9°C",humidity:"30%",windspeed:"0km",weather:"Foggy"}
}
let inp = document.querySelector("#city")
let search= document.querySelector("#icon")
search.addEventListener("click",function(){ 
    console.log(cities[inp.value])
})