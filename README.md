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

##Approach
I chose the concentration option because I wanted an opportunity to practice creating and manipulating a DOM with a lot of positioned elements. To that end, my first order of business was to tackle the layout in HTML and CSS. Once those elements were stable, I layered on the styling to create a space theme. 
In deciding what the user would be matching, I considered more educational approaches (i.e. vocabulary practice), but I felt that the topics for which I was interested in creating mnemonic tools were more suited to the more user-directed format of flash cards. I decided that the value for this game should lie in the user's experience of gameplay, rather than in its content. I 

##Unsolved Problems
Though I took great strides in streamlining my code over the course of the project, there are still a few places where it could be DRYer. In particular, the relationship between the flipCard and compareCards functions could be clearer, and the if/else statements inside compareCards could probably be condensed further.

##Next Steps
I would like to experiment with...
- Animating the card-flip
- Manipulating/ the SVG icons
- Giving the user more decks/themes among which to choose
- Finessing the timing to optimize user experience