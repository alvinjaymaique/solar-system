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
    box.style.cursor = 'grabbing';  
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

// subtract the y axis by 50
var rect = solarS.getBoundingClientRect();
var x = rect.x, y = rect.y-50;
solarS.style.left = x + 'px';
solarS.style.top = y + 'px';
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
        else if(previousClientX - e.clientX < 0 && x > window.innerWidth*0.2){
            x = x - moveSpeed;          
            solarS.style.left = x + 'px';       
        }
        if(previousClientY - e.clientY > 0 && y < window.innerHeight*0.8)
        {
            y = y + moveSpeed;
            solarS.style.top = y + 'px';           
        }
        else if(previousClientY - e.clientY < 0 && y > window.innerHeight*0.2){
            y = y - moveSpeed;
            solarS.style.top = y + 'px';
        }
    }
})

//2 For dragging


//3 top buttons
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
//3 top buttons


//4 Event Handler for planets and sun
var frameInfoPath = "cover/cover.html";
const frame = document.querySelector('.info1');
const closeFrame = document.querySelector('.close-info');
planets.forEach(function(planet)
{
    planet.addEventListener("click", function(){
        var planetName = planet.classList[1];
        frameInfoPath = planetName+'/'+planetName+'.html';
        window.parent.postMessage(planetName, '*');      
    })
})

sun.addEventListener("click", function(){
    window.parent.postMessage('sun', '*');
})
//4 Event Handler for planets and sun


//5 When planets are hovered the orbit will stop
// Should output planet's name when hovered
var planetName;
planets.forEach((planet) => {
    planet.addEventListener('mouseenter', () => {
        orbit.forEach((orbitPlanet) => {      
            orbitPlanet.style.animationPlayState = 'paused';    
        })

        if(!isMousePress){
            createName(planet);
        }
        
    })

    planet.addEventListener('mouseleave', () => {
        orbit.forEach((orbitPlanet) => {
            if(isRunning){
                orbitPlanet.style.animationPlayState = 'running';
                
            }          
        })
        delName();
    })
})

sun.addEventListener('mouseenter', () =>{
    if(!isMousePress){
            createName(sun);
        }
})

sun.addEventListener('mouseleave', () => {
    delName();
})

//Function of creating div for name
function createName(planet){
    //get x and y coordinate
    var rect = planet.getBoundingClientRect();
    planetName = document.createElement('div');
    planetName.classList = 'planet-name';
    let name = planet.classList[1];
    if(name != null){
        planetName.innerHTML = planet.classList[1];
    }
    else{
        planetName.innerHTML = 'SUN';
    } 
    planetName.style.top = parseInt(rect.y-100) + 'px';
    planetName.style.left = parseInt(rect.x+30) + 'px';
    box.appendChild(planetName);
}

function delName(){
    planetName = document.querySelector('.planet-name');
    box.removeChild(planetName);
}
//5 When planets are hovered the orbit will stop


window.addEventListener('touchstart', ()=>{
    if(isRunning){
        planets.forEach((planet) => {
            planet.addEventListener('mouseenter', () => {
                orbit.forEach((orbitPlanet) => {
                    orbitPlanet.style.animationPlayState = 'running'; 
                })
            })           
        })
        // window.parent.postMessage('screenTouched', '*');
    }    
})


window.addEventListener('message', (event)=>{
    if(event.data != ''){
        // alert(event.data);
        if(event.data === 'mainBtnClicked'){
            centerSolar();
            isMousePress = false;
            setTimeout(()=>{
                newCoordinates();
            }, 1000); // 1000ms = 1s
        }
    }
})

function centerSolar(){
    solarS.style.transition = 'left 1s ease, top 1s ease';
    solarS.style.left = '50%';
    solarS.style.top = '50%';
}

function newCoordinates(){
    solarS.style.transition = '';
    rect = solarS.getBoundingClientRect();
    x = rect.x;
    y = rect.y-30;
}

// Output name of planet when hovered
