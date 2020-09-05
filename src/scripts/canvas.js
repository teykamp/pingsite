document.addEventListener("DOMContentLoaded", function(event){
    console.log('loaded')
    main();
})

function main(){
    //display loading screen until all assets have loaded

    
    draw_map();
};

function draw_map(){

    var dragging = false;

    //canvas initialization
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    //event listener shit
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

    //drawing le map
    var map_image = new Image();
    map_image.src = "./images/worldmap.svg";

    map_image.style.border = "solid";
    map_image.style.borderColor = "black";
    map_image.style.backgroundColor = "orange";

    map_image.onload = function(){
        console.log('poggies')
        context.drawImage(map_image, 0, 0);
        console.log("yo dawg " + map_image.width)
        console.log("yo dawg " + map_image.height)
        /*
        console.log(canvas.width)
        console.log(map_image.width)
        console.log(map_image.height)
        console.log(map_image.offsetWidth)
        console.log(map_image.offsetHeight)
        */
    };

};






