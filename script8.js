'use strict';
let checkbox = document.querySelector('.checkbox');
let pictureCat = document.querySelector('.picture_cat');
let pictureWeather = document.querySelector('.picture_weather');
let projectResultValue = document.querySelector('.project-result-value');
checkbox.oninput = function(){
    if (checkbox.checked){
        pictureWeather.src = 'https://www.flaticon.com/svg/static/icons/svg/3026/3026385.svg';
        pictureCat.src = 'https://www.flaticon.com/svg/static/icons/svg/763/763771.svg';
        projectResultValue.textContent = 'Не ходи гулять!';
        projectResultValue.style.fontSize = 30+'px';
        temperature.disabled = true;
    } else {
        pictureWeather.src="http://detskie-raskraski.ru/sites/default/files/raskraska_zontik5.jpg";
        pictureCat.src="http://img.vktnn.com/snimg/W/-LM/big_X2C94YLOHVTQMJUAT9PSME1LF.jpg";
        projectResultValue.textContent = 'Введите темпиратуру';
        temperature.disabled = false;
    }
}
let temperature = document.querySelector('.temperature');
temperature.oninput = function(){
if (temperature.value <15 && temperature.value >= 10){
    pictureWeather.src = 'https://www.flaticon.com/svg/static/icons/svg/578/578116.svg';
    pictureCat.src = 'https://www.flaticon.com/svg/static/icons/svg/763/763747.svg';
    projectResultValue.textContent = 'прогулка на 30 минут';
    }
if (temperature.value < 25 && temperature.value >= 15){
    pictureWeather.src = 'https://www.flaticon.com/svg/static/icons/svg/869/869767.svg';
    pictureCat.src = 'https://www.flaticon.com/svg/static/icons/svg/763/763765.svg';
    projectResultValue.textContent = 'прогулка на 40 минут';
    }
if (temperature.value <= 35 && temperature.value >= 25){
    pictureWeather.src = 'https://www.flaticon.com/svg/static/icons/svg/993/993377.svg';
    pictureCat.src = 'https://www.flaticon.com/svg/static/icons/svg/763/763785.svg';
    projectResultValue.textContent = 'прогулка на 20 минут';
    }
if (temperature.value < 9){
    pictureWeather.src = 'https://www.flaticon.com/svg/static/icons/svg/2965/2965893.svg';
    pictureCat.src = 'https://www.flaticon.com/svg/static/icons/svg/763/763758.svg';
    projectResultValue.textContent = 'Слишком холодно';
    }
if (temperature.value >= 36){
    pictureWeather.src = 'https://www.flaticon.com/svg/static/icons/svg/2965/2965893.svg';
    pictureCat.src = 'https://www.flaticon.com/svg/static/icons/svg/763/763758.svg';
    projectResultValue.textContent = 'Слишком жарко';
    }
if (temperature.value > 200){
    projectResultValue.textContent = 'Ты на марс собрался?!';
    projectResultValue.style.fontSize = 100+'px';
} else{
    projectResultValue.style.fontSize = 30+'px';
}
}