function ValidateEmail(email) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}

function Validate() {
    var email = document.getElementById('email').value;
    var age = document.getElementById('age1').value;
    if (age >= 14 && age <= 16) {
        return true;
        ValidateEmail(email);
    } else {
        alert("The age must be a number between 14 and 16");
        return false;
    }
}