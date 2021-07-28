// Arrow Function to provide delay and buffers to each sorting algorithm
export const sleep =  (milliseconds) => { 
    return new Promise((resolve) => setTimeout(resolve,milliseconds));

}

//--------------Heap Sort Helpers----------------//

/**
 * Helper function to swap the values of two entries 
 *  
 */

 let array_length;

export function swap(input, index_A, index_B) {
  let temp = input[index_A];

  input[index_A] = input[index_B];
  input[index_B] = temp;
}


/**
 * Helper to reach the root(leaf) of the heap 
 *
 */

export function heap_root(input, i) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let max = i;

  if (left < array_length && input[left] > input[max]) {
      max = left;
  }

  if (right < array_length && input[right] > input[max])     {
      max = right;
  }

  if (max != i) {
      swap(input, i, max);
      heap_root(input, max);
  }
}

/**
 * Helper function for Merge Sort
 * @param {*} left array in the LHS 
 * @param {*} right array in the RHS 
 */
export function merge(left, right) { 
  let arr = []
  
  // Break out of the loop if any of the arrays become empty 
  while (left.length && right.length) { 
    if (left[0] < right[0]) { 
      arr.push(left.shift())
    }
    else {
       arr.push(right.shift())
    }
  }

  return [...arr,...left,...right]
} 