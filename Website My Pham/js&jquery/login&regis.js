$(function(){
    $("#error1").css("display","none");
    $("#error2").css("display","none");
    $(".successtick").toggle();
    $("#checkitdn").click(function(){
        var input_dn = $("#sdtemaildn").val().length;
        var input_mk = $("#mkdn").val().length;
        
        if(input_dn > 8 && input_mk > 8 ){
            $('.modaldn').modal('toggle');
            $(".successtick").delay(100).fadeIn().delay(200).fadeOut();
            $(".successtick img").attr('src','/newproject/ticksuccess.gif');
            $(".inputit input[type=text],input[type=password]").val("");
            $("#error1").css("display","none");
            $("#error2").css("display","none");
        }
        else if(input_dn == "" && input_mk == ""){
            $("#error1").css("display","block");
            $("#error2").css("display","block");
        }
        else if(input_dn == ""){
            $("#error1").css("display","block");
        }
        else if(input_mk == ""){
            $("#error2").css("display","block");
        }
    })
})

$(function(){
    $("#error_regis1").css("display","none");
    $("#error_regis1_1").css("display","none");
    $("#error_regis2").css("display","none");
    $("#error_regis3").css("display","none");
    $("#error_regis4").css("display","none");
    $("#error_radio").css("display","none");
    $(".regis_successtick").toggle();
    $("#log_name").on('keyup', function(){
        var input_logname = $("#log_name").val().length;
        if( input_logname < 8){
            $("#error_regis1").css("display","block");
        } 
        else{
            $("#error_regis1").css("display","none");
        }
    })

    $("#pass").on('keyup', function(){
        var input_pass = $("#pass").val().length;
        if( input_pass < 8){
            $("#error_regis2").css("display","block");
        } 
        else{
            $("#error_regis2").css("display","none");
        }
    })

    $("#re_pass").on('keyup', function(){
        var input_re_pass = $("#re_pass").val();
        var input_pass = $("#pass").val();
        if( input_re_pass != input_pass){
            $("#error_regis3").css("display","block");
        } 
        else{
            $("#error_regis3").css("display","none");
        }
    })

    $("#sdtoremail").on('keyup', function(){
        var input_sdt_email = $("#sdtoremail").val().length;
        if( input_sdt_email == ""){
            $("#error_regis4").css("display","block");
        } 
        else{
            $("#error_regis4").css("display","none");
        }
    })

    $("#gtn,#gtn2").click(function(){
        if( $("#gtn").prop('checked') || $("#gtn2").prop('checked') ){
            $("#error_radio").css("display","none");
        } 
        else{
            $("#error_radio").css("display","block");
        }
    })

    $("#checkitdk").click(function(){
        var input_logname = $("#log_name").val().length;
        var length_pass = $("#pass").val().length;
        var input_pass = $("#pass").val();
        var input_re_pass = $("#re_pass").val();
        var input_sdt_email = $("#sdtoremail").val().length;
        if(input_logname > 8){
            if(length_pass > 8 && input_pass === input_re_pass){
                if(input_sdt_email != ""){
                    if( $("#gtn").prop('checked') || $("#gtn2").prop('checked') ){
                        if ($("#xacnhan").prop('checked')){
                            $('.modaldk').modal('toggle');
                            $(".regis_successtick").css("z-index","100");
                            $(".regis_successtick").delay(100).fadeIn().delay(200).fadeOut();
                            $(".regis_successtick img").attr('src','/newproject/ticksuccess.gif');
                            $(".inputit input[type=text],input[type=password]").val("");
                            $("#gtn,#gtn2,#xacnhan").prop('checked',false)
                        }
                    }
                    else{
                        $("#error_radio").css("display","block");
                    }
                }
            }
        }
        else{

        }
    })
})