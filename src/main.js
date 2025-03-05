import './style.css'
import * as d3 from 'd3' 
  
  //THIRD SVG
  const svg3 = d3.create("svg")
  .attr("width", 1040)
  .attr("height", 1000);
  
  // Declare the x (horizontal position) scale.
  const x = d3.scaleLinear()
    .domain([0, 1000])
    .range([0, 1000]);

  // Declare the y (vertical position) scale.
  const y = d3.scaleLinear()
    .domain([0, 1000])
    .range([0, 1000]);


  const pathArray = [
    [
      { X: 0, Y: 417.9 },
      { X: 432, Y: 417.9 },
      { X: 474.4, Y: 476.8 },
      { X: 532.2, Y: 733.1 },
      { X: 575.3, Y: 792},
      { X: 865.7, Y: 792}
    ],
    [
      { X: 0, Y: 417.9 },
      { X: 432, Y: 417.9 },
      { X: 475.7, Y: 457 },
      { X: 531, Y: 607 },
      { X: 568.3, Y: 646.1 },
      { X: 865.7, Y: 646.1 }
    ],
    [
      { X: 0, Y: 417.9 },
      { X: 432, Y: 417.9 },
    ],
    [
      { X: 0, Y: 417.9 },
      { X: 432, Y: 417.9 },
    ],
    [
      { X: 0, Y: 417.9 },
      { X: 432, Y: 417.9 },
    ]
  ];

  const line3 = d3.line()
    .x((d) => x(d.X))
    .y((d) => y(d.Y))
    .curve(d3.curveCardinal.tension(0.6));
    
  for (var i=0; i<pathArray.length; i++) {
    svg3.append("path")
    .attr("d", line3(pathArray[i]))
    .attr("stroke", "rgb(0,156,222)")
    .attr("stroke-opacity", 0.6)
    .attr("fill", "none")
    .attr("stroke-width", 120);
  }


  // Return SVG elements.
  thirdSVG.append(svg3.node());

  
