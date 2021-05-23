$(document).ready(function(){
$('#signup-form').validate({
    rules:{
        fname:{
            required: true,
            minlength:3,
            maxlength:15
        },
        sname:{
            required:true,
            minlength:3
        },
        emailAddress:{
            required:true,
            email:true
        },
        messageContent:{
            required: true,
            minlength:6,  
        }
    },
    messages:{
        fname:{
            required:"Enter first name"
        },
        sname:{
            required:"Enter Last name"
        },
    }


})



})