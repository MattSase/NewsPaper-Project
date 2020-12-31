/*

// Dynamically update the date on the newspaper webpage
- Grab the element that will hold date
    - document.querySelector()
    -Get current date
    - Insert the current date information into the select element
*/
// Manhattan, NY - Monday December 28, 2020 - Seven Pages
//b Grab element with querySelector
const date = document.querySelector("#date");
const today = new Date();
const options = {weekday:"long", month: "short", day:"numeric",year:"numeric"};

date.innerHTML = `Manhattan, NY - ${today.toLocaleDateString("en-US", options)} - Seven Pages`;
