let form = document.getElementById('form')
let full_name = document.getElementById('name');
let email = document.getElementById('email');
let address = document.getElementById('address');
let contact = document.getElementById('contact');
let profession = document.getElementById('profession')

// accessing span elements from dom

let namespan = document.getElementById('namespan');
let emailspan = document.getElementById('emailspan');
let addressspan = document.getElementById('addressspan');
let contactspan = document.getElementById('contactspan');
let professionspan = document.getElementById('professionspan');


// submitting form
form.addEventListener('submit', function (e) {
    e.preventDefault()

    // name validation
    if (!full_name.value) {
        namespan.textContent = "Your name should have atleast one letter";
        namespan.style.color = "red";
    }else {
        namespan.textContent = "";
        namespan.style.color = "green";
    }

    // email validation
    const regularexp = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;  
    const regexpo = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;
    if(regularexp.test(email.value) || regexpo.test(email.value)){
        emailspan.textContent = "";
        emailspan.style.color = "green";
    }
    else{
        emailspan.textContent = "Your email is notvalid";
        emailspan.style.color = "red"
    }
    
    // address validation
    if (!address.value) {
        addressspan.textContent = "Your address should have atleast one letter";
        addressspan.style.color = "red";
    }else {
        addressspan.textContent = "";
        addressspan.style.color = "green";
    }

    // contact number validation
    const contactReges = /^\d{10}$/
    if (!contactReges.test(contact.value)) {
        contactspan.textContent = "Your contact number have at least 10 digits";
        contactspan.style.color = "red";
    } else {
        contactspan.textContent = "";
        contactspan.style.color = "green";
    }
    
    // profession validation
    if (!profession.value) {
        professionspan.textContent = "Your profession should have atleast one letter";
        professionspan.style.color = "red";
    }else {
        professionspan.textContent = "";
        professionspan.style.color = "green";
    }
})