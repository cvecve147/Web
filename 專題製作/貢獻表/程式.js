d3.csv('程式.csv?20080203',type,function (data) {
	var width =300,height = 300;

	var svg=d3.select(".program")
	.append('svg')
	.attr('width', width)
	.attr('height', height);

	var g = svg.append('g')
    .attr('transform', 'translate(150,150)');

    var arc_generator = d3.svg.arc()
    .innerRadius(0)
    .outerRadius(150)

    var angle_data=d3.layout.pie()
    .value(function(d){return d.population;});

    console.log(angle_data(data))

    var color= d3.scale.category10();
 
    g.selectAll('path')
    .data(angle_data(data))
    .enter()
    .append('path')
    .attr('d',arc_generator)
    .style("fill",function(d,i){return color(i);});

    g.selectAll('text')
    .data(angle_data(data))
    .enter()
    .append('text')
    .text(function(d){return d.data.program})
    .attr("transform",function(d){
        var c = arc_generator.centroid(d),
            x = c[0],
            y = c[1],
            // pythagorean theorem for hypotenuse
            h = Math.sqrt(x*x + y*y);
        // 因為 400*400, 取一半再大一點
        return "translate(" + (x/h * 170) +  ',' +
           (y/h * 170) +  ")";
    })
    .attr('text-anchor', 'middle');

})
function type(d){
	d.population = +d.population;
	return d;
}