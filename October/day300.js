function containerWithMostWater(height) {
  let left = 0, right = height.length - 1, maxArea = 0;
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, area);
    if (height[left] < height[right]) left++;
    else right--;
  }
  return maxArea;
}

console.log(containerWithMostWater([1,8,6,2,5,4,8,3,7]));