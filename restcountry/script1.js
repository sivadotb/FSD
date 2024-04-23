 
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      var jsonObj = JSON.parse(this.responseText);
      for(var i=0;i<jsonObj.length;i++){
        console.log(jsonObj[i].flags.png);
        console.log(jsonObj[i].name.common);
        console.log(jsonObj[i].region);
        console.log(jsonObj[i].subregion);
        console.log(jsonObj[i].population);
        console.log("---------------------------------");
      }
    }
  };
  xhttp.open("GET", "https://restcountries.com/v3.1/all", true);
  xhttp.send();
 

async function foo(){
  try {
    let data = await fetch("https://restcountries.com/v3.1/all")
    let data1 = await data.json()
    console.log(data1);
    return data1;
  } catch (error) {
    console.log(error)
  }
}
var  container = document.createElement("div");
container.className="container";

var  row = document.createElement("div");
row.className="row";

dispData();

async function dispData(){
  let data =  await foo()
    console.log(data);
    for(var i=0;i<data.length;i++){
        var col = document.createElement("div");
        col.className = "col-md-4";

    col.innerHTML = `<div class="card h-100" style="width: 18rem;">
    <img src="${data[i].flags.png}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Country : ${data[i].name.common}</h5>
      <p class="card-text">Capital : ${data[i].capital}</p>
      <p class="card-text">Region : ${data[i].region}</p>
      <p class="card-text">Population : ${data[i].population}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
        row.append(col);
    }
}
container.append(row);
document.body.append(container);