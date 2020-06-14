
function createRow(){
    let newDiv = document.createElement("div");
    newDiv.classList.add("rowFlex");
    
    let mainGrid = document.getElementById("mainBox");
    mainGrid.appendChild(newDiv);
}

for(let i = 1; i <= 16; i++){
    createRow();
}

function createSquare(parentDiv){
    for(let i = 1; i <= 16; i++){
        let newSquare = document.createElement("div");
        newSquare.classList.add("squares");

        parentDiv.appendChild(newSquare);
    }
}

const rowList = Array.from(document.querySelectorAll(".rowFlex"));
rowList.forEach(parentDiv => createSquare(parentDiv));

const squareList = Array.from(document.querySelectorAll(".squares"));
squareList.forEach(square => square.addEventListener("mouseover", function(){
    square.classList.add("blacked")
    }
));