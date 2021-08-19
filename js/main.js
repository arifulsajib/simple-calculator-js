function getHistory() {
    return document.getElementById("history").innerText;
}

function setHistory(num) {
    document.getElementById("history").innerText = num;
}

function getFinalResult() {
    return document.getElementById("final-result").innerText;
}

function setFinalResult(num) {
    document.getElementById("final-result").innerText = num;
}

// operators click handler
let operators = document.getElementsByClassName("operator");
for (let i = 0; i < operators.length; i++) {
    // console.log(operators[i].id);
    operators[i].addEventListener("click", function () {
        if (operators[i].id == "clear") {
            setHistory("");
            setFinalResult("");
        } else if (operators[i].id == "back") {
            let finalResult = getFinalResult();
            if (finalResult) { //if finalResult have a value
                finalResult = finalResult.substr(0, finalResult.length - 1) //remove last number
                setFinalResult(finalResult);
            }
        } else {
            let finalResult = getFinalResult();
            let history = getHistory();
            if (finalResult != "") {
                history += finalResult;

                if (operators[i].id == "=") {
                    let temp = finalResult;
                    finalResult = eval(history);
                    setFinalResult(finalResult);

                    setHistory(history);
                } else {
                    history += operators[i].id; //add + - * / in the history display
                    setHistory(history);
                    setFinalResult("");
                }
            }
        }
    });
}

// Numbers click handler
let numbers = document.getElementsByClassName("number");
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
        let finalResult = getFinalResult();
        finalResult += numbers[i].id;
        setFinalResult(finalResult);
    });
}