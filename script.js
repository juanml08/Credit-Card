const inputName =  document.getElementById('inputs-data');
const inputNumber = document.getElementById('inputs-data-number');
const cvc = document.getElementById('cvc');
const month = document.getElementById('month');
const year = document.getElementById('year');
const numberCard = document.getElementById('number-card');
const nameCard = document.getElementById('name-card-front');
const errorCardNumber = document.getElementById('error-card-number');
const errorTextMm = document.querySelector('.errorinputmm');
const errorTextYy = document.querySelector('.errorinputyy');
const errorTextCvc = document.querySelector('.errorinputcvc');
const numberCvc = document.getElementById('number-card-back');
const inputCvc = document.getElementById('cvc');


inputName.addEventListener('keyup', (e) => {
    validarSoloString(e.target.value, nameCard);
    console.log(e.target.value);
})

inputNumber.addEventListener('keyup', (e) => {
    console.log(e.target.value);
 validarSoloNumero(e.target.value);
 validarMantenerNumeros(e.target.value);

    
})


cvc.addEventListener('keyup', (e) => {
    console.log(e.target.value);
    validarCampoBlanco(e.target.value, errorTextCvc);
})


month.addEventListener('keyup', (e) => {
    console.log(e.target.value);
    validarCampoBlanco(e.target.value, errorTextMm);
})

year.addEventListener('keyup', (e) => {
    console.log(e.target.value);
    validarCampoBlanco(e.target.value, errorTextMm);
})


inputCvc.addEventListener('keyup', (e) => {
    validarSoloString(e.target.value, numberCvc);
    validarMantenerNumeros(e.target.value)
})


// VALIDACIONES

const validarSoloString = (value, elementoCard) => {   
    if(typeof value === 'string') {
        elementoCard.textContent = value;
    } 
}

const validarSoloNumero = (value) => {
    if (isNaN(value)) {
        errorCardNumber.innerHTML = `<p>Wrong format, numbers only</p>`;
    } else {
        numberCard.textContent = value;
    }
}

const validarMantenerNumeros = (value) => {
    if (value === '') {
        numberCard.textContent = "0000 0000 0000 0000";
        errorCardNumber.innerHTML = `<p></p>`;
        numberCvc.textContent= '000';
    }
}
const validarCampoBlanco = (value, elementoMensajeError) => {
    if (value === '') {
        elementoMensajeError.innerHTML = `<p>Can´t be blank </p>`;
    } else {
        elementoMensajeError.innerHTML = `<p></p>`;
    }
}

