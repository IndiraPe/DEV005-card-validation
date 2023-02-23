import validator from './validator.js';
//Elementos que trabajaré
const btn = document.getElementById('btn');
const check1 = document.getElementById('check1');
const check2 = document.getElementById('check2');
const question = document.getElementById('question');
const btn2 = document.getElementById('btn2');

//Activando el botón
btn.addEventListener('click',validation);
btn2.addEventListener('click',restart);

//function
function validation() {
  const numberCard = document.getElementById('numberCard').value;
  if(numberCard===''){
    check1.innerHTML='<img src="img/alert.png"> Tienes que escribir dígitos en la caja';
    check1.style.display = 'block';
  }
  const final = validator.isValid(numberCard);

  if (final === true){
    check1.style.display = 'block';
  } else {
    check2.style.display = 'block';
  }
  
  question.style.display = 'none';
  btn2.style.display = 'block';
}
function restart(){
  window.location.reload();
}


//console.log(validator);
