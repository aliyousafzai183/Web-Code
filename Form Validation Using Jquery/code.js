$('document').ready(function(){
    $("#btn").disabled = true;
    $("#btn").click(function(){
        const name = $('#name').val();
        alert(name);

        
    });

});