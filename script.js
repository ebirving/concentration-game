// $("document").ready(function () {

var clickCount = 0;

var spaceIcons = [
    rocketshipOne = {src: "space_icons/rocketship.svg", alt: "Rocket Ship"},
    rocketshipTwo = {src: "space_icons/rocketship.svg", alt: "Rocket Ship"},
    ringedPlanetOne = {src: "space_icons/rocketship.svg", alt: "Ringed Planet"},
    ringedPlanetTwo = {src: "space_icons/rocketship.svg", alt: "Ringed Planet"},
    constellationOne = {src: "space_icons/constellation.svg", alt: "Constellation"},
    constellationTwo = {src: "space_icons/constellation.svg", alt: "Constellation"},
    spacesuitOne = {src: "space_icons/spacesuit.svg", alt: "Spacesuit"},
    spacesuitTwo = {src: "space_icons/spacesuit.svg", alt: "Spacesuit"},
    stripedPlanetOne = {src: "space_icons/striped_planet.svg", alt: "Striped Planet"},
    stripedPlanetTwo = {src: "space_icons/striped_planet.svg", alt: "Striped Planet"},
    ufoOne = {src: "space_icons/ufo.svg", alt: "UFO"},
    ufoTwo = {src: "space_icons/ufo.svg", alt: "UFO"},
    satelliteOne = {src: "space_icons/satellite.svg", alt: "Satellite"},
    satelliteTwo = {src: "space_icons/satellite.svg", alt: "Satellite"},
    telescopeOne = {src: "space_icons/telescope.svg", alt: "Telescope"},
    telescopeTwo = {src: "space_icons/telescope.svg", alt: "Telescope"},
  ]

function shuffleDeck(deck) {
   for (var i = deck.length - 1; i > 0; i--) {
       var j = Math.floor(Math.random() * (i + 1));
       var temp = deck[i];
       deck[i] = deck[j];
       deck[j] = temp;
       $(".card").eq(i).append("<img src=" + deck[i].src + " alt=" + deck[i].alt + ">")
   }
   return deck;
   console.log(deck);
  //  for (var i = deck.length - 1; i > 0)
  //  $(".card").append("<img src=" + deck[i].src + " alt=" + deck[i].alt + ">")
  }

window.onload = shuffleDeck(spaceIcons)

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
$(".card").addClass("back").removeClass("front guessed");
shuffleDeck(spaceIcons);
})



// })
