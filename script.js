let gridSize = 16;

function createRow(){
    let newDiv = document.createElement("div");
    newDiv.classList.add("rowFlex");
    
    let mainGrid = document.getElementById("mainBox");
    mainGrid.appendChild(newDiv);
}

function createAllRows(gridSize){
    for(let i = 1; i <= gridSize; i++){
        createRow();
    }
}

createAllRows(gridSize);

function createSquare(parentDiv){
    for(let i = 1; i <= gridSize; i++){
        let newSquare = document.createElement("div");
        newSquare.classList.add("squares");

        parentDiv.appendChild(newSquare);
    }
}

function createAllSquares(gridSize){
    const rowList = Array.from(document.querySelectorAll(".rowFlex"));
    rowList.forEach(parentDiv => createSquare(parentDiv));
}

createAllSquares(gridSize);

function triggerHover(){
    const squareList = Array.from(document.querySelectorAll(".squares"));
    squareList.forEach(square => square.addEventListener("mouseover", function(){
        square.classList.add("blacked")
        }
    ));
}

triggerHover();

function enableRestartBtn(){
    const restart = document.getElementById("restartBtn");
    const squareList = Array.from(document.querySelectorAll(".squares"));
    restart.addEventListener("click", function(){
        squareList.forEach(square => square.classList.remove("blacked"))
    });
}

enableRestartBtn();

const changeSize = document.getElementById("sizeBtn");
changeSize.addEventListener("click", function(){
    gridSize = parseInt(prompt("Input new size:"));
    if (isNaN(gridSize)){
        return alert("That's not a number!");
    }
    else{
        let mainGrid = document.getElementById("mainBox");
        mainGrid.innerHTML = "";

        createAllRows(gridSize);
        createAllSquares(gridSize);
        triggerHover();
        enableRestartBtn();
    }
});