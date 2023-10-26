

let buttonsEl = document.querySelectorAll("button");
let inputFieldEl = document.getElementById("result");

buttonsEl.forEach((button)=>{
    button.addEventListener("click", ()=>{
        let btnValue = button.textContent;
        if (btnValue ===  "C"){
            clearResult();
        } else if (btnValue ===  "="){
            calculateResult();
        } else if (btnValue ===  "%"){
            convertToPersent();
        } else{
            appendResult(btnValue);
        }
    })
})

function clearResult(){
    inputFieldEl.value = "";
};

function calculateResult(){
    if(inputFieldEl.value === ""){
        inputFieldEl.value = "";
    } else if(inputFieldEl.value === "/" || inputFieldEl.value === "*" || inputFieldEl.value === "-" || inputFieldEl.value === "+"){
        inputFieldEl.value = "bad expression";
    } else{
        inputFieldEl.value = eval(inputFieldEl.value);
    }
    
};

function convertToPersent(){
    if(inputFieldEl.value === ""){
        inputFieldEl.value = "% can't come first";
    } else{
        inputFieldEl.value = eval(inputFieldEl.value)/100;
    }
};

function appendResult(btnValue){
    inputFieldEl.value += btnValue;
};

// function hideText(){
//     setTimeout(()=>{

//     })
// }