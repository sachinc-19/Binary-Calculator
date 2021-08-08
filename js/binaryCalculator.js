var operator = '';
var resultDiv = document.getElementById('res');

function buttonClick() {
   e = window.event;
   var button = e.target || e.srcElement;
   if(button.id == 'btnClr') {
       operator = '';
       resultDiv.innerHTML = '';
   }
   else if(button.id != 'btnEql') {
      if(button.id != 'btn0' && button.id != 'btn1') {
        if(operator != '') {
            evaluate();
        }
        operator = button.innerHTML;
      }
      resultDiv.innerHTML += button.innerHTML;
   }
   else {
       evaluate();
   }
}

function evaluate() {
    var operands = resultDiv.innerHTML.split(operator);
    resultDiv.innerHTML = (
        Math.floor(
            eval(parseInt(operands[0] , 2) + operator + parseInt(operands[1] , 2))
            )
    ).toString(2);
    operator = '';
}