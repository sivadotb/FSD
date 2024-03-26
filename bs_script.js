let container = document.createElement("Div");
container.setAttribute("class","container");

let row = document.createElement("Div");
row.setAttribute("class","row");

let col = document.createElement("Div");
col.setAttribute("class","col");

row.append(col);
container.append(row);

document.body.append(container);