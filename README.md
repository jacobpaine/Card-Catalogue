# card_catalogue

A card catalogue using the Sails realtime MVC framework. Also using MySQL, Express, Angular, Node, styled with Bootstrap 4. It was created with the mobile-first principle in mind.

## Installation

You will need [Node](https://nodejs.org/en/) and [Sails](http://sailsjs.org/get-started) to run this application.

`git clone https://github.com/jacobpaine/Card-Catalogue.git`
First, open your Terminal and clone the directory somewhere convenient.

`npm install`
Second, 'cd' into the directory 'Card-Catalogue' and type 'npm install' in the root file.

`sails lift`
Type 'sails lift' in the same root directory.

In your browser, go to localhost:1337.

## About the Application

This application verifies that I can use the fundamental Create, Read, Update and Delete functions inside the Sails framework. The app can be used to catalogue items (ideally books) by hand.

CREATE
Using the form at the top of the page and clicking the 'Add to Catalogue' button, Objects are created and put into a MySQL database.

READ
When the application is opened, a GET is called for the entire database, then populated at the bottom of the page. A second GET for particular items in the database exists for potential future use.

UPDATE
When a field is clicked, the user can edit the catalogue. When focus leaves the field, it calls an update in the database, saving any changes.

DELETE
A delete button is included at the end of each row. This removes the card from the database permanently. _Known issue: The delete button may need to be clicked more than once for deletion to occur._

Additional:
Using an angular filter, a user can type in the search bar to find specific items inside the database.

a [Sails](http://sailsjs.org) application
