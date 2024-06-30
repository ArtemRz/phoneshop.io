let phone1 = document.querySelector('.phone1');
let phone2 = document.querySelector('.phone2');
let phone3 = document.querySelector('.phone3');

phone1.onclick = function() {
  let mySrc = phone1.getAttribute('src');
  if(mySrc === '61246000211.png') {
    phone1.setAttribute('src', '61246000212.png');
  } else {
    phone1.setAttribute('src', '61246000211.png');
  }
}

phone2.onclick = function() {
  let mySrc = phone2.getAttribute('src');
  if(mySrc === 'lumia-front.png') {
    phone2.setAttribute('src', 'lumia-side.png');
  } else if(mySrc === 'lumia-side.png') {
    phone2.setAttribute('src', 'lumia-back.png');
  } else {
    phone2.setAttribute('src', 'lumia-front.png');
  }
}

phone3.onclick = function() {
  let mySrc = phone3.getAttribute('src');
  if(mySrc === 'siemens-a50.png') {
    phone3.setAttribute('src', 'siemens-a50-back.png');
  } else {
    phone3.setAttribute('src', 'siemens-a50.png');
  }
}

var btn1 = document.getElementById(".btn1");
btn1.onclick = function() {
    btn1.textContent = "Куплено";
    }
var btn2 = document.getElementById(".btn2");
btn2.onclick = function() {
    btn2.textContent = "Куплено";
    }
var btn3 = document.getElementById(".btn3");
btn3.onclick = function() {
    btn3.textContent = "Куплено";
    }