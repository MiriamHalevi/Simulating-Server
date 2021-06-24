
function loginFunc() {
    let userName1 = document.getElementById("userName").value;
    let userPsw1 = document.getElementById("password").value;
   var fxml = new fxmlhttprequest();
    fxml.open("GET","users");
    fxml.onload = function() {
        var res = fxml.response;
        if (res == undefined) {
            alert("אינך רשום עליך להרשם");
            app.changePage('register');
        }
        else if (res.name == userName1 ) {
            app.changePage('phones');
            showPhones(userPsw1)
        }
        else if (res.name != userName1 ) {
            alert('שם או סיסמא שגויים!!');
        }
    }
    fxml.send(userPsw1);
}




