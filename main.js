$(document).ready(
  function(){

    var frecciaDestra = $(".next > .fa-angle-right");
    var frecciaSinistra = $(".prev > .fa-angle-left");

    frecciaDestra.click(scorrimentoDestra);
    frecciaSinistra.click(scorrimentoSinistra);

    //funzione scorrimento frecce tastiera
    $(document).keydown(
      function(e){
        if(e.keyCode == 37){
          scorrimentoSinistra();
        } else if (e.keyCode == 39){
          scorrimentoDestra();
        }
      }
    );


    var immagineTempo = $(".images .first");
    var pallinoTempo = $(".nav .first");
    for(var i = 1; i <= 4; i++){
      switch(i){
        case 1:
          immagineTempo.addClass("one");
          pallinoTempo.addClass("one");
          break;
        case 2:
          immagineTempo.addClass("two");
          pallinoTempo.addClass("two");
          break;
        case 3:
          immagineTempo.addClass("three");
          pallinoTempo.addClass("three");
          break;
        case 4:
          immagineTempo.addClass("four");
          pallinoTempo.addClass("four");
          break;
        }
        immagineTempo = immagineTempo.next();
        pallinoTempo = pallinoTempo.next();
    }


    //clicco sul pallino e mostro immagine corrispondente
    $(".nav .one").click(
      function(){

        $(".images .one").addClass("active");
        $(".nav .one").addClass("active");

        $(".images .two").removeClass("active");
        $(".images .three").removeClass("active");
        $(".images .four").removeClass("active");

        $(".nav .two").removeClass("active");
        $(".nav .three").removeClass("active");
        $(".nav .four").removeClass("active");
      }
    );

    $(".nav .two").click(
      function(){

        $(".images .two").addClass("active");
        $(".nav .two").addClass("active");


        $(".images .one").removeClass("active");
        $(".images .three").removeClass("active");
        $(".images .four").removeClass("active");

        $(".nav .one").removeClass("active");
        $(".nav .three").removeClass("active");
        $(".nav .four").removeClass("active");
      }
    );

    $(".nav .three").click(
      function(){

        $(".images .three").addClass("active");
        $(".nav .three").addClass("active");

        $(".images .two").removeClass("active");
        $(".images .one").removeClass("active");
        $(".images .four").removeClass("active");

        $(".nav .two").removeClass("active");
        $(".nav .one").removeClass("active");
        $(".nav .four").removeClass("active");
      }
    );

    $(".nav .four").click(
      function(){

        $(".images .four").addClass("active");
        $(".nav .four").addClass("active");

        $(".images .three").removeClass("active");
        $(".images .two").removeClass("active");
        $(".images .one").removeClass("active");

        $(".nav .three").removeClass("active");
        $(".nav .two").removeClass("active");
        $(".nav .one").removeClass("active");
      }
    );



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
