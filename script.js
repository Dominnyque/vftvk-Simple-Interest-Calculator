function compute(){
   var p = document.getElementById("principal").value;
   var r = document.getElementById("rate").value;
   var t = document.getElementById("years").value;

   var interest = Number(p*r*t/100);
   amount = parseInt(p)+parseFloat(interest);
   var timing = Number(2020) + Number(t);

document.getElementById("result").innerHTML = " If you deposit "+ p +" at the interest "+ r + " You will receive an amount of " +interest + " in the year " + timing;
}
