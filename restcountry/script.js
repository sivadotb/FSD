var res = fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
res.then((data)=>data.json()).then((data1)=>(dispData(data1)));

var  container = document.createElement("div");
container.className="container";

var  row = document.createElement("div");
row.className="row";


function dispData(data){
    console.log(data);
    for(var i=0;i<data.length;i++){
        var col = document.createElement("div");
        col.className = "col-md-4";
        col.innerHTML = `<div class="card">
        <div class="card-header text-uppercase" >
          ${data[i].name}
        </div>
        <div class="card-body">
          <h5 class="card-title"> Capital : ${data[i].capital}</h5>
          <p class="card-text"> Region : ${data[i].region}</p>
          <p class="card-text"> Population : ${data[i].population}</p>
          
        </div>
      </div>` ;
        row.append(col);
    }
}
container.append(row);
document.body.append(container);