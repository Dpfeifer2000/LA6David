Radiobutton1.onchange=function(){
  let RDButton = Radiobutton1.value
}

Select1.onchange=function(){
  let selectVal = Select1.value
}

Dropdown1.onclick=function(){
  let dropDwn = Dropdown1.value
}

buttonSubmit.onclick=function(){
  let RDButton = Radiobutton1.value
  let selectVal = Select1.value
  let dropDwn = Dropdown1.value
  let name1 = inputName.value
    lableOutput.value = (`${name} your favorite meal of the day is ${RDButton} and you like to eat ${selectVal} and ${dropDwn}.`)
    
}

