function subarraySum(nums, k) {
    const prefixSumMap = new Map();
    prefixSumMap.set(0,1);
    let count = 0;
    let prefix = 0;
    for (let num of nums) {
        prefix += num;
        const complement = prefix-k;
        if (prefixSumMap.has(complement)) count += prefixSumMap.get(complement);
        prefixSumMap.set(prefix, (prefixSumMap.get(prefix) || 0) + 1);
    }
    return count;
};