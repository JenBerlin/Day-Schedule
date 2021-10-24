# Homework-05-Schedule

**##Content of this file\*\***

- Description
- Requiremtns
- Building Structure of the code
- Screenshot
- Repositery content and links

**##Description\*\***

On the GitHub page (Link) you will find a day schedule web application. The day shows a daily hour calender from 8:00 am to 5:00pm (business hours). In each row the user can and one or more asks, save them (button next to each row) and if the web page gets refreshed the tasks are still visible for the user. Rows/Textboxes in the past are marked in gray, row/textbox in the present is visible wit a red background color and rows/textboxes in the future are colored in green.

**##Requierments\*\***

Besides setting up an index.htlm, style.css and script.js file the following frameworks/APIs were requiered to include:

- API: moment.js, https://momentjs.com/
- Framework: Bootsstrap, https://getbootstrap.com/
- Framework: jQuery, https://jquery.com/

**##Building Structure of the code\*\***

HTML
Head containes ...

- Link to Bootsstrap
- Link to GoogleFonts
- Link to CSS style sheet
- Link to FontAwesom
- Link to to moment.js
- Title

Body contains ...

- Header as jumbotron: H1, p and the current day
- Main div as class="time block"
- 10 time-block-divs
- Link to jQuery
- Link to to moment.js
- Link to the script.js file

JS

- Variable for moment
- Refering to the jumbotron for the current day
- Fuction: setInterval
- It goes through the time/moment comparing the value and sets a specific styling
- Fuction: setText
- Setting up/calling the local storage
- Fuction: onClick event
- Adding/Updating to the local storage
- Fuction: runOnReady
- Window method

CSS

Contains the styling for ...

- Body
- textarea
- jumbotron
- description
- time-block
- row
- hour
- past
- present
- future
- saveBtn + hover

**Screenshot**

**Repositery content and links**

- index.html
- style.css
- script.js
- README.md
- Folder: ScreenShot

- GitHub: https://github.com/JenBerlin/Homework-04-Quiz
- GitHub Page: https://jenberlin.github.io/Homework-04-Quiz/
