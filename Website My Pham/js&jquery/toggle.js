

function copyIt(){
  let copyInput = document.querySelector('#copyvalue');

  copyInput.select();

  document.execCommand("copy");

  copybtna.textContent = "COPIED";
  setTimeout(() => {
    copybtna.textContent = "COPY";
  }, 3000);
}

function copyIta(){
  let copyInputa = document.querySelector('#copyvaluea');

  copyInputa.select();

  document.execCommand("copy");

  copybtn.textContent = "COPIED";
  setTimeout(() => {
    copybtn.textContent = "COPY";
  }, 3000);
}

function copyItb(){
  let copyInputa = document.querySelector('#copyvalueb');

  copyInputa.select();

  document.execCommand("copy");

  copybtnb.textContent = "COPIED";
  setTimeout(() => {
    copybtnb.textContent = "COPY";
  }, 3000);
}

function copyItc(){
  let copyInputa = document.querySelector('#copyvaluec');

  copyInputa.select();

  document.execCommand("copy");

  copybtnc.textContent = "COPIED";
  setTimeout(() => {
    copybtnc.textContent = "COPY";
  }, 3000);
}
function changeImage(element) {

  var main_prodcut_image = document.getElementById('main_product_image');
  main_prodcut_image.src = element.src;
  
}


$(function(){
  $(".nav-responsive a").toggle();
  
  var flag = false;
  $(".menu-icon img").click(function(){
    if(!flag){
      $(".nav-responsive a").slideDown(600);
      $("#menu-spin").toggleClass("wop");
      flag = true;
    }else{
      $(".nav-responsive a").slideUp(600);
      $("#menu-spin").removeClass("wop");
      flag = false;
    }
  })

  $(window).scroll(function () {
    if ($(window).scrollTop() > $(".nav-responsive").height()){
      $(".nav-responsive a").slideUp(200);
      $("#menu-spin").removeClass("wop");
      flag = false;
    }
  })
})
