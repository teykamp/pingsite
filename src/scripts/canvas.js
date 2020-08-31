document.addEventListener("DOMContentLoaded", function(event){
    console.log('loaded')

    main();
})

function main(){
    //display loading screen until all assets have loaded
    draw_map();
};

function draw_map(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    var map_image = new Image();
    map_image.src = "./images/worldmap.svg";
    map_image.onload = function(){context.drawImage(map_image, 0, 0);};
};

