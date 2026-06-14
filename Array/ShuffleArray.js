//Shuffle the given Array 
//Input: nums = [1,2,3,4,5,6]
//Output: [1,4,2,5,3,6]
//https://leetcode.com/problems/shuffle-the-array/?envType=problem-list-v2&envId=dsa-linear-shoal-array-i

var shuffleArray = function (nums){
    let result = [];
    let midIndex = Math.floor(nums.length/2);
    let array1 = nums.slice(0,midIndex);
    let array2 = nums.slice(midIndex);

    

    for(let i=0; i< array1.length;i++){
        result.push(array1[i]);
        
        result.push(array2[i]);
        
    }
    
    return result;
}

var result = shuffleArray([1,2,3,4,5,6]);
console.log(result);