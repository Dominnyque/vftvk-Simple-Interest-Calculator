
function compute(){
   var p = document.getElementById("principal").value;
   var r = document.getElementById("rate").value;
   var t = document.getElementById("years").value;

   var pd= parseInt(t)

   var interest = Number(p*r* (pd)/100);
   amount = parseInt(p)+parseFloat(interest);
   var timing = Number(2020) + (pd);
if (p>0){
document.getElementById("result").innerHTML = " If you deposit "+ p +" at the interest of "+ r+"%" + " You will receive an amount of " +interest + " in the year " + timing;
} else if (p==0){
   alert("Principal amount cannot be Zero ( 0 )");
}
else if (p<0){
   alert("Please enter a positive number");
}
}
