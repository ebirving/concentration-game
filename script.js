//Array of icons for card faces in space theme
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

//When the game is reset...
function resetGame() {
  //The click counter is established at 0...
  clickCount = 0;
  //console.log(clickCount)
  //The cards get flipped back over and all guesses cleared.
  $(".card").removeClass("front guessed").addClass("back")
  //The images are cleared and reshuffled
  $(".card img").remove();
  shuffleDeck(spaceIcons);
  $(".back").on("click", flipCard);
}

//The shuffle function iterates over the deck (for now just spaceIcons) with the same objects in a new order, and then appends one to each card
function shuffleDeck(deck) {
  for (var i = deck.length - 1; i >= 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
    $(".card").eq(i).append("<img src=" + deck[i].src + " alt=" + deck[i].alt + ">");
  }
}

//When the user clicks the back of a card...
function flipCard() {
  //The card's front is shown, it is given the class "guessed", and the counter advances. The event listener on just that card is turned off.
  $(this).removeClass("back").addClass("front guessed").off("click", flipCard);
  clickCount++;
  console.log(clickCount);
  //Once two cards have been flipped, everything is made unclickable for 1s while the compareCards function runs, to avoid comparing more than two cards at a time
  if(clickCount === 2) {
    $(".card").off("click", flipCard);
    compareCards();
    setTimeout(function (){
      $(".back").on("click", flipCard)}, 1000);//ERICA: move this to compareCards?
  }
}

//The compareCards function targets the image on each card with class "guessed".
function compareCards() {
  var guessOne = $(".guessed img").eq(0).attr("src");
  var guessTwo = $(".guessed img").eq(1).attr("src");
  // If they are the same, they remain face-up and the class "guessed" is removed.
  if (guessOne === guessTwo) {
    $(".guessed").removeClass("guessed");
  }
  //If they are not the same, they get flipped face down after 1 second, and the class "guessed" is removed
  else if (guessOne !== guessTwo) {
    setTimeout(function () {
    $(".guessed").addClass("back").removeClass("front guessed")}, 1000);
  } //ERICA: Try flipping the order here--just an if, pulling removeClass "guessed" out of id statements ALSO: Do you need the second timeout??
  clickCount = 0;
  //console.log(clickCount);
}

//The reset function makes the game active is triggered when the page loads & when the user clicks the new game button.
$(window).on("load", resetGame)
$("#new_game").on("click", resetGame)
//Unless this listener is turned off within a function, clicking the back of a card triggers the flipCard function.
$(".back").on("click", flipCard);
