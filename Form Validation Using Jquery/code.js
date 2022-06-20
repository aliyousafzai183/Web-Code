$('document').ready(function(){
    $("#btn").click(function(){
        const name = $('#name').val();
        const ph = $('#number').val();
        const email = $('#email').val();
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();
        
        if(name == "" || name.length < 5){
            $("#correct1").css.style.visibility = "hidden";
            $("#incorrect1").css.style.visibility = "visible";
            $('#one').text("Invalid Name");
        }else{
            $("#correct1").css.style.visibility = "visible";
            $("#incorrect1").css.style.visibility = "hidden";
        }
        
        if(ph != 11){
            $("#correct2").css.style.visibility = "hidden";
            $("#incorrect2").css.style.visibility = "visible";
            $('#two').text("Invalid Number");
        }else{
            $("#correct2").css.style.visibility = "visible";
            $("#incorrect2").css.style.visibility = "hidden";
        }
        
        if(email.length < 15){
            $("#correct3").css.style.visibility = "hidden";
            $("#incorrect3").css.style.visibility = "visible";
            $('#three').text("Invalid Email");
        }else{
            $("#correct3").css.style.visibility = "visible";
            $("#incorrect3").css.style.visibility = "hidden";
        }
        
        if(password.length < 5){
            $("#correct4").css.style.visibility = "hidden";
            $("#incorrect4").css.style.visibility = "visible";
            $('#three').text("Invalid Password");
        }else{
            $("#correct4").css.style.visibility = "visible";
            $("#incorrect4").css.style.visibility = "hidden";
        }

        if(confirmPassword.length < 5){
            $("#correct5").css.style.visibility = "hidden";
            $("#incorrect5").css.style.visibility = "visible";
            $('#four').text("Invalid Password");
        }else{
            $("#correct5").css.style.visibility = "visible";
            $("#incorrect5").css.style.visibility = "hidden";
        }

    });

});