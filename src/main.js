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

  //numbers were scaled to 1000 pixels for x and y
  const pathArray = [
    [
      { X: 0, Y: 300.89 },
      { X: 432, Y: 300.89 },
      { X: 474.4, Y: 343.3 },
      { X: 532.2, Y: 527.83 },
      { X: 575.3, Y: 570.24},
      { X: 865.7, Y: 570.24}
    ],
    [
      { X: 0, Y: 300.89 },
      { X: 432, Y: 300.89 },
      { X: 475.7, Y: 329.04 },
      { X: 531, Y: 414.36 },
      { X: 568.3, Y: 435.56 },
      { X: 865.7, Y: 435.56 }
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
      { X: 475.6, Y: 275.04 },
      { X: 531.1, Y: 193.21 },
      { X: 567.1, Y: 172.73 },
      { X: 865.7, Y: 172.73}
    ],
    [
      { X: 0, Y: 300.89 },
      { X: 432, Y: 300.89 },
      { X: 474.7, Y: 259.85 },
      { X: 532, Y: 85.54 },
      { X: 574.6, Y: 44.57},
      { X: 865.7, Y: 44.57}
    ]
  ];

  const sankey = d3.line()
    .x((d) => x(d.X))
    .y((d) => y(d.Y))
    .curve(d3.curveCardinal.tension(0.6));
    
  for (var i=0; i<pathArray.length; i++) {
    sankeySVG.append("path")
    .attr("d", sankey(pathArray[i]))
    .attr("stroke", "rgb(0,156,222)")
    .attr("stroke-opacity", 0.6)
    .attr("fill", "none")
    .attr("stroke-width", 110);
  }

  //video wall boundary path
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

  sankeySVG.append("circle")
    .attr("r", 15)
    .attr("fill", "red")
      .append("animateMotion")
      .attr("dur", "10s")
      .attr("repeatCount", "indefinite")
      .attr("path", sankey(pathArray[0]))
  
  sankeySVG.append("text")
    .attr("x", 50)
    .attr("y", 318)
    .text("DECADES OF DELIVERY")
    .attr("font-size", 48)
    .attr("fill", "white")

  //decade dashed lines
  function canvasX(value) {
    return (value/8320) * 1584.76;
  }

  function canvasY(value) {
    return (value/3780) * 720;
  }

  //the Y values of the decade path are removing 50 pixels from original design
  //the dashed line paths on each tree are 570 pixels
  //the gaps to move to the next segment are 720 pixels
  var decadePath = d3.path();
  var startX = 5025;
  var startY = 3280;
  var originY = 3280;

  for (var i=0; i<35; i++) {
    if (i%5 === 0 && i !==0) {
      startX += 304;
    }
    startY = originY-(704*(i%5));
    decadePath.moveTo(canvasX(startX), canvasY(startY));
    decadePath.lineTo(canvasX(startX), canvasY(startY-570));




  }
  // decadePath.moveTo(canvasX(5025), canvasY(3280));
  // decadePath.lineTo(canvasX(5025), canvasY(2710));
  // decadePath.moveTo(canvasX(5025), canvasY(2560));
  // decadePath.lineTo(canvasX(5025), canvasY(1990));
  // decadePath.moveTo(canvasX(5025), canvasY(1840));
  // decadePath.lineTo
  // decadePath.closePath();
  
  sankeySVG.append("path")
    .attr("d", decadePath)
    .attr("stroke-width", 1)
    .attr("stroke", "rgb(43, 101, 169)")
    .attr("stroke-dasharray", "5,6")
    .attr("fill", "none");


  // Return SVG elements.
  sankeyContainer.append(sankeySVG.node());

  
