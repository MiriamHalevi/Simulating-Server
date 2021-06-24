var allUsers = JSON.parse(localStorage.getItem("userDetails"));
var allPhones = JSON.parse(localStorage.getItem("phonesDetails"));

function getUserByPassword(password) {
    return allUsers.find(x => x.password == password);
}
function getPhonesByPassword(pass) {
    var phones = allPhones.filter(p => p.password == pass)
    return phones;
}
function addNewUser(user) {
    var checkTheUser = getUserByPassword(user.userPsw);
    if (checkTheUser == undefined) {
        allUsers.push(user);
        localStorage.setItem("userDetails", JSON.stringify(allUsers))
    }
}
function deletePhone(phone) {
    allPhones = allPhones.filter(ph => ph.numPhone != phone.numPhone)
    localStorage.setItem("allPhones", JSON.stringify(allPhones));
}
function deleteUser(user) {
    var checkTheUser = getUsersByPassword(user.password);
    if (checkTheUser != null) {
        var user = allUsers.filter(ph => ph.password != user.password)
        localStorage.setItem("allPhones", JSON.stringify(allUsers));
    }
}
function updatePhone(phone) {
    allPhones = allPhones.filter(ph => ph.numPhone != phone.orgPhone);
    localStorage.setItem("phonesDetails", JSON.stringify(allPhones)); 
    delete phone.orgPhone;
    addNewPhone(phone);
}
function addNewPhone(phone) {
    allPhones.push(phone);
    localStorage.setItem("phonesDetails", JSON.stringify(allPhones));
}
