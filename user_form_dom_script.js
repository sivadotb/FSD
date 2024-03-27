function createInputElement(type, id, name,label, label_flag="y", value=""){
 
    if(label_flag!="n"){
        var lbl = document.createElement("label");
        lbl.setAttribute("for",id);
        lbl.innerHTML=label;
        document.getElementById("usrFrm").append(lbl);
        createBreakElement();
    }

    var ele = document.createElement("input");
    ele.setAttribute("type",type);
    ele.setAttribute("id",id);
    ele.setAttribute("name",name);
    document.getElementById("usrFrm").append(ele);
    createBreakElement();
    if(value!=""){
        ele.setAttribute("value",value);
    }
}

function createBreakElement(){
    var break_ele = document.createElement("br");
    document.getElementById("usrFrm").append(break_ele);
}

function createTextAreaElement(type, id, name,label){
    var lbl = document.createElement("label");
    lbl.setAttribute("for",id);
    lbl.innerHTML=label;
    document.getElementById("usrFrm").append(lbl);
    createBreakElement();
    var ele = document.createElement("textarea");
    ele.setAttribute("type",type);
    ele.setAttribute("id",id);
    ele.setAttribute("name",name);
    document.getElementById("usrFrm").append(ele);
    createBreakElement();
}

function createButtonElement(id, name,value,event,handler){
    createBreakElement();
    var btn = document.createElement("input");
    btn.setAttribute("type","button");
    btn.setAttribute("id",id);
    btn.setAttribute("name",name);
    btn.setAttribute("value",value);
    btn.setAttribute(event,handler);
    document.getElementById("usrFrm").append(btn);
}

function doSubmit(){
    console.log(document.getElementById("fname").value);
    console.log(document.getElementById("mname").value);
    console.log(document.getElementById("lname").value);
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("address").value);
}

createInputElement("text","fname","fname", "First Name");
createInputElement("text","mname","mname", "Middle Name");
createInputElement("text","lname","lname", "Last Name");
createInputElement("email","email","email", "Email");
createTextAreaElement("textarea","address","address", "Address");
createButtonElement("frmsubmit","frmsubmit", "Submit","onClick","doSubmit();");
document.body.append(document.getElementById("usrFrm"));
