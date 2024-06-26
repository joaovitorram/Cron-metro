let hora = 0;
let minuto = 0;
let segundo = 0;
let milesimo = 0;
let intervalo;
let tempoInicio;

const horaElemento = document.getElementById('hora');
const minutoElemento = document.getElementById('minuto');
const segundoElemento = document.getElementById('segundo');
const milesimoElemento = document.getElementById('milesimo');

function atualizar() {
    const agora = new Date().getTime();
    const tempoPassado = agora - tempoInicio;
    
    milesimo = tempoPassado % 1000;
    segundo = Math.floor((tempoPassado / 1000) % 60);
    minuto = Math.floor((tempoPassado / (1000 * 60)) % 60);
    hora = Math.floor((tempoPassado / (1000 * 60 * 60)) % 24);

    horaElemento.textContent = hora < 10 ? '0' + hora : hora;
    minutoElemento.textContent = minuto < 10 ? '0' + minuto : minuto;
    segundoElemento.textContent = segundo < 10 ? '0' + segundo : segundo;
    milesimoElemento.textContent = milesimo < 10 ? '00' + milesimo : milesimo < 100 ? '0' + milesimo : milesimo;
}

function start() {
    tempoInicio = new Date().getTime();
    intervalo = setInterval(atualizar, 1);
}

function pause() {
    clearInterval(intervalo);
}

function reset() {
    clearInterval(intervalo);
    hora = 0;
    minuto = 0;
    segundo = 0;
    milesimo = 0;
    horaElemento.textContent = '00';
    minutoElemento.textContent = '00';
    segundoElemento.textContent = '00';
    milesimoElemento.textContent = '000';
}
