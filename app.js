let mainContainer = document.querySelector('.main-container');
let divContainer = document.createElement('div');

divContainer.setAttribute("id","etch-container");
//let h = window.prompt("how many divs",16);
makeGrid(16)




function makeGrid(value){
    
    for(let i = 1 ;i <= value;i++ ){
        const row = document.createElement('div');
        row.setAttribute("id", `data-row-${i}`)
        for(let j = 1 ; j<= value;j++){
            let grid = document.createElement('div');
            grid.setAttribute("class","grid-item");
            grid.setAttribute("type","button");
            grid.setAttribute("tabindex","0");
            grid.setAttribute("aria-pressed","mixed");
            grid.setAttribute("draggable","false")
            grid.setAttribute("id",`data-row-${i}-column-${j}`);
            row.appendChild(grid);
            divContainer.appendChild(row);
        }
    }
    mainContainer.appendChild(divContainer);
}
let selection="";
let colorButton = document.querySelector('#black');
let clearButton = document.querySelector('#eraser');
let rgbButton = document.querySelector('#color');
let resetButton = document.querySelector('#reset');
  
    colorButton.addEventListener('click',() => {
       selection= "black"
       colorButton.setAttribute("style", " background-color:black; color:white;")
       clearButton.setAttribute("style", " background-color:white; color:black;")
       rgbButton.setAttribute("style", " background-color:white; color:black;")
    })
    clearButton.addEventListener('click',() => {
        selection= "clear"
        clearButton.setAttribute("style", " background-color:black; color:white;")
        colorButton.setAttribute("style", " background-color:white; color:black;")
        rgbButton.setAttribute("style", " background-color:white; color:black;")
    })
    rgbButton.addEventListener('click',() => {
        selection = "rgb"
        rgbButton.setAttribute("style", " background-color:black; color:white;")
        colorButton.setAttribute("style", " background-color:white; color:black;")
        clearButton.setAttribute("style", " background-color:white; color:black;")
    })
    resetButton.addEventListener("click",()=>{
        document.querySelectorAll(".grid-item").forEach((gridItem)=>{gridItem.style.backgroundColor="white"})
    })
let slider = document.querySelector("#slider");
let sliderValue = document.querySelector("#slider-value")

slider.addEventListener("input",function(){
    sliderValue.textContent = `${slider.value} x ${slider.value}`;
    divContainer.innerHTML ="";
    makeGrid(parseInt(slider.value));
    
})

let button = document.querySelectorAll('.grid-item');
button.forEach((button)=>{
    button.addEventListener("mousedown",()=>{
    addRemoveClass(button,selection);
    })
    button.addEventListener("mouseover",(event)=>{
        if(event.buttons == 1){
            addRemoveClass(button,selection); 
        }
    })
})

function addRemoveClass(buttonId,selection){
    if(selection==="clear"){
        buttonId.style.backgroundColor = "white";
    }else if(selection==="black"){
        buttonId.style.backgroundColor = "black";
    }else if(selection ==="rgb"){
        buttonId.style.backgroundColor = randomColor() ;
    }else{
        alert("select a color")
    }
    
}
function randomColor(){
    return `rgb(${random(255)},${random(255)},${random(255)})`
}
function random(value){
    return Math.floor(Math.random()*value)+1;
}