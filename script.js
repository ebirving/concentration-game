$("document").ready(function () {

  var clickCount = 0;

  $(".card").on ("click", function () {
    $(this).removeClass("back").addClass("front guessed");
    clickCount++;
    if(clickCount == 2) {
      if($(".guessed img").eq(0).attr("src") !== $(".guessed img").eq(1).attr("src")) {
        setTimeout(function(){
          $(".guessed").addClass("back").removeClass("front guessed");
        }, 1000)
          //clickCount = 0;
      }
      else if ($(".guessed span").eq(0).html() === $(".guessed span").eq(1).html()){
        $(".guessed").removeClass("guessed");
        //clickCount = 0;
      }
      clickCount = 0;
   }
  })

$("#new_game").on ("click", function () {
  $(".card").addClass("back").removeClass("front guessed")
})



})

// function shuffleArray(array) {
//    for (var i = array.length - 1; i > 0; i--) {
//        var j = Math.floor(Math.random() * (i + 1));
//        var temp = array[i];
//        array[i] = array[j];
//        array[j] = temp;
//    }
//    return array;
