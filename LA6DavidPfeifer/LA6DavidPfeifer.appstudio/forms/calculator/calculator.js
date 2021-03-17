num1 = enterNumber1.value 
num2 = enterNumber2.value 

buttonMultiply.onclick=function(){
  let multiplyCalc = num1 * num2
    lableCalc.value = (`${multiplyCalc}`)
}

buttonAdd.onclick=function(){
  let addCalc = num1 + num2
   lableCalc.value = (`${addCalc}`)
}

buttonClear.onclick=function(){
    lableCalc.textContent = ""
}
  

