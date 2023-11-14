var infoFilePath;
const frameInfo = document.getElementById('frameInfo');
const closeInfo = document.querySelector('.close-info');

const textSolar = document.querySelector('.text-solar');
const textSystem = document.querySelector('.text-system');
const section = document.getElementById('section1');
const navi = document.getElementById('nav');

window.addEventListener('message', function(event){ 
    if(event.data == 'screenTouched')
    {
        // this.alert(event.data);
    }
    else if(event.data != '')
    {
        infoFilePath = event.data+'/'+event.data+'.html';
        // this.alert(infoFilePath);
        // this.alert(event.data);
        titleColor(event.data);
        frameInfo.src = infoFilePath;
        closeInfo.style.display = 'block'; 
        scrollToTop();    
    }    
})

closeInfo.addEventListener('click', () => {
    textSolar.style.background = 'linear-gradient(to left, rgb(245, 245, 245), rgb(243, 234, 213), rgb(238, 212, 153),  rgb(235, 181, 57), rgb(233, 171, 28), rgb(255, 179, 0)';
    textSolar.style.backgroundClip = 'text';
    textSolar.style.webkitBackgroundClip = 'text';
    textSolar.style.webkitTextFillColor = 'transparent';
    textSystem.style.background = 'linear-gradient(to right, rgb(245, 245, 245), rgb(243, 234, 213), rgb(238, 212, 153),  rgb(235, 181, 57), rgb(233, 171, 28), rgb(255, 179, 0)';
    textSystem.style.backgroundClip = 'text';
    textSystem.style.webkitBackgroundClip = 'text';
    textSystem.style.webkitTextFillColor = 'transparent';
})



function titleColor(objectPicked){
    switch(objectPicked)
    {     
        case 'sun':
            textSolar.style.background = 'linear-gradient(to left, rgb(245, 245, 245), rgb(243, 243, 210), rgb(230, 230, 148),  rgb(235, 235, 56), rgb(233, 233, 28), rgb(255, 255, 0))';
            textSolar.style.backgroundClip = 'text';
            textSolar.style.webkitBackgroundClip = 'text';
            textSolar.style.webkitTextFillColor = 'transparent';
            textSystem.style.background = 'linear-gradient(to right, rgb(245, 245, 245), rgb(243, 243, 210), rgb(230, 230, 148),  rgb(235, 235, 56), rgb(233, 233, 28), rgb(255, 255, 0))';
            textSystem.style.backgroundClip = 'text';
            textSystem.style.webkitBackgroundClip = 'text';
            textSystem.style.webkitTextFillColor = 'transparent';
            break;  
        case 'mercury':
            textSolar.style.background = 'linear-gradient(to left, rgb(245, 245, 245), rgb(224, 224, 224), rgb(199, 199, 199),  rgb(173, 173, 173), rgb(167, 167, 167), rgb(125, 125, 125))';
            textSolar.style.backgroundClip = 'text';
            textSolar.style.webkitBackgroundClip = 'text';
            textSolar.style.webkitTextFillColor = 'transparent';
            textSystem.style.background = 'linear-gradient(to right, rgb(245, 245, 245), rgb(224, 224, 224), rgb(199, 199, 199),  rgb(173, 173, 173), rgb(167, 167, 167), rgb(125, 125, 125))';
            textSystem.style.backgroundClip = 'text';
            textSystem.style.webkitBackgroundClip = 'text';
            textSystem.style.webkitTextFillColor = 'transparent';
            break;
        case 'venus':
            textSolar.style.background = 'linear-gradient(to left, rgb(245, 245, 245), rgb(238, 225, 206), rgb(236, 200, 150),  rgb(245, 184, 98), rgb(233, 160, 58), rgb(200, 136, 48))';
            textSolar.style.backgroundClip = 'text';
            textSolar.style.webkitBackgroundClip = 'text';
            textSolar.style.webkitTextFillColor = 'transparent';
            textSystem.style.background = 'linear-gradient(to right, rgb(245, 245, 245), rgb(238, 225, 206), rgb(236, 200, 150),  rgb(245, 184, 98), rgb(233, 160, 58), rgb(200, 136, 48))';
            textSystem.style.backgroundClip = 'text';
            textSystem.style.webkitBackgroundClip = 'text';
            textSystem.style.webkitTextFillColor = 'transparent';
            break;
        case 'earth':
            textSolar.style.background = 'linear-gradient(to left, rgb(245, 245, 245), rgb(215, 226, 243), rgb(163, 193, 238),  rgb(62, 133, 240), rgb(32, 111, 230), rgb(0, 102, 255))';
            textSolar.style.backgroundClip = 'text';
            textSolar.style.webkitBackgroundClip = 'text';
            textSolar.style.webkitTextFillColor = 'transparent';
            textSystem.style.background = 'linear-gradient(to right, rgb(245, 245, 245), rgb(215, 226, 243), rgb(163, 193, 238),  rgb(62, 133, 240), rgb(32, 111, 230), rgb(0, 102, 255))';
            textSystem.style.backgroundClip = 'text';
            textSystem.style.webkitBackgroundClip = 'text';
            textSystem.style.webkitTextFillColor = 'transparent';
            break;
        case 'mars':
            textSolar.style.background = 'linear-gradient(to left, rgb(245, 245, 245), rgb(231, 204, 199), rgb(235, 162, 149),  rgb(236, 133, 115), rgb(248, 110, 86), rgb(254, 83, 52))';
            textSolar.style.backgroundClip = 'text';
            textSolar.style.webkitBackgroundClip = 'text';
            textSolar.style.webkitTextFillColor = 'transparent';
            textSystem.style.background = 'linear-gradient(to right, rgb(245, 245, 245), rgb(231, 204, 199), rgb(235, 162, 149),  rgb(236, 133, 115), rgb(248, 110, 86), rgb(254, 83, 52))';
            textSystem.style.backgroundClip = 'text';
            textSystem.style.webkitBackgroundClip = 'text';
            textSystem.style.webkitTextFillColor = 'transparent';
        break;
        case 'jupiter':
            textSolar.style.background = 'linear-gradient(to left, rgb(245, 245, 245), rgb(240, 223, 206), rgb(241, 198, 152),  rgb(243, 172, 96), rgb(211, 146, 76), rgb(164, 113, 58))';
            textSolar.style.backgroundClip = 'text';
            textSolar.style.webkitBackgroundClip = 'text';
            textSolar.style.webkitTextFillColor = 'transparent';
            textSystem.style.background = 'linear-gradient(to right, rgb(245, 245, 245), rgb(240, 223, 206), rgb(241, 198, 152),  rgb(243, 172, 96), rgb(211, 146, 76), rgb(164, 113, 58))';
            textSystem.style.backgroundClip = 'text';
            textSystem.style.webkitBackgroundClip = 'text';
            textSystem.style.webkitTextFillColor = 'transparent';
        break;
        case 'saturn':
            textSolar.style.background = 'linear-gradient(to left, rgb(245, 245, 245), rgb(238, 221, 202), rgb(241, 214, 183),  rgb(224, 190, 151), rgb(214, 180, 140), rgb(175, 147, 114))';
            textSolar.style.backgroundClip = 'text';
            textSolar.style.webkitBackgroundClip = 'text';
            textSolar.style.webkitTextFillColor = 'transparent';
            textSystem.style.background = 'linear-gradient(to right, rgb(245, 245, 245), rgb(238, 221, 202), rgb(241, 214, 183),  rgb(224, 190, 151), rgb(214, 180, 140), rgb(175, 147, 114))';
            textSystem.style.backgroundClip = 'text';
            textSystem.style.webkitBackgroundClip = 'text';
            textSystem.style.webkitTextFillColor = 'transparent';
        break;
        case 'uranus':
            textSolar.style.background = 'linear-gradient(to left, rgb(245, 245, 245), rgb(202, 230, 240), rgb(163, 217, 236),  rgb(130, 213, 243), rgb(95, 200, 238), rgb(67, 197, 246))';
            textSolar.style.backgroundClip = 'text';
            textSolar.style.webkitBackgroundClip = 'text';
            textSolar.style.webkitTextFillColor = 'transparent';
            textSystem.style.background = 'linear-gradient(to right, rgb(245, 245, 245), rgb(202, 230, 240), rgb(163, 217, 236),  rgb(130, 213, 243), rgb(95, 200, 238), rgb(67, 197, 246))';
            textSystem.style.backgroundClip = 'text';
            textSystem.style.webkitBackgroundClip = 'text';
            textSystem.style.webkitTextFillColor = 'transparent';
        break;
        case 'neptune':
            textSolar.style.background = 'linear-gradient(to left, rgb(245, 245, 245), rgb(218, 231, 236), rgb(183, 201, 223),  rgb(168, 192, 221), rgb(155, 188, 228), rgb(139, 180,230))';
            textSolar.style.backgroundClip = 'text';
            textSolar.style.webkitBackgroundClip = 'text';
            textSolar.style.webkitTextFillColor = 'transparent';
            textSystem.style.background = 'linear-gradient(to right, rgb(245, 245, 245), rgb(218, 231, 236), rgb(183, 201, 223),  rgb(168, 192, 221), rgb(155, 188, 228), rgb(139, 180,230))';
            textSystem.style.backgroundClip = 'text';
            textSystem.style.webkitBackgroundClip = 'text';
            textSystem.style.webkitTextFillColor = 'transparent';
        break;
    }
}

closeInfo.addEventListener('click', () =>{
    closeInfo.style.display = 'none';
    frameInfo.src = 'cover/cover.html';
})

function scrollToTop() {
    document.documentElement.scrollTop = 0; // For modern browsers
    document.body.scrollTop = 0; // For older browsers
}

const frameSolar = document.getElementById('frameSolar');
const mainBtn = document.querySelector('.mainBtn');
var isNavOpen = true;
var navHeight = frameInfo.style.height;
mainBtn.addEventListener('click', ()=>{
    if(window.outerWidth > 600)
    {
        //Transition
        section.style.transition = 'grid-template-columns 1s, min-width 1s';
        navi.style.transition = 'min-width 1s';
        closeInfo.style.transition = 'min-width 1s';
        frameSolar.style.pointerEvents = 'none';
        if(isNavOpen)
        {
            //Change Style
            section.style.gridTemplateColumns = '0px auto';
            navi.style.minWidth = '0px';      
            closeInfo.style.minWidth = '0px';      
            setTimeout(()=>{
                mainBtn.style.backgroundImage = "url(img/arrow_forward.svg)";
            }, 1000)  
        }
        else{
            //Change Style
            section.style.gridTemplateColumns = '600px auto';
            navi.style.minWidth = '600px';
            closeInfo.style.minWidth = '25px';
            setTimeout(()=>{
                mainBtn.style.backgroundImage = "url(img/arrow_backward.svg)";
            }, 1000)      
        }
        isNavOpen = !isNavOpen
        frameSolar.contentWindow.postMessage('mainBtnClicked','*');
        setTimeout(()=>{
            frameSolar.style.pointerEvents = 'auto';
        }, 1000)
    }
    else if(window.outerWidth <= 600){
        //Transition
        section.style.transition = 'grid-template-rows 1s, min-height 1s';
        navi.style.transition = 'min-height 1s';
        closeInfo.style.transition = 'min-height 1s';
        frameSolar.style.pointerEvents = 'none';
        if(isNavOpen)
        {
            //Change Style
            section.style.gridTemplateRows = '100px 0px 600px';
            navi.style.minWidth = '0px';      
            closeInfo.style.minHeight = '0px';      
            setTimeout(()=>{
                mainBtn.style.backgroundImage = "url(img/arrow_forward.svg)";
            }, 1000)  
        }
        else{
            //Change Style
            section.style.gridTemplateRows = '100px 100% 600px';
            navi.style.minHeight = navHeight;
            closeInfo.style.minHeight = '25px';
            setTimeout(()=>{
                mainBtn.style.backgroundImage = "url(img/arrow_backward.svg)";
            }, 1000)      
        }
        isNavOpen = !isNavOpen
        frameSolar.contentWindow.postMessage('mainBtnClicked','*');
        setTimeout(()=>{
            frameSolar.style.pointerEvents = 'auto';
        }, 1000)
    }
    
})

// section.addEventListener('click', ()=>{
//     section.style.gridTemplateAreas = 
//     '"head"'+
//     '"main"'+
//     '"main"';


//     const solarS = window.open('solar-system.html', 'Child Window');
//     solarS.postMessage('test', '*');
// })