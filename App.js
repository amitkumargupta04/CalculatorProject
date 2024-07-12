let curValue = '';
document.querySelector("#display-con").value = curValue;

let btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", function(){
    curValue = curValue+1;
    document.querySelector("#display-con").value = curValue; 
});

let btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", function(){
    curValue = curValue + '2';
    document.querySelector("#display-con").value = curValue;
})
let btn3 = document.querySelector(".btn3");
btn3.addEventListener("click", function(){
    curValue = curValue + 3;
    document.querySelector("#display-con").value = curValue;
})
let btn4 = document.querySelector(".btn4");
btn4.addEventListener("click", function(){
    curValue = curValue + 4;
    document.querySelector("#display-con").value = curValue;
})
let btn5 = document.querySelector(".btn5");
btn5.addEventListener("click", function(){
    curValue = curValue + 5;
    document.querySelector("#display-con").value = curValue;
})
let btn6 = document.querySelector(".btn6");
btn6.addEventListener("click", function(){
    curValue = curValue + 6;
    document.querySelector("#display-con").value = curValue;
})
let btn7 = document.querySelector(".btn7");
btn7.addEventListener("click", function(){
    curValue = curValue + 7;
    document.querySelector("#display-con").value = curValue;
})
let btn8 = document.querySelector(".btn8");
btn8.addEventListener("click", function(){
    curValue = curValue + 8;
    document.querySelector("#display-con").value = curValue;
})
let btn9 = document.querySelector(".btn9");
btn9.addEventListener("click", function(){
    curValue = curValue + 9;
    document.querySelector("#display-con").value = curValue;
})
let btn0 = document.querySelector(".btnZero");
btn0.addEventListener("click", function(){
    curValue = curValue + 0;
    document.querySelector("#display-con").value = curValue;
})
let btnDort = document.querySelector(".btnDort");
btnDort.addEventListener("click", function(){
    curValue = curValue + '.';
    document.querySelector("#display-con").value = curValue;
})

let btnPlus = document.querySelector(".btnPlus");
btnPlus.addEventListener("click", function(){
    curValue = curValue + '+';
    document.querySelector("#display-con").value = curValue;
})
let btnMul = document.querySelector(".btnMul");
btnMul.addEventListener("click", function(){
    curValue = curValue + '*';
    document.querySelector("#display-con").value = curValue;
})
let btnSub = document.querySelector(".btnSub");
btnSub.addEventListener("click", function(){
    curValue = curValue + '-';
    document.querySelector("#display-con").value = curValue;
})
let btnDiv = document.querySelector(".btnDiv");
btnDiv.addEventListener("click", function(){
    curValue = curValue + '/';
    document.querySelector("#display-con").value = curValue;
})

let btnC = document.querySelector(".btnC");
btnC.addEventListener("click", function(){
    curValue = '';
    document.querySelector("#display-con").value = curValue;

})

let btnEqual = document.querySelector(".btnEqual");
btnEqual.addEventListener("click", function(){
    let result = eval(curValue);
    curValue = result;
    document.querySelector("#display-con").value = curValue;

})