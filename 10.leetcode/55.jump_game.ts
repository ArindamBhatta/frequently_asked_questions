function canJumpBruteForce(nums: number[]): boolean {
    function canReach(index: number): boolean {
        // Base case: if we reach the last index, return true
        if (index >= nums.length - 1) {
            return true;
        }

        // Get the maximum jump length from the current position
        let maxJump = nums[index];

        // Try every possible jump from 1 to maxJump
        for (let jump = 1; jump <= maxJump; jump++) {
            if (canReach(index + jump)) {
                return true; // If any path leads to the last index, return true
            }
        }

        return false; // If no path leads to the last index, return false
    }

    return canReach(0); // Start from index 0
}

// Example usage
console.log(canJumpBruteForce([2, 3, 1, 1, 4])); // Output: true
console.log(canJumpBruteForce([3, 2, 1, 0, 4])); // Output: false
