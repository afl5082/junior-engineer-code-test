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
 
function checkArrayKeys(object_keys){
    return object_keys.every(i => (i == 'type' || i == 'year' || i == 'value' ))
}

function isValid (input, expectedCost, expectedOldestYear) {
  
    if (typeof(expectedCost) != 'number' || expectedCost < 0) {
        console.log('Incorrect Input for ExpectedCost')
        return false
    }
    
    if (typeof(expectedOldestYear) != 'number' || expectedOldestYear < 0 || expectedOldestYear > 2023) {
        console.log('Incorrect Input for expectedOldestYear')
        return false
    }

    //validating input is an array 
    if (input.constructor.name != 'Array') {
        console.log('Incorrect Input Type for Vehicle List')
        return false
    }
    

    let sum_cost = 0 


    //loop over list of Vehicle objects
    for (i = 0; i < input.length ; i++){

        sum_cost += input[i].value

        let shape_length = Object.keys(input[i]).length
        let shape_keys = Object.keys(input[i])

        //testing shape(key attributes) and length of object Vehicle 
        if (shape_length != 3 || checkArrayKeys(shape_keys) == false) {
            console.log('Incorrect Keys in Vehicle Object')
            return false
        }

        //testing if year is less than expected oldest year
        //if expected 'oldest' year is 1990, should not have cars with years of 1989
        if (input[i].year < expectedOldestYear){
            console.log('Vehcile Year is too old')
            return false
        }

        if (typeof(input[i].type) != 'string'){
            console.log('Incorrect data type for Type in Vehicle Object')
            return false
        }

        if (typeof(input[i].year) != 'number'){
              //if time, add seperate check for sensible year
            console.log('Incorrect data type for Year in Vehicle Object')
            return false
        }

        if (typeof(input[i].value) != 'number'){
            console.log('Incorrect data type for value in Vehicle Object')
            return false
        }

    }

    if (sum_cost != expectedCost){
        console.log('Incorrect Sum of all Vehicles compared to Expected Cost')
        return false
    }
   
    return true
  }
  
  /**
   * Prompt: Implement a few tests to validate that your function works as expected
   */
  function testIsValid() {
    let validate_test1  = isValid(
        
        [{
         type: 'Truck',
         year: 1980,
         value: 1500
        }],
        1500,
        1980
        
        )
    console.log(validate_test1)
  }
  
  
  testIsValid()
  
   /**
   * If more time, would implement better logging for incorrect values 
   */
