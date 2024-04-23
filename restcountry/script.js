var res = fetch("https://restcountries.com/v3.1/all");
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