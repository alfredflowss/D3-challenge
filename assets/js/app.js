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

var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

//using d3 to import csv file 
d3.csv("assets/data/data.csv").then(function(myData) {
    console.log(myData);
    //formatting the data
    myData.forEach(function(data){
        data.healthcare = +data.healthcare;
        data.poverty = +data.poverty;
    });

    //creating Axes scales
    var xLinearscale = d3.scaleLinear()
        .domain([8, d3.max(myData, d => d.poverty)])
        .range([0, width]);
    
    var yLinearscale = d3.scaleLinear()
        .domain([4, d3.max(myData, d => d.healthcare)])
        .range([height, 0]);
    
    //creating Axes
    var bottomAxis = d3.axisBottom(xLinearscale).ticks(7);
    var leftAxis = d3.axisLeft(yLinearscale);

    //appending Axes to chart group 
    //add bottom axis
    chartGroup.append("g").attr("transform", `translate(0, ${height})`).call(bottomAxis)

    //add left axis
    chartGroup.append("g").call(leftAxis);

    var circlesGroup = chartGroup.selectAll("circle")
        .data(myData)
        .enter()
        .append("circle")
        .attr("cx", d => xLinearscale(d.poverty))
        .attr("cy", d => yLinearscale(d.healthcare))
        .attr("r", "10")
        .attr("fill", "gold")
        .attr("stroke-width", "1")
        .attr("stroke", "black")
        .data( d => d.abbr);

});
