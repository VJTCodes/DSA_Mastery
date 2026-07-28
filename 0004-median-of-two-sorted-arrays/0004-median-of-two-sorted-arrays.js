/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
   let combinedArray = [...nums1,...nums2];
    combinedArray.sort((a, b) => a - b);
   if(combinedArray.length % 2 ==0)//If the length is even
   {
    let calculatMedian = (combinedArray[combinedArray.length / 2] +  combinedArray[(combinedArray.length / 2) - 1])/2
    return calculatMedian
   }
   else{
       let median =(combinedArray.length-1) /2
      
     let calculatMedian = (combinedArray[median] )
    return calculatMedian
   }
    
};
findMedianSortedArrays([1,2,9],[3,4,5,6,7,8,10])