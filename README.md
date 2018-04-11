# **Bedazzzled!**

#### By William Chu, Cory West-Forbes, Kristen Chellis, Brea Borlas

## Description

A clone of Bejeweled, the popular game.

## Specifications

| Specification | Input | Output |
| --- | --- | --- |
| Program opens with board and gems | Open page | Board(object with arrays of gems) with gems(objects) is shown |
| Program allows gems to be selected, then swapped vertically (Each array is a column)| [[X,0,0],<br>[0,X,X],<br>[0,X,0]]| [[0,X,0],<br>[0,X,X],<br>[0,X,0]] |
| Program allows gems to be selected, then swapped horiziontally (Each array is a column)| [[X,0,0],<br>[0,X,X],<br>[0,X,0]]| [[X,0,X],<br>[0,X,0],<br>[0,X,0]] |
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

William Chu, Cory West-Forbes, Kristen Chellis, Brea Borlas
 © 2018
