
 var buttons=document.querySelectorAll("#num");
function displayValue(e){
    const value = e.target.dataset.value;
    var inp=document.querySelector(".enter");
    inp.value+=value;
    
}

buttons.forEach(button=>{
    button.addEventListener("click",displayValue)
})
var buttonops=document.querySelectorAll("#opb");
function appendOperator(operator) {
    var inp=document.querySelector(".enter");

    let lastChar = inp.value.slice(-1);
    
    if (inp.value === "" && operator !== "-") {
        return; 
    }

    else if ("+-*/".includes(lastChar)) {
        if (operator === "-" && lastChar !== "-") {
            inp.value += operator; 
        } else {
            inp.value = inp.value.slice(0, -1) + operator; 
        }
    } else {
        inp.value += operator; 
    }
}
buttonops.forEach(button=>{
    button.addEventListener("click",() => appendOperator(button.innerText)
)});
var re=document.getElementById("remove");
re.addEventListener("click",function(){
    var inp=document.querySelector(".enter");
    inp.value=" ";
    inp.focus();
})
var eqq=document.getElementById("equal");
eqq.addEventListener("click",function(){
    var inp=document.querySelector(".enter")
    try {
        inp.value = new Function('return ' + inp.value)(); // Safe eval
    } catch {
        inp.value = "Error";
    }
})
var reml=document.getElementById("rls");
reml.addEventListener("click",function(){
    var inp=document.querySelector(".enter");
    inp.value=inp.value.slice(0, -1);

})
var percentage=document.getElementById("pid");
percentage.addEventListener("click",function() {
    var inp=document.querySelector(".enter");
    try {
       
        let currentValue = new Function('return ' + inp.value)(); 
       inp.value = currentValue / 100;} 
    catch {
        inp.value = "Error"; 
    }
})
// var ad=document.querySelector(".add");
// ad.addEventListener("click",function{
    
// })

// var inp=document.querySelector(".enter");
// let lastOperator = ""; // To store the last operator used
// let lastValue = "";
// function handleOperator(operator) {
//     // Prevent consecutive operators
//     if (inp.value === "" && operator === "-") {
//         // If display is empty, allow a negative number to be entered
//         inp.value = "-";
//         return;
//     }

//     if (lastOperator !== "" && lastOperator !== operator) {
//         // If last operator was different, overwrite it
//         inp.value = inp.value.slice(0, -1) + operator;
//     } else if (lastOperator === "" || display.value === "") {
//         // If it's the first operator or display is empty, just add operator
//         inp.value += operator;
//     }
//     lastOperator = operator; // Update last operator to the current one
// }
// var operat=document.querySelectorAll("#opb");
// operat.forEach(button=>{
// addEventListener("click", handleOperator)
// })





