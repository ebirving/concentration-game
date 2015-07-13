$("document").ready(function () {
  //As a user, I want to click cards to turn them face-up so I can look for matches.
  //As a user, I want to turn over two cards per turn so I can see if they match.
  var clickCount = 0
  $(".card").on ("click", function () {
    $(this).removeClass("back");
    clickCount++;
    console.log(clickCount);
    if(clickCount == 2) {
      setTimeout(function(){
        $(".card").addClass("back");
      }, 3000)
    clickCount = 0;
    }
  })
})
