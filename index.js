let length = array.length;
let swapOccurred = false;
let temp, array1, array2;

if (length < 2) { return array;}

// If odd, split array unevenly
if (!(length % 2)) {
    array1 = array.splice(0, length/2);
    array2 = array;
// If even, split array evenly
} else {
    array1 = array.splice(0, Math.round(length/2))
    array2 = array;
}

// Sort each array
array1.forEach(function(item, i, arr) {
    if (arr[i] > arr[i + 1]) {
        swapOccurred = true;
        temp = item;
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
});
array2.forEach(function(item, i, arr) {
    if (arr[i] > arr[i + 1]) {
        swapOccurred = true;
        temp = item;
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
});

// Consolidate arrays
array2.forEach(function(currentValue) { array1.push(currentValue);});


if (swapOccurred) { // If swap occurred, sort list again
    return mergeSort(array1);
} else { // If no swap occurred, sort merged list
    array1.forEach(function(item, i, arr) {
        if (arr[i] > arr[i + 1]) {
            swapOccurred = true;
            temp = item;
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    });
    if (swapOccurred) { // If swap occurred, sort list again
        return mergeSort(array1);
    } else { // If no swap occurred, return sorted list
        return array1;
    }
}
