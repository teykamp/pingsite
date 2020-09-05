document.addEventListener("DOMContentLoaded", function(event) {
    console.log('loaded')
    main();
})

function main(){
    // display loading screen until all assets have loaded

    draw_map();
 
    /* 
    example:

    for x in range(len(dict_of_ping_coords)):
        draw_pings(x[0], x[1], circle_size(client_x, client_y, x[0], x[1]))
    
    */

};

function draw_map() {

    var dragging = false;

    //canvas initialization
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // event listener
    canvas.addEventListener('mousedown', e => {
        dragging = true;
    });
    canvas.addEventListener('mouseup', e => {
        dragging = false;
    });
    canvas.addEventListener('mousemove', e => {
        console.log(dragging);
        if(dragging){
            var rect = canvas.getBoundingClientRect();
            context.drawImage(map_image, e.offsetX, e.offsetY);
        };
    });

    //drawing map
    var map_image = new Image();
    map_image.src = "./images/worldmap.svg";

    map_image.style.border = "solid";
    map_image.style.borderColor = "black";
    map_image.style.backgroundColor = "orange";

    map_image.onload = function() {
        console.log('loading')
        context.drawImage(map_image, 0, 0);
        draw_pings(200, 200, 20);
        
        console.log("width " + map_image.width)
        console.log("height " + map_image.height)
        /*
        console.log(canvas.width)
        console.log(map_image.width)
        console.log(map_image.height)
        console.log(map_image.offsetWidth)
        console.log(map_image.offsetHeight)
        */
    };

};

function draw_pings(x, y, rad) {
    //draws circle 
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    // r, g, b, opacity (alpha, transpareny)
    context.fillStyle = "rgba(255, 0, 0, 0.5)";

    // ctx.arc(x, y, radius, startAngle, endAngle, clockwise);
    context.arc(x, y, 20, rad, 360, true);
    context.fill();

};


function circle_size(x1 /*client x*/, y1 /*client y*/, x2 /*server x*/, y2 /*server y*/) {
    // loop through this for every point
    // returns radius

    radius = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))

    return radius

};




