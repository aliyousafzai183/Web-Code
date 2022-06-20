var count = 0;
var correct;
var incorrect;
var intervalid;
function values(){
    count = 0;
    
    const name = document.getElementById('name');
    const ph = document.getElementById('number');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const rePass = document.getElementById('confirmPassword');
    const age = document.getElementById('age');
    const male = document.getElementById('male');
    const female = document.getElementById('female');
    
    validateName(name);
    validateNumber(ph);
    validateEmail(email);
    const pass = validatePassword(password);
    validateRePass(rePass , pass);
    validateAge(age);
    validateGender(male , female);

}

// To validate Name
function validateName(name){
    const nameValue = name.value.trim();
    correct = document.getElementById('correct1');
    incorrect = document.getElementById('incorrect1');
    
    if(nameValue == "" || nameValue.length > 20){
        incorrect.style.visibility = "visible";
        correct.style.visibility = "hidden";
        document.getElementById('nameError').innerHTML = "*Invalid Name*";
    }else{
        correct.style.visibility = "visible";
        incorrect.style.visibility = "hidden";
        document.getElementById('nameError').innerHTML = "";
        count++;
    }
}

// To validate phone number
function validateNumber(ph){
    const phValue = ph.value;
    correct = document.getElementById('correct2');
    incorrect = document.getElementById('incorrect2');

    if(phValue.length != 11 || String(phValue).charAt(0) != '0' || String(phValue).charAt(1) != '3'){
        incorrect.style.visibility = "visible";
        correct.style.visibility = "hidden";
        document.getElementById('phError').innerHTML = "*Invalid Number*";
    }else{
        correct.style.visibility = "visible";
        incorrect.style.visibility = "hidden";
        document.getElementById('phError').innerHTML = "";
        count++;
    }
}

// To validate Email
function validateEmail(email){
    const emailValue = email.value;
    correct = document.getElementById('correct3');
    incorrect = document.getElementById('incorrect3');

    if(emailValue == "" || emailValue.length < 11){
        incorrect.style.visibility = "visible";
        correct.style.visibility = "hidden"; 
        document.getElementById('emailError').innerHTML = "*Invalid Email*";
    }else{
        correct.style.visibility = "visible";
        incorrect.style.visibility = "hidden";
        document.getElementById('emailError').innerHTML = "";
        count++;
    }
}

function validatePassword(password){
    const passwordValue = password.value;
    correct = document.getElementById('correct4');
    incorrect = document.getElementById('incorrect4');

    if(passwordValue == ""){
        incorrect.style.visibility = "visible";
        correct.style.visibility = "hidden"; 
        document.getElementById('passError').innerHTML = "*Invalid Password*";
    }else if(passwordValue.length < 10){
        document.getElementById('passError').innerHTML = "*Weak Password*";
        correct.style.visibility = "visible";
        incorrect.style.visibility = "hidden";
        count++;
    }else{
        correct.style.visibility = "visible";
        incorrect.style.visibility = "hidden";
        document.getElementById('passError').innerHTML = "";
        count++;
    }

    return passwordValue;
}


function validateRePass(rePass , pass){
    const rePassValue = rePass.value;
    correct = document.getElementById('correct5');
    incorrect = document.getElementById('incorrect5');

    if(rePassValue == "" || rePassValue != pass){
        incorrect.style.visibility = "visible";
        correct.style.visibility = "hidden"; 
        document.getElementById('five').innerHTML = "*Invalid Password*";
    }else{
        incorrect.style.visibility = "hidden";
        correct.style.visibility = "visible"; 
        document.getElementById('five').innerHTML = "";
        count++;
    }
}


function validateAge(age){
    const ageValue = age.value;
    correct = document.getElementById('correct6');
    incorrect = document.getElementById('incorrect6');

    if(ageValue.length == 0 || ageValue.length > 3){
        incorrect.style.visibility = "visible";
        correct.style.visibility = "hidden"; 
        document.getElementById('six').innerHTML = "*Invalid Age*";
    }else{
        incorrect.style.visibility = "hidden";
        correct.style.visibility = "visible"; 
        document.getElementById('six').innerHTML = "";
        count++;
    }
}

function validateGender(male , female){
    const maleValue = male.checked;
    const femaleValue = female.checked;

    if(maleValue == false && femaleValue == false){
        document.getElementById('seven').innerHTML = "*Choose Gender*";
    }else{
        document.getElementById('seven').innerHTML = "";
        count++;
    }

    if(count < 7){
        document.getElementById('btn').disabled = true;
        values();
    }else{
        document.getElementById('btn').disabled = false;
    }
}



// intervalid = setInterval(values,1000);
setInterval(values,1000);




