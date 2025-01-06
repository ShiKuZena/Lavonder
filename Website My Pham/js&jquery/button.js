$(function(){
    $("#bp0").toggle();
    $("#bp1").toggle();
    $("#bp2").toggle();
    var iivisiblo = false;
    var iivisible = false;
    var iivisibla = false;
    $("#tpe").click(function(){
      if(!iivisibla && !iivisible){
          if(!iivisiblo){
          $(this).addClass("btn-dark");
          $("#bp0").slideDown();
          iivisiblo = true;
        } else{
          $(this).removeClass("btn-dark");
          $("#bp0").slideUp();
          iivisiblo = false;
        }
        iivisible = false;
        iivisibla = false;
      } 
      else{
        $("#tpa,#tpb").removeClass("btn-dark");
        $("#bp1,#bp2").slideUp();
        if(!iivisiblo){
          $(this).addClass("btn-dark");
          $("#bp0").delay(500).slideDown();
          iivisiblo = true;
        } else{
          $(this).removeClass("btn-dark");
          $("#bp0").slideUp();
          iivisiblo = false;
        }
        iivisible = false;
        iivisibla = false;
      }
    });


    $("#tpa").click(function(){
      if(!iivisibla&&!iivisiblo){
          if(!iivisible){
          $(this).addClass("btn-dark");
          $("#bp1").slideDown();
          iivisible = true;
        } else{
          $(this).removeClass("btn-dark");
          $("#bp1").slideUp();
          iivisible = false;
        }
        iivisiblo = false;
        iivisibla = false;
      } 
      else{
        $("#tpe,#tpb").removeClass("btn-dark");
        $("#bp0,#bp2").slideUp();
        if(!iivisible){
          $(this).addClass("btn-dark");
          $("#bp1").delay(500).slideDown();
          iivisible = true;
        } else{
          $(this).removeClass("btn-dark");
          $("#bp1").slideUp();
          iivisible = false;
        }
        iivisiblo = false;
        iivisibla = false;
      }
    })


    $("#tpb").click(function(){
      if(!iivisiblo&&!iivisible){
          if(!iivisibla){
          $(this).addClass("btn-dark");
          $("#bp2").slideDown();
          iivisibla = true;
        } else{
          $(this).removeClass("btn-dark");
          $("#bp2").slideUp();
          iivisibla = false;
        }
        iivisible = false;
        iivisiblo = false;
      } 
      else{
        $("#tpa,#tpe").removeClass("btn-dark");
        $("#bp1,#bp0").slideUp();
        if(!iivisibla){
          $(this).addClass("btn-dark");
          $("#bp2").delay(500).slideDown();
          iivisibla = true;
        } else{
          $(this).removeClass("btn-dark");
          $("#bp2").slideUp();
          iivisibla = false;
        }
        iivisible = false;
        iivisiblo = false;
      }
    })

   
  })

  $(function() {
    // Initialize quantity input
    $(".quanl input:text").attr({ type: "number", value: "1" });
  
    function formatPrice(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  
    function parsePrice(priceStr) {
      return parseInt(priceStr.replace(/\./g, ""), 10);
    }
  
    $(".quanl button:last-child").click(function() {
      var input_quanl = parseInt($(".quanl input").val(), 10);
      if (input_quanl >= 0) {
        $(".quanl input").val(input_quanl + 1);
        input_quanl++;
      }
  
      var price = parsePrice($("#pprice1").text());
      var totalPrice = price * input_quanl;
  
      $("#pprice1").text(formatPrice(totalPrice+"đ"));
    });
  
    $(".quanl button:first-child").click(function() {
      var input_quanl = parseInt($(".quanl input").val(), 10);
      if (input_quanl > 1) {
        $(".quanl input").val(input_quanl - 1);
      }
    });
  });
  
  