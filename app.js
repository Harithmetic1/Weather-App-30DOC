let cityName = document.querySelector("#city");
let button = document.querySelector('#submit')
let city = document.querySelector('#nameC');
let desc = document.querySelector('#desc')
let temp = document.querySelector('#temp')
let icons = document.querySelector('#icon')

function clear(){
    document.getElementById('icon').innerHTML = '';
}
button.addEventListener('click', function(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+ cityName.value +'&appid=28ed6d1ee9dea59d2aee761246620667')
    .then(response => response.json())
    .then(data => {
        let nameValue = data['name']
        let tempValue = Math.floor(data['main']['temp'] - 273.15) + '`C';
        let descValue = data['weather'][0]['description'];
        let something = data['weather'][0]['icon'];
        // let show = URL('http://openweathermap.org/img/wn/'+something+'@2x.png');
        var img = new Image();
var div = document.getElementById('icon');
img.onload = function() {
  div.appendChild(img);
};
img.src = 'http://openweathermap.org/img/wn/'+something+'@2x.png'


        city.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
        
        var nodes = div.childNodes;
        for(var i = 0; i < nodes.length; i++){
            div.removeChild(nodes[i]);
        }

        
        // if( something = 'Cloud'){
        //     document.getElementById('icon').innerHTML = '<i class="fas fa-cloud"></i>'
        // }
        // else if( something = 'Clear'){
        //     document.getElementById('icon').innerHTML = '<i class="fas fa-sun"></i>'
        // }
        // else if( something = 'Rain'){
        //     document.getElementById('icon').innerHTML = '<i class="fas fa-cloud-rain"></i>'
        // }
    })

    // .catch(err=> alert('Wrong city name!'));

})

function clear(){
    document.getElementById('icon').innerHTML = '';
}




