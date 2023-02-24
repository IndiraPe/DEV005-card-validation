import validator from './validator.js';
//Elementos que trabajaré
const btn = document.getElementById('btn');
const check1 = document.getElementById('check1');
const check2 = document.getElementById('check2');
const question = document.getElementById('question');
const btn2 = document.getElementById('btn2');
const input = document.querySelector("input");

//Agregando eventos
btn.addEventListener('click',validation);
btn2.addEventListener('click',restart);

//function de validación
function validation() {
  const numberCard = document.getElementById('numberCard').value;
  const numberMaskify = document.querySelectorAll(".numberMaskify");
  //condicion para espacios vacios
  if(numberCard===''){
    check1.innerHTML='<img src="img/alert.png"> Tienes que escribir dígitos en la caja';
    check1.style.display = 'block';
  }
  //isValid
  const final = validator.isValid(numberCard);
  if (final === true){
    check1.style.display = 'block';
  } else {
    check2.style.display = 'block';
  }
  const maskValue = validator.maskify(input.value);
  numberMaskify.item(0).innerHTML = maskValue;
  numberMaskify.item(1).innerHTML = maskValue;
  question.style.display = 'none';
  btn2.style.display = 'block';
}
//function refrescar para el final
function restart(){
  window.location.reload();
}


//console.log(validator);
