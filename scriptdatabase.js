var userarray = [
    { 'username': 'Kashif Az', 'user': 'kashif@Storm123', 'passkey': 'kashif@123' },
    { 'username': 'Kashif Az', 'user': 'usaid@Storm123', 'passkey': 'usaid@123' },
    { 'username': 'Kashif Az', 'user': 'abdulsami@Storm123', 'passkey': 'sami@123' },
    { 'username': 'Kashif Az', 'user': 'usama@Storm123', 'passkey': 'ceo@123' }
];

// Finding & Filtering Credentials:
// var x = userarray.find(x => x.user == 'kashif@Storm123');
// alert(x.user); //alerts username


var name;
var pass;
var nameval;
var passval;
// currentusername = userarray.find(currentusername => currentusername.username);
// console.log(currentusername.username)

function UserPass() {
    name = document.getElementById('inputname').value;
    pass = document.getElementById('inputpass').value;
    nameval = userarray.find(nameval => nameval.user == name);
    passval = userarray.find(passval => passval.passkey == pass);
    var i;
    i = name.replace('@Storm123','');
    var x;
    x =  i.toUpperCase();
    // console.log(i);


    if (nameval && passval) {
//         document.getElementById("form-login").setAttribute("action", "userinterface.html");
        window.localStorage.setItem("currentuser", x);
//         window.location.replace("userinterface.html");
            window.location.href = 'userinterface.html';

    }
    else if (nameval === undefined || passval === undefined) {
        document.getElementById("form-login").setAttribute("action", "accessblocker.html");

    } else {
        var x;
        x++;
        console.log(x);
    } return true
}   


function userlogout() {
    alert("User Successfully Logged Out.");
    localStorage.clear();
    location.href = "index.html";

}

function cancelbtn() {
    localStorage.clear();
    location.href = "index.html";
}

function NewUser() {
    

}
