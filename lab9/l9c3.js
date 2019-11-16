function equals(){
var number1 = document.getElementById("number1").value;
var number2 = document.getElementById("number2").value;

var result = parseFloat(number1)+parseFloat(number2);

if(!isNaN(result))
{
  document.getElementById("output").innerHTML= result; 
}
}
