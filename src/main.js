import './style.css'
import * as d3 from 'd3'

var windowWidth = window.innerWidth;
window.addEventListener("resize", () => {
  windowWidth = window.innerWidth;
})
//sankey SVG
const sankeySVG = d3.create("svg")
  .attr("width", 1584.76)
  .attr("height", 720);

// Declare the x (horizontal position) scale.
const x = d3.scaleLinear()
  .domain([0, 1000])
  .range([0, 1584.76]);

// Declare the y (vertical position) scale.
const y = d3.scaleLinear()
  .domain([0, 720])
  .range([0, 720]);

// Sankey Paths
//numbers were scaled to 1000 pixels for x and y
const pathArray = [
  [
    { X: 0, Y: 300.89 },
    { X: 432, Y: 300.89 },
    { X: 474.4, Y: 303.3 },
    { X: 532.2, Y: 487.83 },
    { X: 575.3, Y: 530.24 },
    { X: 865.7, Y: 530.24 }
  ],
  [
    { X: 0, Y: 300.89 },
    { X: 432, Y: 300.89 },
    { X: 475.7, Y: 307.54 },
    { X: 531, Y: 392.86 },
    { X: 568.3, Y: 414.06 },
    { X: 865.7, Y: 414.06 }
  ],
  [
    { X: 0, Y: 300.89 },
    { X: 432, Y: 300.89 },
    { X: 475.7, Y: 300.89 },
    { X: 531, Y: 300.89 },
    { X: 568.3, Y: 300.89 },
    { X: 865.7, Y: 300.89 }
  ],
  [
    { X: 0, Y: 300.89 },
    { X: 432, Y: 300.89 },
    { X: 475.6, Y: 288.54 },
    { X: 531.1, Y: 206.71 },
    { X: 567.1, Y: 186.23 },
    { X: 865.7, Y: 186.23 }
  ],
  [
    { X: 0, Y: 300.89 },
    { X: 432, Y: 300.89 },
    { X: 474.7, Y: 286.85 },
    { X: 532, Y: 112.54 },
    { X: 574.6, Y: 71.57 },
    { X: 865.7, Y: 71.57 }
  ]
];

const sankey = d3.line()
  .x((d) => x(d.X))
  .y((d) => y(d.Y))
  .curve(d3.curveCardinal.tension(0.6));

for (var i = 0; i < pathArray.length; i++) {
  sankeySVG.append("path")
    .attr("d", sankey(pathArray[i]))
    .attr("stroke", "rgb(0,156,222)")
    .attr("stroke-opacity", 0.6)
    .attr("fill", "none")
    .attr("stroke-width", 90);
}

//Video wall boundary path
var videoWallPath = d3.path();
videoWallPath.moveTo(0, 188.57);
videoWallPath.lineTo(792.38, 188.57);
videoWallPath.lineTo(792.38, 0);
videoWallPath.lineTo(1371.43, 0);
videoWallPath.lineTo(1371.43, 188.57);
videoWallPath.lineTo(1584.76, 188.57);
videoWallPath.lineTo(1584.76, 411.43);
videoWallPath.lineTo(1371.43, 411.43);
videoWallPath.lineTo(1371.43, 720);
videoWallPath.lineTo(792.38, 720);
videoWallPath.lineTo(792.38, 411.43);
videoWallPath.lineTo(0, 411.43);
videoWallPath.closePath();

sankeySVG.append("path")
  .attr("d", videoWallPath)
  .attr("stroke", "rgb(91, 182, 217)")
  .attr("fill", "none");

//Text for sankey branches
sankeySVG.append("text")
  .attr("x", 50)
  .attr("y", 318)
  .text("DECADES OF DELIVERY")
  .attr("class", "stemText")

sankeySVG.append("text")
  .attr("x", 1050)
  .attr("y", 420)
  .text("SUB-SAHARAN AFRICA")
  .attr("class", "branchText");

sankeySVG.append("text")
  .attr("x", 1185)
  .attr("y", 80)
  .text("ASIA PACIFIC")
  .attr("class", "branchText");

sankeySVG.append("text")
  .attr("x", 1250)
  .attr("y", 197)
  .text("EUROPE")
  .attr("class", "branchText");

sankeySVG.append("text")
  .attr("x", 1113)
  .attr("y", 297)
  .text("MIDDLE EAST AND")
  .attr("class", "branchText");

sankeySVG.append("text")
  .attr("x", 1163)
  .attr("y", 327)
  .text("CENTRAL ASIA")
  .attr("class", "branchText");

sankeySVG.append("text")
  .attr("x", 1043)
  .attr("y", 540)
  .text("WESTERN HEMISPHERE")
  .attr("class", "branchText");

//Text and shapes for legend 
sankeySVG.append("text")
  .attr("x", 120)
  .attr("y", 390)
  .text("$1 MILLION")
  .attr("class", "legendText");

sankeySVG.append("text")
  .attr("x", 310)
  .attr("y", 390)
  .text("GRA")
  .attr("class", "legendText");

sankeySVG.append("text")
  .attr("x", 400)
  .attr("y", 390)
  .text("PRGT")
  .attr("class", "legendText");

sankeySVG.append("text")
  .attr("x", 510)
  .attr("y", 390)
  .text("RST")
  .attr("class", "legendText");

sankeySVG.append("rect")
  .attr("r", 5)
  .attr("x", 284)
  .attr("y", 374)
  .attr("width", 17)
  .attr("height", 17)
  .attr("fill", "rgb(231, 172, 59)")

sankeySVG.append("rect")
  .attr("r", 5)
  .attr("x", 375)
  .attr("y", 374)
  .attr("width", 17)
  .attr("height", 17)
  .attr("fill", "rgb(200, 60, 43)")

sankeySVG.append("rect")
  .attr("r", 5)
  .attr("x", 484)
  .attr("y", 374)
  .attr("width", 17)
  .attr("height", 17)
  .attr("fill", "rgb(109, 140, 50)")

//Rotated text for decade markings
sankeySVG.append('text')
  .attr("x", 510)
  .attr("y", 522)
  .text("2020s")
  .attr("class", "decadeText")

sankeySVG.append('text')
.attr("x", 512)
.attr("y", 582)
.text("2010s")
.attr("class", "decadeText")

sankeySVG.append('text')
.attr("x", 508)
.attr("y", 639)
.text("2000s")
.attr("class", "decadeText")

sankeySVG.append('text')
.attr("x", 512)
.attr("y", 699)
.text("1990s")
.attr("class", "decadeText")

sankeySVG.append('text')
.attr("x", 513)
.attr("y", 756)
.text("1980s")
.attr("class", "decadeText")

sankeySVG.append('text')
.attr("x", 515)
.attr("y", 815)
.text("1970s")
.attr("class", "decadeText")

sankeySVG.append('text')
.attr("x", 513)
.attr("y", 872)
.text("1960s")
.attr("class", "decadeText")

sankeySVG.append('text')
.attr("x", 513)
.attr("y", 932)
.text("1950s")
.attr("class", "decadeText")

//Dashed line for decade markings
var legendDashedLine = d3.path();
legendDashedLine.moveTo(92, 374);
legendDashedLine.lineTo(92, 391);
legendDashedLine.lineTo(109, 391);
legendDashedLine.lineTo(109, 374);
legendDashedLine.closePath();
  
sankeySVG.append("path")
  .attr("d", legendDashedLine)
  .attr("stroke-width", 1)
  .attr("stroke", "rgb(72, 111, 167)")
  .attr("stroke-dasharray", "4,2")
  .attr("fill", "none");

function canvasX(value) {
  return (value / 8320) * 1584.76;
}

function canvasY(value) {
  return (value / 3780) * 720;
}

//the Y values of the decade path are removing 50 pixels from original design
//the dashed line paths on each tree are 570 pixels
//the gaps to move to the next segment are 720 pixels
var decadePath = d3.path();
var startX = 5025;
var startY;
var originY = 3000;

for (var i = 0; i < 35; i++) {
  if (i % 5 === 0 && i !== 0) {
    startX += 304;
  }
  startY = originY - (604 * (i % 5));
  decadePath.moveTo(canvasX(startX), canvasY(startY));
  decadePath.lineTo(canvasX(startX), canvasY(startY - 450));
}

sankeySVG.append("path")
  .attr("d", decadePath)
  .attr("stroke-width", 1)
  .attr("stroke", "rgb(43, 101, 169)")
  .attr("stroke-dasharray", "5,6")
  .attr("fill", "none");

//Test

//Test variables
var GRA = [
  { region: "AFR", decade: 1950, amount: 25 },
  { region: "AFR", decade: 1960, amount: 285.1 },
  { region: "AFR", decade: 1970, amount: 1289.248855 },
  { region: "AFR", decade: 1980, amount: 10584.88 },
  { region: "AFR", decade: 1990, amount: 1675.816 },
  { region: "AFR", decade: 2000, amount: 2267.178309 },
  { region: "AFR", decade: 2010, amount: 5649.1604 },
  { region: "AFR", decade: 2020, amount: 12578.1684 },
  { region: "APD", decade: 1950, amount: 72.5 },
  { region: "APD", decade: 1960, amount: 1876.1 },
  { region: "APD", decade: 1970, amount: 1665.215 },
  { region: "APD", decade: 1980, amount: 13022.9 },
  { region: "APD", decade: 1990, amount: 34666.455 },
  { region: "APD", decade: 2000, amount: 5924.04 },
  { region: "APD", decade: 2010, amount: 1385.2854 },
  { region: "APD", decade: 2020, amount: 5174.09 },
  { region: "EUR", decade: 1950, amount: 2708.09 },
  { region: "EUR", decade: 1960, amount: 7248.125 },
  { region: "EUR", decade: 1970, amount: 6741.3125 },
  { region: "EUR", decade: 1980, amount: 4421.35 },
  { region: "EUR", decade: 1990, amount: 32130.92 },
  { region: "EUR", decade: 2000, amount: 74995.9115 },
  { region: "EUR", decade: 2010, amount: 216102.026 },
  { region: "EUR", decade: 2020, amount: 20634.262 },
  { region: "MCD", decade: 1950, amount: 67.5 },
  { region: "MCD", decade: 1960, amount: 620.01 },
  { region: "MCD", decade: 1970, amount: 1407.69 },
  { region: "MCD", decade: 1980, amount: 6802.48 },
  { region: "MCD", decade: 1990, amount: 6660.55 },
  { region: "MCD", decade: 2000, amount: 7514.6 },
  { region: "MCD", decade: 2010, amount: 41373.955 },
  { region: "MCD", decade: 2020, amount: 17629.37778 },
  { region: "WHD", decade: 1950, amount: 621.85 },
  { region: "WHD", decade: 1960, amount: 4047.2 },
  { region: "WHD", decade: 1970, amount: 3203.606 },
  { region: "WHD", decade: 1980, amount: 27831.825 },
  { region: "WHD", decade: 1990, amount: 35068.215 },
  { region: "WHD", decade: 2000, amount: 98779.137 },
  { region: "WHD", decade: 2010, amount: 415501.85 },
  { region: "WHD", decade: 2020, amount: 141207.22 },
];

var PRGT = [
  { region: "AFR", decade: 1950, amount: 0 },
  { region: "AFR", decade: 1960, amount: 0 },
  { region: "AFR", decade: 1970, amount: 0 },
  { region: "AFR", decade: 1980, amount: 2014.712 },
  { region: "AFR", decade: 1990, amount: 5059.64654 },
  { region: "AFR", decade: 2000, amount: 5149.1245 },
  { region: "AFR", decade: 2010, amount: 5649.1604 },
  { region: "AFR", decade: 2020, amount: 15151.3062 },
  { region: "APD", decade: 1950, amount: 0 },
  { region: "APD", decade: 1960, amount: 0 },
  { region: "APD", decade: 1970, amount: 0 },
  { region: "APD", decade: 1980, amount: 320.989 },
  { region: "APD", decade: 1990, amount: 1242.61 },
  { region: "APD", decade: 2000, amount: 5924.04 },
  { region: "APD", decade: 2010, amount: 708.63 },
  { region: "APD", decade: 2020, amount: 2161.61 },
  { region: "EUR", decade: 1950, amount: 0 },
  { region: "EUR", decade: 1960, amount: 0 },
  { region: "EUR", decade: 1970, amount: 0 },
  { region: "EUR", decade: 1980, amount: 0 },
  { region: "EUR", decade: 1990, amount: 132.22 },
  { region: "EUR", decade: 2000, amount: 237.8175 },
  { region: "EUR", decade: 2010, amount: 227.9 },
  { region: "EUR", decade: 2020, amount: 190.8 },
  { region: "MCD", decade: 1950, amount: 0 },
  { region: "MCD", decade: 1960, amount: 0 },
  { region: "MCD", decade: 1970, amount: 0 },
  { region: "MCD", decade: 1980, amount: 434.457 },
  { region: "MCD", decade: 1990, amount: 2284.752 },
  { region: "MCD", decade: 2000, amount: 1829.79 },
  { region: "MCD", decade: 2010, amount: 1371.805 },
  { region: "MCD", decade: 2020, amount: 2846.253 },
  { region: "WHD", decade: 1950, amount: 0 },
  { region: "WHD", decade: 1960, amount: 0 },
  { region: "WHD", decade: 1970, amount: 0 },
  { region: "WHD", decade: 1980, amount: 201.286 },
  { region: "WHD", decade: 1990, amount: 900.4694 },
  { region: "WHD", decade: 2000, amount: 386.678 },
  { region: "WHD", decade: 2010, amount: 346.6275 },
  { region: "WHD", decade: 2020, amount: 483.28245 },
]

var RST = [
  { region: "AFR", decade: 1950, amount: 0 },
  { region: "AFR", decade: 1960, amount: 0 },
  { region: "AFR", decade: 1970, amount: 0 },
  { region: "AFR", decade: 1980, amount: 0 },
  { region: "AFR", decade: 1990, amount: 0 },
  { region: "AFR", decade: 2000, amount: 0 },
  { region: "AFR", decade: 2010, amount: 0 },
  { region: "AFR", decade: 2020, amount: 1023.15 },
  { region: "APD", decade: 1950, amount: 0 },
  { region: "APD", decade: 1960, amount: 0 },
  { region: "APD", decade: 1970, amount: 0 },
  { region: "APD", decade: 1980, amount: 0 },
  { region: "APD", decade: 1990, amount: 0 },
  { region: "APD", decade: 2000, amount: 0 },
  { region: "APD", decade: 2010, amount: 0 },
  { region: "APD", decade: 2020, amount: 1000 },
  { region: "EUR", decade: 1950, amount: 0 },
  { region: "EUR", decade: 1960, amount: 0 },
  { region: "EUR", decade: 1970, amount: 0 },
  { region: "EUR", decade: 1980, amount: 0 },
  { region: "EUR", decade: 1990, amount: 0 },
  { region: "EUR", decade: 2000, amount: 0 },
  { region: "EUR", decade: 2010, amount: 0 },
  { region: "EUR", decade: 2020, amount: 61.95 },
  { region: "MCD", decade: 1950, amount: 0 },
  { region: "MCD", decade: 1960, amount: 0 },
  { region: "MCD", decade: 1970, amount: 0 },
  { region: "MCD", decade: 1980, amount: 0 },
  { region: "MCD", decade: 1990, amount: 0 },
  { region: "MCD", decade: 2000, amount: 0 },
  { region: "MCD", decade: 2010, amount: 0 },
  { region: "MCD", decade: 2020, amount: 1000 },
  { region: "WHD", decade: 1950, amount: 0 },
  { region: "WHD", decade: 1960, amount: 0 },
  { region: "WHD", decade: 1970, amount: 0 },
  { region: "WHD", decade: 1980, amount: 0 },
  { region: "WHD", decade: 1990, amount: 0 },
  { region: "WHD", decade: 2000, amount: 0 },
  { region: "WHD", decade: 2010, amount: 0 },
  { region: "WHD", decade: 2020, amount: 1270.2 },
]

//For loop that renders the rectangles
for (var i = 0; i<5; i++) {
  for (var a = 0; a<GRA.length; a++) {
    pathArray[i][0].Y = Math.random() * (340-260) + 260;
    pathArray[i][0].X = Math.random() * (0-260) + 260;

    if (GRA[a].region === "AFR") {
      console.log("yes")
      
      sankeySVG.append("rect")
        .attr("width", 3)
        .attr("height", 3)
        .attr("fill", "red")
        .append("animateMotion")
        .attr("dur", "10s")
        .attr("repeatCount", "indefinite")
        .attr("path", sankey(pathArray[1]))
    }


    // setInterval()
  }


}


// Return SVG elements.
sankeyContainer.append(sankeySVG.node());


