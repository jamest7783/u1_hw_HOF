// You must RETURN your result in each function!

function printNums(nums) {
  let newArr = []
  nums.forEach( item => newArr.push(item) )
  return newArr
}

function returnSums(nums) {
  let newArr = []
  nums.forEach( item => newArr.push(item+nums.indexOf(item)) )
  return newArr
}

function returnTotal(objs) {
  total = 0
  objs.forEach( item => total+=item.n )
  return total
}

function printMoney(decimals) {
  return decimals.map( item => `$${parseFloat(item).toFixed(2)}` )
}

function returnAllTrueValues(values) {
  return values.filter( item => item['happy']===true)
}

function addTwo(nums) {
  return nums.reduce(( base,value ) => {
    return base + value + 2
  },0)
}

function joinStrings(strings) {
  return strings.reduce(( base,value ) => {
    return base.concat(value)
  },'') 
}

//Bonus
function sortObjectsByValue(objs) {
  return objs.sort( ( a, b ) => a.value - b.value )
}

module.exports = {
  printNums,
  returnSums,
  returnTotal,
  printMoney,
  returnAllTrueValues,
  sortObjectsByValue,
  addTwo,
  joinStrings
}
