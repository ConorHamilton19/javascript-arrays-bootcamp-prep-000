var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var list = [1]
  return [`${element}`, ...list]
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  var list = [1]
  return list.unshift(`${element}`)
}

function addElementToEndOfArray(array, element) {
  var list = [1]
  return [...list, `${element}`]
}

function destructivelyAddElementToEndOfArray(array, element) {
  var list = [1]
  return list.push(`${element}`)
}

function accessElementInArray(array,index) {
  var list = [1,2,3]
  return list[`${index}`]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  var list = [1,2,3]
  return list.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array 
}

function removeElementFromEndOfArray(array) {
  var list = [1,2,3]
  return list.slice(0, list.length - 1)
}