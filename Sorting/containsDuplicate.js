/*https://leetcode.com/problems/contains-duplicate/description/?envType=problem-list-v2&envId=sorting*/

/*Given an integer array nums, 
    return true if any value appears at least twice in the array, 
    and return false if every element is distinct.*/

function duplicates(arr){
   //write a filter to find whether the duplciate data exist
   let duplicates = arr.filter((item,index,array)=>{
    return array.indexOf(item)!=index
   })
   return duplicates.length > 0

}
console.log(duplicates([1,6,7,3,3,3,2,2]))
console.log(duplicates([1,6,7,3,2]))