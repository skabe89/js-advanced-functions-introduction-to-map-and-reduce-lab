// Your code here
let mapToNegativize = function(sourceArray){
  let newArray = []
  for(let i = 0; i < sourceArray.length; i++){
    newArray.push(sourceArray[i] * -1)
  }
  return newArray
}

let mapToNoChange = function(sourceArray){
  let newArray = []
  for(let i = 0; i < sourceArray.length; i++){
    newArray.push(sourceArray[i] * -1)
  }
  return sourceArray
}

let mapToDouble = function(sourceArray){
  let newArray = []
  for(let i = 0; i < sourceArray.length; i++){
    newArray.push(sourceArray[i] * 2)
  }
  return newArray
}

let mapToSquare = function(sourceArray){
  let newArray = []
  for(let i = 0; i < sourceArray.length; i++){
    newArray.push(sourceArray[i] * sourceArray[i])
  }
  return newArray
}

let reduceToTotal = function(sourceArray, start = 0){
  let running = start
  for(let i = 0; i < sourceArray.length; i++){
    running = running + sourceArray[i]
  }
  return running
}

let reduceToAllTrue = function(sourceArray){
  let value = true
  for(let i = 0; i < sourceArray.length; i ++){
    if (sourceArray[i] == false){
      value = false
    }
  }
  return value
}

let reduceToAnyTrue = function(sourceArray){
  let value = false
  for(let i = 0; i < sourceArray.length; i ++){
    if (sourceArray[i] == true){
      value = true
    }
  }
  return value
}