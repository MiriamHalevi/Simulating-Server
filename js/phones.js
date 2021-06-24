
var globalPass;
var correntUpdated;
function showPhones(pas) {//מציגה את כל אנשי הקשר
    globalPass = pas
    var fxmlhttprequest1 = new fxmlhttprequest();
    fxmlhttprequest1.open('GET', "phones");
    fxmlhttprequest1.onload = function () {
        var response = fxmlhttprequest1.response;
        txt = `<table id='table'><tHead><th>name</th><th> phone</th><tHead/>`
        response.forEach(e => {
            txt += `<tBody><tr> <td>${e.name} </td> <td>${e.numPhone} </td>
            <td><input type='button' onclick='deleteDetails()' value='delete phone' id='deleteDetails'/>
          <input type='button' value='updateDetails' onclick='openUpdate()' id='updateDetails'/></td></tr><tBody/>`;
        });
        txt += `</table>
        <input type='button' value='add' onclick='openInput()'id='add'/>`;
        document.getElementById("phonesListt").innerHTML = txt;
    }
    fxmlhttprequest1.send(pas);
}

function openInput() {
    var txt = `<div><p> add new phone </p>
     <input type='text'id='addName' value="name" >
    <input type='text' id='addPhone'value="phone">
 
 <input type='button' value='save' onclick='add()'></div>`;
    document.getElementById("addInputs").innerHTML = txt;
}
function add() {
    let n = document.getElementById("addName");
    let p = document.getElementById("addPhone");
    var phone = {
        name: n.value,
        numPhone: p.value,
        password: globalPass
    }
    fxmlhttprequest2 = new fxmlhttprequest();
    fxmlhttprequest2.open("POST", "phones");
    fxmlhttprequest2.onload = function () {
        showPhones(globalPass);
    }
    fxmlhttprequest2.send(phone);
    document.getElementById("addInputs").innerHTML = "";


}

function openUpdate() {
    var phoneList = event.target.parentNode.parentNode.children;
    correntUpdated = phoneList[1].innerText;
    var txt = `<div><p> update phone </p>
     <input type='text'id='updateName' value="${phoneList[0].innerText}" >
    <input type='text' id='updatePhone'value="${phoneList[1].innerText}">
 <input type='button' value='save' onclick='update()'></div>`;
    document.getElementById("updateInputs").innerHTML = txt;
}

function update() {
    let n = document.getElementById("updateName");
    let p = document.getElementById("updatePhone");
    var phone = {
        orgPhone: correntUpdated,
        name: n.value,
        numPhone: p.value,
        password: globalPass
    }
    fxmlhttprequest2 = new fxmlhttprequest();
    fxmlhttprequest2.open("PUT", "phones");
    fxmlhttprequest2.onload = function () {
        showPhones(globalPass);
    }
    fxmlhttprequest2.send(phone);
    correntUpdated = "";
    document.getElementById("updateInputs").innerHTML = "";
}

function deleteDetails() {
    var phoneList = event.target.parentNode.parentNode.children;
    var phone = {
        name: phoneList[0].innerText,
        numPhone: phoneList[1].innerText
    }
    fxmlhttprequest2 = new fxmlhttprequest();
    fxmlhttprequest2.open("DELETE", "phones");
    fxmlhttprequest2.onload = function () {
        showPhones(globalPass);
    }
    fxmlhttprequest2.send(phone);
}

