let body = document.querySelector('.main-container');
let divContainer = document.createElement('div');
divContainer.setAttribute("id","etch-container");
//let h = window.prompt("how many divs",16);

let h = 16;
makeGrid(h);
function makeGrid(value){
    for(let i = 1 ;i <=h;i++ ){
        const row = document.createElement('div');
        row.setAttribute("id", `data-row-${i}`)
        for(let j = 1 ; j<=h;j++){
            let grid = document.createElement('div');
            grid.setAttribute("class","grid-item");
            grid.setAttribute("type","button");
            grid.setAttribute("tabindex","0");
            grid.setAttribute("aria-pressed","false");
            grid.setAttribute("id",`data-column-${j}`);
            row.appendChild(grid);
            divContainer.appendChild(row);
        }
    }
    body.appendChild(divContainer);
}

/*divId.forEach((divId)=>{
    divId.addEventListener('click', () =>{
        console.log("div clicked"+divId.id());
        
    })
});*/
let button = document.querySelectorAll('.grid-item'); 
button.forEach((button)=>{

    button.addEventListener('click',() => {
        button.setAttribute("class","colored");
    })
    button.addEventListener("mousedown",()=>{
        button.setAttribute("class","colored");
    })

})

