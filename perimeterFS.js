const shape = 
    [
        {
            name: "circle",
            diameter: 8
        },
        {
            name: "square",
            side: 10
        }
    ] 
var ps=require("fs");

ps.writeFileSync("shape.txt",JSON.stringify(shape));
data=ps.readFileSync("shape.txt","utf-8");

b=JSON.parse(data);

if( b[0].name == 'circle'){
    var perimeter = (b[0].diameter/2) * 3.14 * 2 ;
    console.log(perimeter);
}
if ( b[1].name == 'square'){
    var peri = (b[1].side) *4  ;
    console.log(peri);
}
ps.appendFileSync("shape.txt","\nPerimeter of circle = "+ JSON.stringify(perimeter)+ "\nPerimeter of square = "+JSON.stringify(peri));
