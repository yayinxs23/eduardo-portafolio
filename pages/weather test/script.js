let button = document.querySelector(".button")
let inputValue = document.querySelector(".inputValue")
let cityName = document.querySelector(".name");
let desc = document.querySelector(".desc");
let temp = document.querySelector(".temp");


button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=a39562d7e5eac9b654840209a1992c67')
    .then(response => response.json())
    .then(data => {
        let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        let descValue = data['weather'][0]['description'];

        cityName.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
    })

    

.catch(err => alert("Wrong city name!"))
}) 