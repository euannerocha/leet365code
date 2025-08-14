function reverseString(array &$s): void {
    $left = 0;
    $right = count($s) - 1;
    
    while ($left < $right) {
        $temp = $s[$left];
        $s[$left] = $s[$right];
        $s[$right] = $temp;
        
        $left++;
        $right--;
    }
}