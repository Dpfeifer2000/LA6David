
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

button1.onclick=function(){
  let name = Input1.value
  members.push(name)
    lableOutput.value = (`${name} you have a membership`)
}

button2.onclick=function(){
  let name = Input1.value
    members.push(name)
    lableOutput.value = (`${name} you do not have a membership`)
    
}

