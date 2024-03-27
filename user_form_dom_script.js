function createInputElement(type, id, name,label){
   
    var break_ele = document.createElement("br");
    document.body.append(break_ele);

    var lbl = document.createElement("label");
    lbl.setAttribute("for",id);
    lbl.innerHTML=label;
    document.body.append(lbl);

    var ele = document.createElement("input");
    ele.setAttribute("type",type);
    ele.setAttribute("id",id);
    ele.setAttribute("name",name);
    document.body.append(ele);

    var break_ele2 = document.createElement("br");
    document.body.append(break_ele2);

}


function createTextAreaElement(type, id, name,label){
   
    var break_ele = document.createElement("br");
    document.body.append(break_ele);

    var lbl = document.createElement("label");
    lbl.setAttribute("for",id);
    lbl.innerHTML=label;
    document.body.append(lbl);

    var ele = document.createElement("textarea");
    ele.setAttribute("type",type);
    ele.setAttribute("id",id);
    ele.setAttribute("name",name);
    document.body.append(ele);

    var break_ele2 = document.createElement("br");
    document.body.append(break_ele2);

}

createInputElement("text","fname","fname", "First Name");
createInputElement("text","mname","mname", "Middle Name");
createInputElement("text","lname","lname", "Last Name");
createInputElement("email","email","email", "Email");
createTextAreaElement("textarea","address","address", "Address");