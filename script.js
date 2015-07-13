$("document").ready(function () {

  var clickCount = 0;

  $(".card").on ("click", function () {
    $(this).removeClass("back").addClass("front guessed");
    clickCount++;
    if(clickCount == 2) {
      if($(".guessed span").eq(0).html() !== $(".guessed span").eq(1).html()) {
        setTimeout(function(){
          $(".guessed").addClass("back").removeClass("front guessed");
        }, 2000)
          //clickCount = 0;
      }
      else if ($(".guessed span").eq(0).html() === $(".guessed span").eq(1).html()){
        $(".guessed").removeClass("guessed");
        //clickCount = 0;
      }
      clickCount = 0;
   }
  })







//need to solve problem of double clicking while face up
})
