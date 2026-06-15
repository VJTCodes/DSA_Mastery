var shuffle = function(nums, n) {
    let result = [];
    
    let array1 = nums.slice(0, n);
    let array2 = nums.slice(n, nums.length);

    for (let i = 0; i <  n; i++) {
        
        result.push(array1[i]);
        if(array2[i] != undefined)
        result.push(array2[i]);
    }

    return result;
};
var result = shuffle([2,5,3,1,4,7],3)