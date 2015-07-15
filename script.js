var spaceIcons = [
    rocketshipOne = {src: "space_icons/rocketship.svg", alt: "Rocket Ship"},
    rocketshipTwo = {src: "space_icons/rocketship.svg", alt: "Rocket Ship"},
    ringedPlanetOne = {src: "space_icons/ringed_planet.svg", alt: "Ringed Planet"},
    ringedPlanetTwo = {src: "space_icons/ringed_planet.svg", alt: "Ringed Planet"},
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
var clickCount = 0;

function resetGame() {
  $(".card").on("click", flipCard);
  $(".card").addClass("back").removeClass("front guessed");
  $(".card img").remove();
  shuffleDeck(spaceIcons);
}

function shuffleDeck(deck) {
  for (var i = deck.length - 1; i >= 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
    $(".card").eq(i).append("<img src=" + deck[i].src + " alt=" + deck[i].alt + ">")
  }
}

function flipCard() {
  flippedCard = $(this);
  flippedCard.removeClass("back").addClass("front guessed").off("click", flipCard);
  clickCount++;
  console.log(clickCount);
  if(clickCount === 2) {
    $(".card").off("click", flipCard);
    compareCards();
    clickCount = 0;
    setTimeout(function (){
      $(".back").on("click", flipCard);
    }, 1000);
  }
}

function compareCards() {
  var guessOne = $(".guessed img").eq(0).attr("src");
  var guessTwo = $(".guessed img").eq(1).attr("src");
  if (guessOne === guessTwo) {
    $(".guessed").removeClass("guessed");
  }
  else if (guessOne !== guessTwo) {
    setTimeout(function () {
    $(".guessed").addClass("back").removeClass("front guessed")}, 1000)
  }
}

$(window).on("load", resetGame)
$("#new_game").on("click", resetGame)
$(".back").on("click", flipCard)
