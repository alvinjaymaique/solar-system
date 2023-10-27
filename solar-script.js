//define
const orbit = document.querySelectorAll('.orbit');
const sun = document.getElementById("sun");
const planets = document.querySelectorAll(".planet");
var btns = document.getElementById('btn');
var currentScale = 1;
var zoomNum = 0.04;
//minimum and maximum zooming
var minZoom = 0.8;
var maxZoom = 2;


var box = document.getElementById('selection-box');
//1 For zooming and scaling using wheel
var solarS = document.getElementById("solar_system");

box.addEventListener('wheel', function(e){
    if(e.deltaY > 0 && currentScale > minZoom)
    {
        currentScale -= zoomNum;
        solarS.style.transform = 'scale('+(currentScale)+')';
    }
    else if(currentScale < maxZoom){
        currentScale += zoomNum;
        solarS.style.transform = 'scale('+(currentScale)+')';
    }
})
//1 For zooming and scaling using wheel

//2 For dragging
var previousClientX, previousClientY;
var isMousePress = false;
box.addEventListener('mousedown', function(e){
    isMousePress = true;   
    previousClientX = e.clientX;
    previousClientY = e.clientY;  
    box.style.cursor = 'move';
});

box.addEventListener('mouseup', function(){
    isMousePress = false;
    box.style.cursor = 'default';
})

box.addEventListener('mouseleave', function(){
    isMousePress = false;
    box.style.cursor = 'default';

    box.removeEventListener('mousedown', function(e){
        isMousePress = true;   
        previousClientX = e.clientX;
        previousClientY = e.clientY;  
        box.style.cursor = 'grabbing';
    });
})

const rect = solarS.getBoundingClientRect();
var x = rect.x, y = rect.y;
const moveSpeed = 5;
box.addEventListener('mousemove', function(e){
    if(isMousePress)
    {    
        // document.title = e.clientX - previousClientX;
        if(previousClientX - e.clientX > 0 && x < window.innerWidth*0.8) 
        {           
            x = x + moveSpeed;          
            solarS.style.left = x + 'px';        
        }
        if(previousClientX - e.clientX < 0 && x > window.innerWidth*0.2){
            x = x - moveSpeed;          
            solarS.style.left = x + 'px';       
        }
        if(previousClientY - e.clientY > 0 && y < window.innerHeight*0.8)
        {
            y = y + moveSpeed;
            solarS.style.top = y + 'px';           
        }
        if(previousClientY - e.clientY < 0 && y > window.innerHeight*0.2){
            y = y - moveSpeed;
            solarS.style.top = y + 'px';
        }
    }
})

//2 For dragging


//2 top buttons
var isRunning = true;
const playPause = document.querySelector('.playPause');
btns.childNodes.forEach(function(btn){
    btn.addEventListener("click", function(){
        //for zooming
        const button = btn.classList[1];
        if(button == "zoomIn" && currentScale < maxZoom)
        {
            currentScale += zoomNum;
            solarS.style.transform = 'scale('+(currentScale)+')';
        }
        else if(button == "zoomOut" && currentScale > minZoom)
        {
            currentScale -= zoomNum;
            solarS.style.transform = 'scale('+(currentScale)+')';
        }
        //for zooming

        //for play or pause
        else if(button == "playPause")
        {
            // const orbits = document.querySelectorAll('orbit');
            orbit.forEach(function(orbitPlanet)
            {
                if(isRunning){
                    orbitPlanet.style.animationPlayState = 'paused';  
                    playPause.style.backgroundImage = 'url("play.png")';  
                }
                else{
                    orbitPlanet.style.animationPlayState = 'running';       
                    playPause.style.backgroundImage = 'url("pause.png")';           
                }              
            })
            isRunning = !isRunning;
            // alert('paused');     
        }
        //for play or pause
    })
})
//2 top buttons


//3 Event Handler for planets and sun
var frameInfoPath = "cover/cover.html";
const frame = document.querySelector('.info1');
const closeFrame = document.querySelector('.close-info');
planets.forEach(function(planet)
{
    planet.addEventListener("click", function(){
        var planetName = planet.classList[1];
        // frame.src = planetName+'/'+planetName+'.html';
        frameInfoPath = planetName+'/'+planetName+'.html';
        window.parent.postMessage(planetName, '*');
        // closeFrame.style.display = 'block';
    })
})
// closeFrame.addEventListener("click", function(){
//     closeFrame.style.display = 'none';

// })
sun.addEventListener("click", function(){
    // frame.src = sun.id+'/'+sun.id+'.html';
    // closeFrame.style.display = 'block';
    window.parent.postMessage('sun', '*');
})
//3 Event Handler for planets and sun


//4 When planets are hovered the orbit will stop
planets.forEach((planet) => {
    planet.addEventListener('mouseenter', () => {
        orbit.forEach((orbitPlanet) => {
            orbitPlanet.style.animationPlayState = 'paused'; 
        })
    })

    planet.addEventListener('mouseleave', () => {
        orbit.forEach((orbitPlanet) => {
            if(isRunning){
                orbitPlanet.style.animationPlayState = 'running';
            }          
        })
    })
})
//4 When planets are hovered the orbit will stop
