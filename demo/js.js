function countingSort(array) {
    　　var len = array.length,
    　　B = [],
    　　C = [],
    　　min = max = array[0];
    　　for (var i = 0; i < len; i++) {
    　　　　min = min <= array[i]="" ?="" min="" :="" array[i];="" 　　　　max="max">= array[i] ? max : array[i];
    　　　　C[array[i]] = C[array[i]] ? C[array[i]] + 1 : 1;
    　　}
    　　for (var k = 0; k </=>