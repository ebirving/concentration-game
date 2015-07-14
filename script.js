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
  $(".card").addClass("back").removeClass("front guessed");
  $(".card img").remove();
  shuffleDeck(spaceIcons);
  console.log("The First Card is: " + spaceIcons[0].alt);
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
  $(this).removeClass("back").addClass("front guessed");
  clickCount++;
  if(clickCount === 2) {
    compareCards();
    clickCount = 0;
  }
}

function compareCards() {
  console.log("comparing")
  var guessOne = $(".guessed img").eq(0).attr("src");
  console.log(guessOne)
  var guessTwo = $(".guessed img").eq(1).attr("src");
  console.log(guessTwo)
  if (guessOne === guessTwo) {
    console.log("match")
    $(".guessed").removeClass("guessed");
  }
  else if (guessOne !== guessTwo) {
    console.log("no match")
    setTimeout(function () {
    $(".guessed").addClass("back").removeClass("front guessed")}, 1000)
  }
}

$(window).on("load", resetGame)
$("#new_game").on("click", resetGame)
$(".back").on("click", flipCard)
