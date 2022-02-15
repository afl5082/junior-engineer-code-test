/**
 * Prompt: Implement a function that validates that the input Vehicles have the
 * following shape and all numbers will be sensible integers.
 * 
 * interface Vehicle {
 *   type: 'Truck' | 'Trailer' | 'Tractor'
 *   year: number
 *   value: number
 * }
 * 
 * @param {Vehicle[]} input 
 * @param {number} expectedCost The expected sum cost of all vehicles passed in
 * @param {number} expectedOldestYear The expected minimum year of all vehicles passed in
 * @return {boolean} A boolean indicating whether input matches expected{Cost,Year}
 */
 
 function checkArray(array){
  return array.every(i => (typeof i == 'string'))
}

function isValid (input, expectedCost, expectedOldestYear) {

  if (typeof(expectedCost) != 'number' || expectedCost < 0) {
      console.log('Incorrect Input for Cost')
      return false
  }
  
  if (typeof(expectedOldestYear) != 'number' || expectedOldestYear < 0 || expectedOldestYear > 2023) {
      console.log('Incorrect Input for Year')
      return false
  }
  if (input.constructor.name != 'Array' || checkArray(input) == false) {
      console.log('Incorrect Input for Vehicle')
      return false
  }
 
  return true
}

/**
 * Prompt: Implement a few tests to validate that your function works as expected
 */
function testIsValid() {
  let validate_test1  = isValid(['Truck','Trailer','Tractor'],45,2500)
  console.log(validate_test1)

  let validate_test2  = isValid('a string',1500,'a string')
  console.log(validate_test2)

  let validate_test3  = isValid([50,70,50],1500,1980)
  console.log(validate_test3)

  let validate_test4  = isValid(['Truck','Trailer','Tractor'],1500,1980)
  console.log(validate_test4)
}


testIsValid()

 /**
 * If more time, would implement better logging for incorrect values 
 */