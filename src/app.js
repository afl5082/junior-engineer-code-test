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
 
//check keys contain type, year, value
function checkArrayKeys(object_keys){
    return object_keys.every(i => (i == 'type' || i == 'year' || i == 'value' ))
}

function isValid (input, expectedCost, expectedOldestYear) {
  
    if (typeof(expectedCost) != 'number' || expectedCost < 0) {
        console.log('Incorrect Input for ExpectedCost')
        return false
    }
    
    if (typeof(expectedOldestYear) != 'number' || expectedOldestYear < 1850 || expectedOldestYear > 2023) {
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

        if (typeof(input[i].year) != 'number' || input[i].year > 2023 || input[i].year < 1850 ){
            console.log('Incorrect input for Year in Vehicle Object')
            return false
        }

        if (typeof(input[i].value) != 'number' || input[i].value < 0 ){
            console.log('Incorrect input for Value in Vehicle Object')
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
  
  //
  function testIsValid() {
    
    
    //Valid entries -- return true
    let validate_test1  = isValid(
        [
            {
            type: 'Truck',
            year: 1980,
            value: 1500
            },
            {
            type: 'Trailer',
            year: 2000,
            value: 1500
            },
        ],
        3000,
        1980
        
        )
    console.log(validate_test1)

    //expectedCost is not equal to sum -- return false    
    let validate_test2  = isValid(
        [
            {
            type: 'Truck',
            year: 1980,
            value: 1500
            },
            {
            type: 'Trailer',
            year: 2000,
            value: 1600
            },
        ],
        3000,
        1980
        
        )
    console.log(validate_test2)
    
    //Vehicle is too old -- return false
    let validate_test3 = isValid(
    [
        {
        type: 'Truck',
        year: 1975,
        value: 1500
       }
    ],
    1500,
    1980
       
       )
   console.log(validate_test3)


    //Vehicle type, datatype is a number -- return false
    let validate_test4 = isValid(
    [
        {
        type: 50,
        year: 1991,
        value: 1500
       }
    ],
    1500,
    1980
       
       )
   console.log(validate_test4)

    //incorrect, extra key value (color) in Vehicle object -- return false
    let validate_test5 = isValid(
    [
        {
        type: 50,
        year: 1991,
        value: 1500,
        color: 'red'
       }
    ],
    1500,
    1980
       
       )
   console.log(validate_test5)


    //unsensible year (in future) in Vehicle object -- return false
    let validate_test6 = isValid(
    [
        {
        type: 'Tractor',
        year: 2050,
        value: 1500
       }
    ],
    1500,
    1980
       
       )
   console.log(validate_test6)


    //unsensible negative value in Vehicle object -- return false
    let validate_test7 = isValid(
    [
        {
        type: 'Tractor',
        year: 2011,
        value: -1500
       }
    ],
    1500,
    1980
       
       )
   console.log(validate_test7)
  


}
  
  
testIsValid()
  
/**
* If more time, would implement better logging for incorrect values 
 */
