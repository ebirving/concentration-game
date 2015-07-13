$("document").ready(function () {

  var clickCount = 0;

  $(".card").on ("click", function () {
    $(this).removeClass("back").addClass("front active");
    clickCount++;
    if(clickCount == 2) {
      if($(".active span").eq(0).html() !== $(".active span").eq(1).html()) {
        setTimeout(function(){
          $(".active").addClass("back").removeClass("front active");
        }, 2000)
          //clickCount = 0;
      }
      else if ($(".active span").eq(0).html() === $(".active span").eq(1).html()){
        $(".front").on("click", function(){return false;}).removeClass("active");
        //clickCount = 0;
      }
      clickCount = 0;
   }
  })








})
