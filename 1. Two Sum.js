
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
     let hashMap = new Map();

for(let i = 0; i < nums.length; i++){
    let neededNumber = target - nums[i];
    
    if(hashMap.has(neededNumber)){
        return[i, hashMap.get(neededNumber)];
    }
  
    hashMap.set(num[i], i);

}

}
    
};