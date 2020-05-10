// @TODO: YOUR CODE HERE!
//creting SVG
var svgWidth = 960;
var svgHeight = 500;
//setting up SVG boundaries
var margin = {
    top: 20,
    right:40,
    bottom : 60,
    left: 50
};

//setting up plot size
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom; 

//creating svg 
var svg = d3
    .select("body")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var char 