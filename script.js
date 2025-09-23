var elems = [];
var state = false;

function loadGame() {
    elems = [];

    for (let i = 1; i < 7; i++) {
        const element = document.getElementById("op-" + String(i));
        elems.push(element);
        element.style.display = "none";
    }
}

function play() {
    var left = Math.floor(Math.random() * 3);
    var right = Math.floor(Math.random() * 3) + 3;

    for (let i = 1; i < 7; i++) {
        const element = document.getElementById("op-" + String(i));
        element.style.display = "none";
        element.style.backgroundColor = "";
    }

    elems[left].style.display = "inline";
    elems[right].style.display = "inline";
    
    startRepeat()
    state = true;
}

function startRepeat(left, right) {
    if (!state) {
        var rep = setInterval(() => {
            play(left, right);
        }, 100);

        endGame(rep);
    }
}

function endGame(rep) {
    setTimeout(() => {
        state = false;
        clearInterval(rep);
        showResult();
    }, 4000);
}

function showResult() {
    var result = [];
    var indexes = [];
    for (let i = 0; i < elems.length; i++) {
        const element = elems[i];
        
        if (element.style.display == "inline") {
            result.push(element);
            indexes.push(i % 3);
        }

        console.log(result);
    }

    console.log(indexes);
    
    setTimeout(() => {
        if(indexes[0] == indexes[1]){
            result[0].style.backgroundColor = "#ffff00";
            result[1].style.backgroundColor = "#ffff00";
        }
        else if (indexes[0] == 0 && indexes[1] == 1) {
            result[1].style.backgroundColor = "#00ff00";
        }
        else if (indexes[0] == 0 && indexes[1] == 2) {
            result[0].style.backgroundColor = "#00ff00";
        }
        else if (indexes[0] == 1 && indexes[1] == 0) {
            result[0].style.backgroundColor = "#00ff00";
        }
        else if (indexes[0] == 1 && indexes[1] == 2) {
            result[1].style.backgroundColor = "#00ff00";
        }
        else if (indexes[0] == 2 && indexes[1] == 0) {
            result[1].style.backgroundColor = "#00ff00";
        }
        else if (indexes[0] == 2 && indexes[1] == 1) {
            result[0].style.backgroundColor = "#00ff00";
        }
    }, 1000);

}

/**
 * Playes a lot of rounds
 */
function runALot() {
    let leftWon = 0;
    let rightWon = 0;
    let draw = 0;

    for (let i = 0; i < 1000000; i++) {
        let left = Math.floor(Math.random() * 3);
        let right = Math.floor(Math.random() * 3);
        
        // 0 - rock
        // 1 - paper
        // 2 - scissors

        if(left == right){
            draw++;
        }
        else if (left == 0 && right == 1) {
            rightWon++;
        }
        else if (left == 0 && right == 2) {
            leftWon++;
        }
        else if (left == 1 && right == 0) {
            leftWon++;
        }
        else if (left == 1 && right == 2) {
            rightWon++;
        }
        else if (left == 2 && right == 0) {
            rightWon++;
        }
        else if (left == 2 && right == 1) {
            leftWon++;
        }
    }

    console.log(`Left won ${leftWon}`);
    console.log(`Right won ${rightWon}`);
    console.log(`Draws ${draw}`);
}
