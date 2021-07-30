let plus = document.getElementById("plus");
let Min = document.getElementById("Min");
let fnumber = document.getElementById("fnumber");
let snumber = document.getElementById("snumber");
let currentnumber = 0 ;
let mode = "";

plus.onclick = function (){
    currentnumber += +fnumber.value
    fnumber.value = ""  ;
    mode = "+"; 
}
Min.onclick = function (){
    currentnumber += +fnumber.value
    fnumber.value = ""  ;
    mode = "-"; 
}
equ.onclick  = function (){
    if (mode == "+"){
    lastnumber = fnumber.value;
    fnumber.value = +currentnumber  + +lastnumber;
    }
     if (mode == "-"){
         lastnumber = fnumber.value;
    fnumber.value = +currentnumber  - +lastnumber;
    
    }
}
C.onclick = function () {
    currentnumber = 0; 
    fnumber.value = ""  ;

}
one.onclick = function (){
    fnumber.value += "1"  ;
}
two.onclick = function (){
    fnumber.value += "2"  ;
}
three.onclick = function (){
    fnumber.value += "3"  ;
}
four.onclick = function (){
    fnumber.value += "4"  ;
}
five.onclick = function (){
    fnumber.value += "5"  ;
}
six.onclick = function (){
    fnumber.value += "6"  ;
}
seven.onclick = function (){
    fnumber.value += "7"  ;
}
eight.onclick = function (){
    fnumber.value += "8"  ;
}
nine.onclick = function (){
    fnumber.value += "9"  ;
}

zero.onclick = function (){
    fnumber.value += "0"  ;
}

