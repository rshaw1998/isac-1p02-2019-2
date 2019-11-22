function add(){
var fst = document.getElementById("fst").value;
var snd = document.getElementById("snd").value;

var result = parseFloat(fst)+parseFloat(snd);

if(!isNaN(result))
{
  document.getElementById("result").innerHTML= result;
}
}

function sub(){
var fst = document.getElementById("fst").value;
var snd = document.getElementById("snd").value;

var result = parseFloat(fst)-parseFloat(snd);

if(!isNaN(result))
{
  document.getElementById("result").innerHTML= result;
}
}

function multi(){
var fst = document.getElementById("fst").value;
var snd = document.getElementById("snd").value;

var result = parseFloat(fst)*parseFloat(snd);

if(!isNaN(result))
{
  document.getElementById("result").innerHTML= result;
}
}

function div(){
  var fst = document.getElementById("fst").value;
  var snd = document.getElementById("snd").value;

  var result = parseFloat(fst)/parseFloat(snd);

  if(!isNaN(result))
  {
    document.getElementById("result").innerHTML= result;
  }
}
