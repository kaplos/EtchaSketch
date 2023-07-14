let mainContainer = document.querySelector('.main-container');
let divContainer = document.createElement('div');
divContainer.setAttribute("id","etch-container");
//let h = window.prompt("how many divs",16);


/*let slider = document.querySelector("#slider");
let sliderValue = document.querySelector("#slider-value")

slider.addEventListener("input",function(){
    sliderValue.textContent = parseInt(slider.value);
    mainContainer.innerHTML ="";
    updateGrid(parseInt(slider.value));
    
})
function updateGrid(num){
    makeGrid(num)
}*/
makeGrid(16);
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
  
    colorButton.addEventListener('click',() => {
       selection= "colored"
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
        selection= "rgb"
        rgbButton.setAttribute("style", " background-color:black; color:white;")
        colorButton.setAttribute("style", " background-color:white; color:black;")
        clearButton.setAttribute("style", " background-color:white; color:black;")
    })
let button = document.querySelectorAll('.grid-item'); 
button.forEach((button)=>{
    
    //button.addEventListener('hover',() => {
       // button.classList.add("colored");
    //})
    button.addEventListener("mouseover",()=>{
        addRemoveClass(button,selection);
    })
    
})

function addRemoveClass(buttonId,selection){
    if(selection==="clear"){

        buttonId.classList.remove("colored");

    }else if(selection==="colored"){
        buttonId.classList.add("colored");
    }else{
        //console.log(`button id ${buttonId.id} selection: ${selection}`)
        console.log("color");
    }
    
}
