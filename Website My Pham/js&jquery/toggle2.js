$(function(){
    $("#hidedi").toggle();
    var checkit = false;
    $("#showra").click(function(){
        if (!checkit){
            $("#hidedi").slideToggle();
            $(".bluraway").css("filter","blur(0)");
            $(".phanloai-btn button").text("Ẩn bớt");
            $(".phanloai-btn button").css("margin-top","10px");
            $(".phanloai-btn").css("margin-bottom","60px");
            checkit = true;
        } else{
            $("#hidedi").slideToggle();
            $(".bluraway").css("filter","blur(0.7px)");
            $(".phanloai-btn button").text("Hiển thị thêm");
            $(".phanloai-btn button").css("margin-top","-27px");
            $(".phanloai-btn").css("margin-bottom","0");
            checkit = false;
        }
    })
})