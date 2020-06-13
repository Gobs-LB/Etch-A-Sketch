function createRow(){
    let newDiv = document.createElement("div");
    newDiv.classList.add("rowFlex");
    
    let mainGrid = document.getElementById("mainBox");
    mainGrid.appendChild(newDiv);
}


for(let i = 1; i <= 16; i++){
    createRow();
}
