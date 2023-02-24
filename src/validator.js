const validator = {
  isValid: function (numberCard) {
    //Transformando el número de tarjeta
    const arrayCard = Array.from(numberCard).reverse().map(a=>parseInt(a));
    
    let sumNumberPair = 0;
    let sumNumberOdd = 0;
    //ubicar posiciones pares y x2
    for(let i=1; i<arrayCard.length; i=i+2){
      const arrayCardDuple = arrayCard[i]*2;
      //dígitos mayores de 9
      let biggerNumber = 0;
      let minorNumber = 0;
      if (arrayCardDuple > 9) {
        biggerNumber = arrayCardDuple - 9;
      }
      if (arrayCardDuple <= 9) {
        minorNumber = arrayCardDuple;
      }
      //sumar los numeros de la posicion par
      const bothNumber = biggerNumber + minorNumber;
      sumNumberPair = sumNumberPair + bothNumber;
    } 
    //Ubicando los impares y sumarlos
    for(let i=0; i<arrayCard.length; i=i+2){
      const arrayCardNormal = arrayCard[i];
      sumNumberOdd = sumNumberOdd + arrayCardNormal;
    }
    //sumando los pares y los impares 
    let sumTotal = sumNumberPair + sumNumberOdd;

    if (sumTotal % 10 === 0){
      return sumTotal = true;
    } else {
      return sumTotal = false;
    }
  },
  //funcion maskify (ocultar todo menos los últimos 4)
  maskify: function (input) {
    const inputToString = input.toString();
    const inputToStringMask = inputToString.slice(0,-4);
    const inputToStringMaskLength = "#".repeat(inputToStringMask.length);
    const inputToStringMaskify = inputToStringMask.replace(inputToStringMask, inputToStringMaskLength);
    const inputToStringShow = inputToString.slice(-4);
    const inputfinal = inputToStringMaskify+inputToStringShow;
    return inputfinal;
  }

};

export default validator;
