$(document).ready(
  function(){

    var frecciaDestra = $(".next > .fa-angle-right");
    var frecciaSinistra = $(".prev > .fa-angle-left");

    frecciaDestra.click(scorrimentoDestra);
    frecciaSinistra.click(scorrimentoSinistra);


    function scorrimentoDestra(){
      //codice per scorrimento avanti immagini
      var imgActive = $(".images .active");

      if(imgActive.hasClass("last")){
        $(".images .first").addClass("active");
      } else {
        imgActive.next().addClass("active");
      }

      imgActive.removeClass("active");

      //codice per scorrimento avanti pallini blu
      var pallinoActive = $(".nav .active");

      if(pallinoActive.hasClass("last")){
        $(".nav .first").addClass("active");
      } else {
        pallinoActive.next().addClass("active");
      }

      pallinoActive.removeClass("active");
    }


    function scorrimentoSinistra(){
      //codice per scorrimento indietro immagini
      var imgActive = $(".images .active");

      if(imgActive.hasClass("first")){
        $(".images .last").addClass("active");
      } else {
        imgActive.prev().addClass("active");
      }

      imgActive.removeClass("active");

      //codice per scorrimento indietro pallini blu
      var pallinoActive = $(".nav .active");

      if(pallinoActive.hasClass("first")){
        $(".nav .last").addClass("active");
      } else{
        pallinoActive.prev().addClass("active");
      }

      pallinoActive.removeClass("active");
    }



  }
);