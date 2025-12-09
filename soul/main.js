let dialpad=document.querySelector(".dialpad");
let display=document.getElementById("display");

// TO fetch the digits clicked -------->
let digits=document.getElementsByClassName("digits");
for(let btn of digits){
    btn.addEventListener("click", ()=>{
        display.value+=btn.innerText;
        console.log(btn.innerText+"is clicked");
    })
}

// To fetch the operation to be performed ------>
let operators=document.getElementsByClassName("operators");
for(let btn of operators){
    btn.addEventListener("click", ()=>{
        display.value+=btn.innerHTML;
        console.log(btn.innerText+"is clicked");
    })
}

let dot=document.getElementsByClassName("dotOperator");
// console.log(dot);
dot.addEventListener("click", ()=>{
    display.value+=("0"+dot.innerText);
    console.log(dot.innerText+"is clicked");
})


// To clear all the input on clicking off AC(All clear) button ------>
let allClear=document.getElementById("delete");
allClear.addEventListener("click", ()=>{
    display.value="";
    console.log("clicked AC");
});


