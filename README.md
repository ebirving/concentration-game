## User Stories
- [x] As a user, I want to click cards to turn them face-up so I can look for matches.
- [x] As a user, I want to turn over two cards per turn so I can see if they match.
- [x] As a user, I want un-matched pairs to return to the face-down position at the end of each turn so I can try them in different combinations.
- [x] As a user, I want matched pairs to remain face-up at the end of each turn so I can eliminate them from contention for further turns.
- [x] As a user, I want un-matched pairs to remain face-up for a few seconds before turning face-down so I have time to study both of them before my next turn.
- [x] As a user, I want matched pairs to remain face-up for the duration of the game, even if I click them again, so that my progress through the game does not get un-done.
- [x] As a user, I want each game to start with the deck shuffled so that the location of each card is a surprise.
- [x] As a user, I want to be able to start a new game without refreshing the page, for convenience.

##Technologies Used
- jQuery
- JavaScript
- HTML
- CSS

##Unsolved Problems
Though I made strides in streamlining my code over the course of the project, there are still a few places where it could be DRYer. In particular, the relationship between the flipCard and compareCards functions could be clearer, and I'm not convined that'the if/else statements inside compareCards are as efficient as they could be.

I hope that I have squashed the persistent bug that was causing flipCard to temporary double up event listeners after user clicks the New Game button. It looks good based on my testing, but it's possible that other users could reveal a gameplay scenario that I haven't tested...

##Next Steps
I would like to experiment with...
- Animating the card-flip
- Manipulating the SVG icons
- Giving the user more decks/themes among which to choose
- Finessing the timing to optimize user experience
- Responsive design
