let statusBlender = "Off";

let blender = document.getElementById("blender");

let blenderSound = document.getElementById("blender-sound");
let buttonBlender = document.getElementById("blender-button-sound");

function controlBlender(){
    if (statusBlender == "Off") {
        statusBlender = "On";
        makeSounds();
        blender.classList.add("active");
       /* console.log("I'm turned On, Baby"); */
    }
    else {
        statusBlender = "Off";
        makeSounds();
        blender.classList.remove("active");
        /*console.log("You turned me Off =("); */
    }
}

function makeSounds(){
    if(blenderSound.paused){
        blenderSound.play();
        buttonBlender.play();
    }
    else{
        buttonBlender.play();
        blenderSound.pause();
    }
}