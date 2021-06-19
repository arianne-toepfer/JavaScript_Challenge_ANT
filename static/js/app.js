// from data.js
var tableData = data;

//Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
var tbody = d3.select("tbody");

tableData.forEach((ufoSiting) => {
  var row = tbody.append("tr");
  Object.entries(ufoSiting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

//add Filter to look for specific date and return the result
// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    //console.log(tableData);

    var filteredDate = tableData.filter(date => date.datetime === inputValue);

    console.log(filteredDate);

    //filteredDate.forEach((ufoSiting) => {
        //var row = tbody.append("tr");
        //Object.entries(ufoSiting).forEach(([key, value]) => {
          //var cell = row.append("td");
          //cell.text(value);
        //});
    //});
};