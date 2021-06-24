
var users = [
    {
        name: "dan",
        city: "TLV",
        address: "herzog 24",
        password: "123456"
    }
    ,
    {
        name: "sara",
        city: "bney brak",
        address: "herzog 23",
        password: "5555555"
    }
    ,
    {
        name: "dina",
        city: "Jerusalem",
        address: "herzog 22",
        password: "888888"
    }
    ,
    {
        name: "malki",
        city: "NYC",
        address: "herzog 21",
        password: "121121111"
    }
    ,
    {
        name: "efrat",
        city: "rehovot",
        address: "ezra 18",
        password: "12345"
    }
]
phones = [{
    name: "avram",
    numPhone: "05041254",
    password: "123456"
},
{
    name: "avram",
    numPhone: "05041254",
  password: "5555555"
    

},
{
    name: "izchak",
    numPhone: "05041254",
    password: "888888"
},
{
    name: "yakov",
    numPhone: "05041254",
    password: "121121111"
},
{
    name: "avrami",
    numPhone: "05041254",
    password: "12345"
}
,{
    name: "dan",
    numPhone: "0556782511",
    password: "12345"
}
,{
    name: "yosef",
    numPhone: "0583251926",
    password: "12345"
}
,{
    name: "gad",
    numPhone: "0548571786",
    password: "12345"
}
,{
    name: "levi",
    numPhone: "0533136844",
    password: "12345"
}
]
localStorage.setItem("userDetails", JSON.stringify( users ));
localStorage.setItem("phonesDetails", JSON.stringify(phones ));
