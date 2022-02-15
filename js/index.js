'use strict';
const buttonYes = window.document.getElementById('buttonYes');
const botonNo = document.querySelector('#buttonNo');
const somosNovios = () => {
  alert('💞Estare a tu lado toda la vida💞');
  alert('🥰Feliz dia del amor Yulisa🥰');
  alert('😘te amo😘')
  location.href = 'https://youtu.be/cEMfq68aTao?t=20';
}
const ebitarKCRombaMyBobo = () => {
  botonNo.style.position = 'absolute';
  botonNo.style.top = (Math.random() * window.innerHeight) + 'px';
  botonNo.style.left = (Math.random() * window.innerWidth) + 'px';
}
buttonYes.addEventListener('click', somosNovios);
botonNo.addEventListener('mouseover', ebitarKCRombaMyBobo);





