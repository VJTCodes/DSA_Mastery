/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
let mapArray = new Map();
let requiredTarget = target;
for(let i=0;i<nums.length;i++){
    requiredTarget = target - nums[i];
    if(mapArray.has(requiredTarget)){
        return [mapArray.get(requiredTarget),i]
    }
  mapArray.set(nums[i],i)
}
     return []; 
};
twoSum([1,2,3],5)
