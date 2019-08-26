// shapeRadius variable is used to define percent radius of our shape
// This program will only use circles and square so an array was created
// so 0 defines a square and 50 defines a circle 


let shapeRadius =[0, 50];
let startTime = Date.now();
let bestTime = 1000;



function getNewShape() {
    
//    document.getElementById("shape").style.display = "block";
    
    // r, g, b, are the variables used to define the r, g, b values for our shape
    // color
    
    let r = Math.floor(Math.random()*255+1);
    let g = Math.floor(Math.random()*255+1);
    let b = Math.floor(Math.random()*255+1);
    shape.style.backgroundColor = "rgb("+r+","+g+","+b+")";
    
    // shapesize is the variable that defines the width and height for the shape
    // between the range of 100 to 500 
    
    let shapeSize = Math.floor((Math.random()*500)+100);
    shape.style.width = shapeSize;
    shape.style.height = shapeSize;
    
    // shapePositionLeft and shapePosition are the variables that defines the 
    // random positon of the shape 
    
    let shapePositionLeft = Math.floor((Math.random()*70));
    let shapePositionTop = Math.floor((Math.random()*70));
    shape.style.position = "absolute";
    shape.style.left = shapePositionLeft + "%";
    shape.style.top = shapePositionTop + "%"; 
    
    // shapeNumber returns 0 or 1 to index the shapeRadius array for random shape
    
    let shapeNumber = Math.floor(Math.random()*2);
    shape.style.borderRadius = shapeRadius[shapeNumber] + "%";

    // endTime provides the functions endTime in order to calculate the total time
    // spent when compared to startTime 
    
    let endTime = Date.now();
    let reactionTime = (endTime - startTime)/1000;
    document.getElementById("time").innerHTML = "Your time: " + (reactionTime) + "s";
    
    startTime = Date.now();
    
    // conditional check to record the player's best time
    
    if (reactionTime < bestTime) {
        
        bestTime = reactionTime;
        
    }
   
    document.getElementById("bestTime").innerHTML = "Your best time is: " + bestTime + "s"; 
}


//    function start () {
//        document.getElementById("shape").style.display = "none";
//        setTimeout (getNewShape, 1000);
//    }




