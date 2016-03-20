d3.csv("分析.csv?20080203",type,function (data) {
    var width =400,height = 400;
 
    var svg=d3.select("#js")
    .append("svg")
    .attr('width',width)
    .attr('height',height);
 
    var g = svg.append("g")
    .attr('transform', 'translate(200,200)');
 
    var arc_generator = d3.svg.arc()
    .innerRadius(0)
    .outerRadius(200)
 
    var angle_data = d3.layout.pie()
    .value(function(d){return d.population;});
 
    console.log(angle_data(data));
   
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
    .text(function(d){return d.data.peoplo})
    .attr("transform",function(d){
        var c = arc_generator.centroid(d),
            x = c[0],
            y = c[1],
            // pythagorean theorem for hypotenuse
            h = Math.sqrt(x*x + y*y);
        // 因為 400*400, 取一半再大一點
        return "translate(" + (x/h * 250) +  ',' +
           (y/h * 240) +  ")";
    })
    .attr("text-anchor","middle")
    .attr("width","70px") ;
    addLineBreak(svg);
})
 
function type(d){
    d.population = +d.population;
    return d;
}
function addLineBreak (svg) {
    svg.selectAll('g text').each(function () {
        var val = this.innerHTML,
            idx = val.indexOf('%'),
            ch;
        // 沒有 % 符號, 不處理
        if (idx < 0) {
            return;
        }
        // 有 % 符號, 往前找到非數字為止
        while (idx > 0) {
            idx--;
            ch = val.charAt(idx);
            if (ch > '9' || ch < '0') {
                break;
            }
        }
        this.innerHTML =
            '<tspan x="0" dy="1.2em">'+val.substring(0,idx+1)+'</tspan>'
            + '<tspan x="0" dy="1.2em">'+val.substring(idx+1)+'</tspan>'
    });
}