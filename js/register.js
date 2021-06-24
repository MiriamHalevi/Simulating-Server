
function registerFunc() {
    var newUname = document.getElementById("name").value;
    var newUcity= document.getElementById("city").value;
    var newUaddress = document.getElementById("address").value;
    var newUpwd = document.getElementById("rpassword").value;
    var newUser = {userName: newUname,userCity:newUcity,userAddress:newUaddress, userPsw: newUpwd,};
     fxmlobj=new fxmlhttprequest();
    fxmlobj.open('POST','users');
    fxmlobj.onload=function(){
        alert("נרשמת בהצלחה למערכת!");
        app.changePage('phones');
        showPhones(newUpwd);
    }
    fxmlobj.send(newUser);
   
}