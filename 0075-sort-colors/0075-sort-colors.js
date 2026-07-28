/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 //Answer is in Bubble sort
var sortColors = function(nums) {
    let swapped = false;
    for(let i=0;i<nums.length;i++){
        swapped = false;
        for(let j=0;j<nums.length-i-1;j++){
            if(nums[j]>nums[j+1]){
                [nums[j],nums[j+1]] = [nums[j+1],nums[j]]
                swapped = true;
            }
           
        }
        if(swapped == false)
        break;

    }
    return nums;
    
};