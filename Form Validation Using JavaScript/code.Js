function operations(){
    const name = document.getElementById("name");
    const ph = document.getElementById("number");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmpassword");
    const age = document.getElementById("age");
    const male = document.getElementById("male");
    const female = document.getElementById("female");
    const button =document.getElementById("btn");

    let count = 0;
    let correct;
    let incorrect;
    let nameValue;
    // for name validation
    correct = document.getElementById('correct1');
    incorrect = document.getElementById('incorrect1');
    nameValue = name.value.trim();
    if(nameValue != "" && nameValue.length < 20){
        correct.style.visibility = "visible";
        incorrect.style.visibility = "hidden";
        document.getElementById("nameError").innerHTML="";
        count++;
    }else{
        correct.style.visibility = "hidden";
        incorrect.style.visibility = "visible";
        document.getElementById("nameError").innerHTML="*Invalid Name";
    }

    // for phone number validation
    correct = document.getElementById('correct2');
    incorrect = document.getElementById('incorrect2');
    let phValue = ph.value.trim();
    if(phValue.length == 11){
        correct.style.visibility = "visible";
        incorrect.style.visibility = "hidden";
        document.getElementById("phError").innerHTML="";
        count++;

    }else{
        correct.style.visibility = "hidden";
        incorrect.style.visibility = "visible";
        document.getElementById("phError").innerHTML="*Invalid Number";
    }

    // for email validation
    correct = document.getElementById('correct3');
    incorrect = document.getElementById('incorrect3');
    let emailValue = email.value.trim();
    if(emailValue != ""){
        correct.style.visibility = "visible";
        incorrect.style.visibility = "hidden";
        document.getElementById("emailError").innerHTML="";
        count++;
    }else{
        correct.style.visibility = "hidden";
        incorrect.style.visibility = "visible";
        document.getElementById("emailError").innerHTML="Invalid Email";
    }

    // for password validation
    correct = document.getElementById('correct4');
    incorrect = document.getElementById('incorrect4');
    let passwordValue = password.value.trim();
    if(passwordValue != ""){
        correct.style.visibility = "visible";
        incorrect.style.visibility = "hidden";
        document.getElementById("passError").innerHTML="";
        if(passwordValue.length<=10){
            document.getElementById("passError").innerHTML="Weak Password";
        }
        count++;
    }else{
        correct.style.visibility = "hidden";
        incorrect.style.visibility = "visible";
        document.getElementById("passError").innerHTML="Invalid Password";
    }

    // for confirmpassword validation
    correct = document.getElementById('correct5');
    incorrect = document.getElementById('incorrect5');
    let conValue = confirmPassword.value.trim();
    if(conValue == passwordValue && conValue != ""){
        correct.style.visibility = "visible";
        incorrect.style.visibility = "hidden";
        document.getElementById("confirmPassError").innerHTML="";
        count++;

    }else{
        correct.style.visibility = "hidden";
        incorrect.style.visibility = "visible";
        document.getElementById("confirmPassError").innerHTML="*Password didn`t Match";
    }

    // for age validation
    correct = document.getElementById('correct6');
    incorrect = document.getElementById('incorrect6');
    let ageValue = age.value.trim();
    if(ageValue != "" && ageValue.length < 3){
        correct.style.visibility = "visible";
        incorrect.style.visibility = "hidden";
        document.getElementById("ageError").innerHTML="";
        count++;
    }else{
        correct.style.visibility = "hidden";
        incorrect.style.visibility = "visible";
        document.getElementById("ageError").innerHTML="Invalid Age";
    }

    let maleValue = male.checked;
    let femalevalue = female.checked;
    if(maleValue == true){
        document.getElementById("genderError").innerHTML="";
        count++;
    }else if(femalevalue ==  true){
        document.getElementById("genderError").innerHTML="";
        count++;
    }else{
        document.getElementById("genderError").innerHTML="Select One";
    }
    if(count>=8){
        const button =document.getElementById("btn").visibility = "visible";
    }
}

setInterval(operations,1000);



