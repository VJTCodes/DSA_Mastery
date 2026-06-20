/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let iterate = 1;
    let result =[];
    for(let number of nums){
        //To find missed number.
        //How to find repeated number?
        console.log("before",number)
        if(number != iterate && number.indexOf(iterate) != iterate){
            result.push(iterate)          
            console.log(result)
        }
        
       
        iterate++;
       
    }
    console.log(result)
    return result

    
};