//-----------1st page-------- index.html
var db = []; // create an empty array

function $(id) {
    return document.getElementById(id); // function  for call id easyly
}
// class login
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    get Email() {
        return this.email;
    }
    set Email(e) {
        if (e.indexOf("@") > 0) {
            this.email = e;
        }
    }
    get Password() {
        return this.password;
    }
    set Password(p) {
        if (p.length > 4 && e.length < 10) {
            this.password = p;
        }
    }
}
//class registration
class NewUser extends User {
    constructor(name, email, password) {
        super(email, password)
        this.name = name;

    }
    get Name() {
        return this.name;
    }
    set Name(n) {
        this.name = n;
    }
    get Email() {
        return this.email;
    }
    set Email(e) {
        this.email = e;
    }
    get Password() {
        return this.password;
    }
    set Password(p) {
        this.password = p;

    }
}
///-----------register new user!---------
function register() {
    let person = new NewUser($('reg_name').value, $('reg_email').value, $('reg_pass').value); // person is a new user!

    if ($('reg_pass').value == $('reg_pass_retype').value && $('reg_pass').value.length > 5) { // entered password must have more than 5 char.
        $('reg_pass').style.borderColor = "green"; // correct pass
        $('reg_pass_retype').style.borderColor = "green"; // correct pass
        if ($('reg_email').value.indexOf('@') > 0) { // entered email must have more than 0 simbol(@)!
            if ($('reg_name').value.length > 4) { // entered name must have more than 4 char!
                db.push(person) // if all correct (true) than add new data(person) to the array!
                $('reg_name').style.borderColor = "green";// correct name
            } else {
                alert("Adiniz en az 5 herf olmalidir ") // show an uncorrect name message
                $('reg_name').style.borderColor = "red";// name is uncorrect
            }
            $('reg_email').style.borderColor = "green"; // mail is correct
        } else {
            $('reg_email').style.borderColor = "red"; // mail is uncorrect
        }
    } else {
        alert("parolunuz en azi 6 herfli olmalidir.. ve yaxudda uygun gelmir") // show a pass is uncorrect message
        $('reg_pass').style.borderColor = "red";
        $('reg_pass_retype').style.borderColor = "red";
    }
    return false;
}
//enter to your new profile 
function LogMeIn() {
    let email = $('log_email').value;
    let password = $('log_pass').value;

    let finded = false; // is finded?
    for (let p of db) {
        if (p.email == email && p.password == password) {
            finded = true;// finded!!
        }
    }
    if (finded) {
        location.href = "Products.html";// if finded == true, than go to 2nd page
    } else {
        alert(" Your email or password is uncorrect. or you have not an acsses!") // if not show an error message!
    }
}

let Arr = [];
// a class for saving added data----
class AddProd {
    constructor(name, model, price, color) {
        this.name = name;
        this.model = model;
        this.price = price;
        this.color = color;
    }
    get Name() {
        return this.name;
    }
    set Name(a) {
        this.name = a;
    }
    get Model() {
        return this.model;
    }
    set Model(a) {
        this.model = a;
    }
    get Price() {
        return this.price;
    }
    set Price(a) {
        this.price = a;
    }
    get Color() {
        return this.color;
    }
    set Color(a) {
        this.color = a;
    }
}
// ------ manually add element for example---
let obj1 = new AddProd("Acer", "250", 200, "Black");
let obj2 = new AddProd("HP", "Pavilion", 1500, "silver");
let obj3 = new AddProd("Samsung", "s8", 2000, "BlackSpace");
Arr.push(obj1, obj2, obj3);// add new products to array

let arr2 = null;

function Create() {
    if (localStorage.ls != undefined) {
        arr2 = JSON.parse(localStorage.ls);
        for (let item of arr2) {
            let newProduct = new AddProd(
                item.name,
                item.model,
                item.price,
                item.color
            );
            Arr.push(newProduct);
        }
    }
}
//-------> 2nd page <-------- sell.html
function SellProd() {
    //html elements
    // ---create a container-------
    let item = document.createElement("div");
    item.className = "container";
    document.body.appendChild(item);
    //--------creeate a button---
    let btn = document.createElement("button");
    btn.className = "SellProd";
    btn.id = "sellBtn";
    btn.innerText = "SELL";
    item.appendChild(btn);
    btn.onclick = function () {
        location.href = "sell.html"
    }
    // create a element with loop
    for (let a of Arr) {
        let element = document.createElement("div");
        element.className = "prod";
        item.appendChild(element);
        //---------name---------
        let name = document.createElement("p");
        name.className = "nm";
        name.innerText = "Name: " + a.name;
        element.appendChild(name);
        //--------model--------
        let model = document.createElement("p");
        model.className = "nm";
        model.innerText = "Model: " + a.model;
        element.appendChild(model);
        //---------price--------
        let price = document.createElement("p");
        price.className = "nm";
        price.innerText = "Price: " + a.price;
        element.appendChild(price);
        //----------color-------
        let color = document.createElement("p");
        color.className = "nm";
        color.innerText = "Color: " + a.color;
        element.appendChild(color);
        //-----------------
    }

    function logOut() {
       location = "index.html"; // exit from profile.. back to 1st page.
    }
    // <<---------3rd page---------->>
   


}
let products = []; // new empty array for JSON
if (localStorage.ls != undefined) {
    let p = JSON.parse(localStorage.ls);
    products = p;
}
function SellNew() { // create new product and take all values from input
    let prods = new AddProd(
        $('inpName').value,
        $('inpModel').value,
        $('inpPrice').value,
        $('inpColor').value
    );
    if (prods.name != undefined &&
        prods.model != undefined &&
        prods.price != undefined &&
        prods.color != undefined) {

        products.push(prods)
        localStorage.ls = JSON.stringify(products);
        document.location.href = "Products.html"
    }
}
