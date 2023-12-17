function addTwoDigits(nums: number): number{
    const nuns = nums.toString().split('');

    return parseInt(nums[0]) + parseInt(nums[1])
}

console.log(addTwoDigits(73))