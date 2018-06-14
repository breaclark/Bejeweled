# **Bedazzzled!**

#### By William Chu, Cory West-Forbes, Kristen Chellis, Brea Clark

## Description

A clone of Bejeweled, the popular game.See it live at: https://breaclark.github.io/Bejeweled/

## Specifications

| Specification | Input | Output |
| --- | --- | --- |
| Program opens with board and gems | Open page | Board(object with arrays of gems) with gems(objects) is shown |
| Program allows gems to be selected, then swapped with adjacent gems vertically (Each array is a column)| [[X,0,0],<br>[0,X,X],<br>[0,X,0]]| [[0,X,0],<br>[0,X,X],<br>[0,X,0]] |
| Program allows gems to be selected, then swapped with adjacent gems horizontally (Each array is a column)| [[X,0,0],<br>[0,X,X],<br>[0,X,0]]| [[X,0,X],<br>[0,X,0],<br>[0,X,0]] |
| After swap program checks for 3 adjacent matching gems horizontally or vertically | [0,0,0] | valid move |
| Swap that doesn't result in 3 adjacent matching gems is ignored | [[X,0,0],<br>[0,X,X],<br>[0,X,0]]<br>to<br>[[X,0,X],<br>[0,X,0],<br>[0,X,0]] | [[X,0,0],<br>[0,X,X],<br>[0,X,0]] |
|Program removes Gems when three or more in a row/col match| [0,0,0]| [ , , ]|
|Program drops down gems vertically and replaces empty slots with random gems from the top| [ , , ]| [0, X, 0]|

## Setup/Installation Requirements

* To view project code, _clone repository from_
* To view project, _open in web browser_

## Known Bugs

## Technologies Used

* HTML
* CSS _(Bootstrap)_
* JavaScript _(jQuery)_

## License

* GPL

William Chu, Cory West-Forbes, Kristen Chellis, Brea Clark
 © 2018


	•	Team Members - Who worked on the project?
	⁃	Brea, Cory, Kristen and William
 
	•	Project Name and Objective - Why did you choose this project? What purpose does it fulfill?
	⁃	We picked this project because we thought it would be fun to apply the knowledge we learned during Intro to clone an existing game. Bejeweled has fairly simple gameplay but complicated enough to require us to step outside of our comfort zone to figure out how to code it logically. We knew there would be opportunities to build constructors and prototype methods and write user interface logic to have the player interact with the backend. 
 
 Front End Functions:
	scoreTicker,
	drawHelper,
	drawClear,
	drawNewGems
 
 Back End Board Prototypes: 
	genGem,
	swapGems,
 match conditions,
	match,
	isValid,
	clearGems,
	removeBursts,
	checkBoard,
	startBoard
 
	•	Demonstration - Show and describe the features of your work.
	⁃	Upon loading the website, a Bootstrap modal displays the rules (using modals requires Bootstrap 4.0 and the corresponding Bootstrap.js file to be linked in your html file)
	⁃	The starting game grid is comprised of 49 Gem objects that are statically generated, then arranged into the Board object. Gem objects have two properties, their type and their point value.
	⁃	The object Board that has one property, board. The board property is an array of arrays, each child array represents a column on the board that is filled with Gem objects. drawClear and drawNewGems updates the DOM to display the game grid as it changes.
	⁃	When users click on a Gem, the part of the game grid that contains the Gem passes through its ID attribute that represents the coordinates on the DOM. This ID is then translated into an array of coordinates to look up the Gem object within the Board object
	⁃	Clicking on a Gem adds a no-click CSS class that disables click functionality across the board, then removes this class on the adjacent gems so they can still be clicked (this prevents a player from making an invalid swap)
	⁃	When the player clicks on an adjacent Gem, it grabs the coordinates from the DOM and translates it to the Gem object in the Board.board array. isValid runs a hypothetical swap by cloning the current Board, swapping the Gem types of the two selected Gems and then running the Board match method.
	⁃	The match method will return a boolean by checking through all conditions under which a line of 3 or more Gems could be formed, and adds the coordinates of any Gems that are part of a match to a Set (a data structure that only allows unique elements). We used a Set because if there are matches that form a cross shape, the center coordinates could be duplicated in an array. A Set doesn’t allow that.
	⁃	if isValid is true, the swap takes place on the game grid, then the clearGems Board method is called to take out the matched Gems and replace them with bursts. The drawClear and drawNewGems functions update the DOM to help the player understand the sequence of matches and clears.
	⁃	genGems generates random Gems and pushes them to the vertical arrays to fill the board after matches are cleared. checkBoard clears the board and updates the game grid if there are any matches made from random Gem generation. After that, click functionality is restored to the board. The player continues to play.
	⁃	If there are no more matches, the player can click a button to call startBoard which randomly generates a new game grid and sets score back to 0. 
 
	•	Process - Describe how the team development process worked in your group.
	⁃	We had an initial team meeting to discuss the project.
	⁃	On Monday, we had a white boarding session to outline our objectives and define our MVP.
	⁃	Broke up into pairs and focused on Front End and Back End separately while discussing verbally.
	⁃	Met a few times each day to merge our code and sort out any conflicts.
	⁃	After we reached the goals we set for our MVP, we branched off to explore extra features or functionality independently. 
 
	•	Challenges - Share the biggest challenges you faced.
	⁃	Hooking up the front end and back end was more difficult than we anticipated. More merging and communication in the beginning would have been helpful. We should have been commenting our code, so that other group members could understand what the functions did, especially their inputs and outputs.
	⁃	Merging was complicated. Working on a branch that did not have the most updated master created issues, because we did not pull the feature branches into our master frequently enough.
