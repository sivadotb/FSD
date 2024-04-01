var parentdiv = document.createElement("div");
parentdiv.className = "main"


var input_date = document.createElement("input")
input_date.setAttribute("type","date");
input_date.id = "dob"

var button = document.createElement("button");
button.setAttribute("type","button")
button.className = "btn btn-primary"
button.innerHTML = "Display Data"
button.addEventListener("click",displaydata)

parentdiv.append(input_date,button)

document.body.append(parentdiv)


function displaydata(){

var input = document.getElementById("dob").value;
console.log(input);
if(Date.parse(input)){

var inputdate = new Date(input);
var currentdate = new Date();
var millisecdiff = parseInt(currentdate.getTime())-parseInt(inputdate.getTime())
console.log(millisecdiff);
var secdiff = Math.floor(millisecdiff/1000);
console.log(secdiff);
var mindiff = Math.floor(secdiff/60);
console.log(mindiff);
var hoursdiff = Math.floor(mindiff/60);
console.log(hoursdiff);
var daydiff = Math.floor(hoursdiff/24);
console.log(daydiff);
var yeardiff = currentdate.getFullYear() - inputdate.getFullYear()
console.log(yeardiff);
var monthdiff = (yeardiff*12)+(currentdate.getMonth()-inputdate.getMonth())
console.log(monthdiff);
}
else{
    // invalid date selected
}

}