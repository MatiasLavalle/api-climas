fetch ("http://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=95176c8edea30e33338e0eaddd53a916")
.then (function(clima){
    return clima.json();
})
.then(function(clima){
    console.log(clima);
    document.querySelector("#lista1").textContent = clima["main"]["temp"];
    document.querySelector("#lista2").textContent = clima["main"]["temp_max"];
    document.querySelector("#lista3").textContent = clima["main"]["temp_min"];
    document.querySelector("#lista4").textContent = clima["weather"][0]["main"];
    document.querySelector("#lista5").textContent = clima["wind"]["speed"];
})


fetch ("http://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=95176c8edea30e33338e0eaddd53a916")
.then (function(clima){
    return clima.json();
})
.then(function(clima){
    console.log(clima);
    document.querySelector("#lista6").textContent = clima["main"]["temp"];
    document.querySelector("#lista7").textContent = clima["main"]["temp_max"];
    document.querySelector("#lista8").textContent = clima["main"]["temp_min"];
    document.querySelector("#lista9").textContent = clima["weather"][0]["main"];
    document.querySelector("#lista10").textContent = clima["wind"]["speed"];
})



fetch ("http://api.openweathermap.org/data/2.5/weather?q=Lima&appid=95176c8edea30e33338e0eaddd53a916")
.then (function(clima){
    return clima.json();
})
.then(function(clima){
    console.log(clima);
    document.querySelector("#lista11").textContent = clima["main"]["temp"];
    document.querySelector("#lista12").textContent = clima["main"]["temp_max"];
    document.querySelector("#lista13").textContent = clima["main"]["temp_min"];
    document.querySelector("#lista14").textContent = clima["weather"][0]["main"];
    document.querySelector("#lista15").textContent = clima["wind"]["speed"];
})
