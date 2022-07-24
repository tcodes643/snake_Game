let btnLeft=document.querySelector(".volume-container button");
let btnRight=document.querySelector(".volume-container button:last-child");
let volumeSlider=document.querySelector(".volume-content .volume-slider");
let size=document.querySelector(".volume-slider").clientWidth;

btnLeft.addEventListener("click", ()=>{
    volumeSlider.style="width:"+ (size-=100)+"px";
    volumeSlider.style.transition="width linear .5s";
    
});
btnRight.addEventListener("click", ()=>{
    volumeSlider.style="width:"+ (size+=100)+"px";
    volumeSlider.style.transition="width linear .5s";
})
document.body.style="display:flex;align-items:center; justify-content: center;height: 100vh";
let poster=document.createElement("div");poster.innerHTML="Codes - hacker";
poster.style="position: absolute;top: 0;left: 0;padding: 10px;font-size: 20px;";
document.body.appendChild(poster);