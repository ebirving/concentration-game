$("document").ready(function () {

var clickCount = 0;
var cardsToCompare = [];

  $(".card").on ("click", function () {
    $(this).removeClass("back");
    $(this).addClass("front");
    cardsToCompare.push(document.getElementsByClassName("front")[clickCount].children[0].id);
    clickCount++;
    console.log(cardsToCompare)
    if(clickCount == 2) {
      cardsAsString = cardsToCompare.toString()
      console.log(cardsAsString);
      if(cardsAsString.substring(0,1) !== cardsAsString.substring(3,4)) {
        setTimeout(function(){
          $(".card").addClass("back");
          }, 3000)
          clickCount = 0;
        }
      else {
        $(".front").on("click", function(){return false;})
      }
      cardsToCompare = [];
    }
  })

})
