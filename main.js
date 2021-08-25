// Options menu :

let options = document.querySelectorAll(".option");


// Output Items :

let minute = document.querySelector(".minute"),
    second = document.querySelector(".second"),

    theInner = document.querySelector(".inner"),
    startBtn = document.querySelector(".startBtn"),

    progress = document.querySelectorAll(".progress"),
    leftProgress = document.querySelector(".left .progress"),
    rightProgress = document.querySelector(".right .progress");

// Seting Items :

let setingIcon = document.querySelector(".st-icon i"),
    setingForm = document.querySelector(".seting-form");

let colors = document.querySelectorAll(".color"),
    closeBtn = document.querySelector(".close-icon"),
    applyBtn = document.querySelector(".applyBtn");

// Menu items :

let pomoItem = document.querySelector(".pomodoro");
let shortItem = document.querySelector(".short-break");
let longItem = document.querySelector(".long-break");

// Inputs Selectors :

let pomoInput = document.querySelector(".pomo"),
    shortInput = document.querySelector(".short"),
    longInput = document.querySelector(".long");



var pomoTime = 25,
    shortTime = 05,
    longTime = 50;

if(parseInt(minute.textContent) < 10){
    minute.textContent =  "0"+ parseInt(minute.textContent) 
}

if(parseInt(second.textContent) < 10){
    second.textContent =  "0"+ parseInt(second.textContent) 
}

function removeCheck(){
    colors.forEach(c=>{
        c.classList.remove("active");
    })
}

colors.forEach(cl=>{
    cl.addEventListener("click", ()=>{
        removeCheck();
        cl.classList.add("active");
    })
})

setingIcon.addEventListener("click" , ()=>{
    setingForm.classList.toggle("on");
})

closeBtn.onclick = ()=>{
    setingForm.classList.remove("on");
}

function removeActive(){
    options.forEach(opt=>{
        opt.parentElement.classList.remove("active");
    })
}

options.forEach(o=>{
    o.addEventListener("click" , ()=>{
        removeActive();
        o.parentElement.classList.add("active");
        
    })
    
})

let firstSecond = parseInt(second.textContent);
var firstMinute = pomoTime;




var myTimer = setInterval(show,1000);
theInner.classList.add("pause");
clearInterval(myTimer);
    
theInner.onclick = function(){
        console.log("you clicked");
    
     this.classList.toggle("pause");

    this.classList.add("move");
     
    if(this.classList.contains("pause")){
            clearInterval(myTimer);
            startBtn.textContent = "start";
            leftProgress.style.animationPlayState="paused";
            rightProgress.style.animationPlayState="paused";
    }else{
            myTimer = setInterval(show,1000);
            startBtn.textContent = "Pause";
            
            leftProgress.style.animationPlayState="running";
            rightProgress.style.animationPlayState="running";
            leftProgress.classList.add("active");
            leftProgress.style.animationDuration = `${firstMinute*29}s`;
            rightProgress.classList.add("active");
            rightProgress.style.animationDelay = `${firstMinute*29}s`;
            rightProgress.style.animationDuration = `${firstMinute*30}s`;

        }
        
    }



function show(){
    var currentSecond = parseInt(second.textContent),
        currentMinute = parseInt(minute.textContent);
        
    currentSecond--;

    if(currentSecond< 10){
        second.textContent =  "0"+ currentSecond
    }else{
        second.textContent = currentSecond;
    }
    
            
    if(currentSecond <= 0){
        currentSecond = 59;
        second.textContent = currentSecond;
        
        currentMinute--;
        minute.textContent = currentMinute;
        
        if(currentMinute <= 0){
        
            currentSecond = firstSecond;
            currentMinute = firstMinute;
            second.textContent = currentSecond;
            minute.textContent = currentMinute;
            theInner.classList.add("pause");
            clearInterval(myTimer);
            leftProgress.classList.remove("active");
            rightProgress.classList.remove("active");

            startBtn.textContent= "Start";
            theInner.classList.remove("move");

        
                        
        }
                
        
    }
            
}
    


pomoItem.onclick = ()=>{
    theInner.classList.add("pause");
    clearInterval(myTimer);
    leftProgress.classList.remove("active");
    rightProgress.classList.remove("active");

    startBtn.textContent= "Start";
    theInner.classList.remove("move");
    second.textContent = "59";           
    

    if(pomoTime < 10){
        minute.textContent =  "0"+ pomoTime;
    }else{
        minute.textContent = pomoTime;
    }


}
shortItem.onclick = ()=>{
    
    theInner.classList.add("pause");
    clearInterval(myTimer);
    leftProgress.classList.remove("active");
    rightProgress.classList.remove("active");

    startBtn.textContent= "Start";
    theInner.classList.remove("move");

    second.textContent = "59";

    if(shortTime < 10){
        minute.textContent =  "0"+ shortTime;
    }else{
        minute.textContent = shortTime;
    }
}
longItem.onclick = ()=>{

    theInner.classList.add("pause");
    clearInterval(myTimer);
    leftProgress.classList.remove("active");
    rightProgress.classList.remove("active");

    startBtn.textContent= "Start";
    theInner.classList.remove("move");
    second.textContent = "59";


    if(longTime < 10){
        minute.textContent =  "0"+ longTime;
    }else{
        minute.textContent = longTime;
    }
}

applyBtn.onclick = ()=>{

    setingForm.classList.remove("on");
    pomoTime = parseInt(pomoInput.value);
    console.log(pomoTime);
    shortTime = parseInt(shortInput.value);
    console.log(shortTime)
    longTime = parseInt(longInput.value);
    console.log(longTime);

    if(pomoTime < 10){
        minute.textContent =  "0"+ pomoTime;
    }else{
        minute.textContent = pomoTime;
    }


    if(document.querySelector(".color-2").classList.contains("active")){
        applyBtn.classList.remove("three");
        applyBtn.classList.add("two");
        

        options.forEach(opt=>{
            opt.parentElement.classList.remove("three");
            opt.parentElement.classList.add("two");
        })

        progress.forEach(p=>{
            p.style.backgroundColor = "rgb(7, 219, 247)" ;
        })


    }else if(document.querySelector(".color-3").classList.contains("active")){
        applyBtn.classList.remove("two");
        applyBtn.classList.add("three");

        options.forEach(opt=>{

            opt.parentElement.classList.remove("two");
            opt.parentElement.classList.add("three");

        });

        progress.forEach(p=>{
            p.style.backgroundColor  = "rgb(247, 9, 187)"; 
        })


    }else {
        applyBtn.classList.remove("three");
        applyBtn.classList.remove("two");
        document.querySelector(".menu div.active").classList.remove("three");
        document.querySelector(".menu div.active").classList.remove("two");

        options.forEach(opt=>{

            opt.parentElement.classList.remove("two");
            opt.parentElement.classList.remove("three");
        });

        progress.forEach(p=>{
            p.style.backgroundColor  = "var(--currentTheme)"; 
        })

    }
    

}
