async function GrowWord() {
    const txt = "clean code"
    let currInd = 0
    let movement = 1
    const element = document.getElementById("text")
    while (true){
        if (currInd === txt.length){
            movement = -1
        }
        if (currInd === 0){
            movement = 1
        }
        currInd += movement;
        element.innerText = txt.substring(0, currInd)
        await wait(250)

    }
}


function wait(num){
    return new Promise((res) => setTimeout(res, num))
}

GrowWord()