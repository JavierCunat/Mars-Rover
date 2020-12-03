//Javier Cunat
//Mr.Larrubia
//CSP P.3
//12/3/20


// -----------------Rover Project----------------- //

//Iteration 1

let rover = {
  direction = "N",
  x : 0,
  y : 0,
  travelLog: []

};

// --------------------Iteration 2 ------------------ //

//Rover Turning left 
function turnLeft(rover){
    console.log("turnLeft was called!");
  }

if (rover.direction === "N") {
  roverDirection = "W";
}

else if (rover.direction === "W"){
  roverDirection = "S";
}

else if (rover.direction === "S"){
  roverDirection = "E";
}

else if (rover.direction === "E"){
  roverDirection = "N";
};

//Rover Turning Right

  function turnRight(rover){
    console.log("turnRight was called!");
  }
  if (rover.direction === "N") {
    roverDirection = "E";
  }
  
  else if (rover.direction === "E"){
    roverDirection = "S";
  }
  
  else if (rover.direction === "S"){
    roverDirection = "W";
  }
  
  else if (rover.direction === "W"){
    roverDirection = "N";
  };


// ----------------------Iteration 3 ---------------------- //

//Rover Moving Foward

  function moveForward(rover){
    console.log("moveForward was called")
  }

  if (rover.direction === "N"){
    rover.y--
  }

  else if (rover.direction === "E" ){
    rover.x++
  }

  else if (rover.direction === "S"){
    rover.y++
  }

  else if (rover.direction === "W"){
    rover.x--
  }

  // -------------------------Iteration 4-------------------- //


 // let roverPath = ["r","f","f","r","f","f",lfrff]

 function roverPath(eachPath){

  for(let i=0; i< eachPath.length; i++){

    let path = eachPath.substring(i, i+1);

    if (roverPath === "f"){
      moveForward(rover); 
    }
    else if(roverPath === "l"){
      turnLeft(rover);
    }
    else if(roverPath === "r"){
      turnRight(rover);
    }

  }

}

// ----------------------------Iteration 5------------------------ //











