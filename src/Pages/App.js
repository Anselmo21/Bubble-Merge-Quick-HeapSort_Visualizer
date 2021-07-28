import React, {useEffect, useState} from 'react'; 

import Header from "../components/header";
import "./App.style.css"; 
import Main from './Main';
import {heap_root,merge,swap, sleep} from '../helpers/sort'

/**
 * Main Function used to run the website
 */

function App() {
  let initialTime, endTime, totalTime;

  const [size,setSize] = useState(5)
  const [currentTime,setCurrentTime] = useState(0); 


  //Hook to create an array of random values
  const [arr, setArr] = useState([])

  //Hook for the current index 
  const [currentIndex, setCurrentIndex] = useState(null)
  
  //Hook for the next entry in the iteration 
  const [currentNext, setCurrentNext] = useState(null)

  // Generate the random array(TO BE RAN IN THE BACKGROUND) -> Start with the initial value set for size(5) 
  useEffect(() => {
    updateList()
  }, [size]);  

   //Helper to update the list of data (User Specified)
   const updateList = () => { 

      //Credits: Stack OverFlow 
      //This portion generates an array of random elements based on some specified size
      const randomArr = Array.from({length: size}, () => 
      generateRandomInteger(100,500)
      );

      //Hooks the array into place
      setArr(randomArr)
  }

  //Helper to generate a random integer to fill up an array. Credits StackOverflow
  const generateRandomInteger = (min, max) => { 
    return Math.floor(min + Math.random() * (max + 1 - min))
  }

  //Changes the range of the array 
  const rangeChange = () => { 
    const range = prompt("How big do you want the graph to be? (Between 5-100)");
    if (range < 5 || range > 100) { 
      rangeChange() //Recursively prompt the user to put in a viable input 
    }
    else {
      setSize(range)
    }
  }; 

  //Helper to generate a random list 
  const generateRandomList = () => { 
    const listSize = generateRandomInteger(5,100)
    const randomArr = Array.from({length: listSize}, () => 
      generateRandomInteger(100,500)
      );
    setArr(randomArr)
  }

  //-------------------Bubble Sort Algorithm--------------------// 
  const executeBubbleSort = async() => {

    const len = arr.length; 
    for (let i = 0 ; i < len; i++) { 
  
      for (let j = 0; j < len; j++) { 
        setCurrentIndex(i)
        setCurrentNext(i+1)
        if (arr[j] > arr[j+1]) {   
          //setCurrentSwap1()
          //setCurrentSwap2()
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
       
         
        }
        setArr([...arr])
      }
      await sleep(500)

    }
    setCurrentIndex(null); 
    setCurrentNext(null)
  }

  //----------------Heap Sort Algorithm------------//
  const executeHeapSort = async() => {
       
        //Convenience Purpose 
        let n = arr.length;
 
        // build heap in top down manner(Start At the Last Entry) 
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--){
            
          //Invoke Helper 
            heapify(arr, n, i);
        }
 
        // One by one extract an element from the heap
        for (let i = n - 1; i > 0; i--) {
            // Move current root to end
            let temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
 
            // call max heapify on the reduced heap
            heapify(arr, i, 0);
            setArr([...arr])
            await sleep(500)
        }
        setCurrentIndex(null)
        setCurrentNext(null)
    }
    
    
    // To heapify a subtree rooted with node i which is
    // an index in arr[]. n is size of heap
    function heapify(arr, n, i) {
        setCurrentIndex(i)
        setCurrentNext(i - 1)
        let largest = i; // Initialize largest as root
        let l = 2 * i + 1; // left subtree = 2*i + 1 (Nndriy's formula)
        let r = 2 * i + 2; // right subtree = 2*i + 2 (Andriy's formula)
 
        // If left child is larger than root
        if (l < n && arr[l] > arr[largest])
            largest = l;
 
        // If right child is larger than largest so far
        if (r < n && arr[r] > arr[largest])
            largest = r;
 
        // If largest is not root
        if (largest != i) {
            let swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;
 
            // Recursively heapify the affected sub-tree
            heapify(arr, n, largest);
            
        }
    }
  
    //----------------Iterative Merge Sort-------------//
    const executeMergeSort = async () => { 

      //Create two arrays for sorting
      let sorted = Array.from(arr);
      let n = sorted.length;

      let buffer = new Array(n);
  
      for (let size = 1; size < n; size *= 2) {
        for (let leftStart = 0; leftStart < n; leftStart += 2*size) {
        setCurrentIndex(leftStart)
        setCurrentNext(leftStart + 2 * size)
        //Get the two sub arrays
        let left = leftStart,
        right = Math.min(left + size, n),
        leftLimit = right,
        rightLimit = Math.min(right + size, n);
        await sleep(500)
      //Merge the sub arrays
      merge(left, right, leftLimit, rightLimit, sorted, buffer);  
     
      }
    setCurrentIndex(size)
    setCurrentNext(size * 2)
    //Swap the sorted sub array and merge them
    let temp = sorted;
    sorted = buffer;
    buffer = temp;
    
  }
  
  setCurrentIndex(null)
  setCurrentNext(null)
  setArr([...sorted]);
}
    //Helper 
    const merge =  async(left, right, leftLimit, rightLimit, sorted, buffer) => {
     
      let i = left;
      //Compare the two sub arrays and merge them in the sorted order
      while (left < leftLimit && right < rightLimit) {
        if (sorted[left] <= sorted[right]) {
          buffer[i++] = sorted[left++];
        } else {
          buffer[i++] = sorted[right++];
        }
      }
    
      //If there are elements in the left sub arrray then add it to the result
      while (left < leftLimit) {
        buffer[i++] = sorted[left++];
      }
    
      //If there are elements in the right sub array then add it to the result
      while (right < rightLimit) {
        buffer[i++] = sorted[right++];
      }
     
    }

      
  //--------------------Quick Sort Algorithm-------------------// 
  const swap = (arr, left, right) =>  {
    const temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp;
  }
  
  const partitionHigh = (arr, low, high) => {
    //Pick the first element as pivot
    let pivot = arr[high];
    let i = low;
    
    //Partition the array into two parts using the pivot
    for(let j = low; j < high; j++){
      setCurrentIndex(j)
      setCurrentNext(j+1)
      if(arr[j] <= pivot){      
        swap(arr, i, j);
        i++;
      }
    }
    
    swap(arr, i, high);
    
    //Return the pivot index
    return i;
  }
  
  const executeQuickSort = async () => {
    //Stack for storing start and end index
    let stack = [];
    
    //Get the start and end index
    let start = 0;
    let end = arr.length - 1;
    
    //Push start and end index in the stack
    stack.push({x: start, y: end});
    
    //Iterate the stack
    while(stack.length){
      //Get the start and end from the stack
      const { x, y } = stack.shift();
      
      //Partition the array along the pivot
      const PI = partitionHigh(arr, x, y);
      
      //Push sub array with less elements than pivot into the stack
      if(PI - 1 > x){
        stack.push({x: x, y: PI - 1});
      }
      
      //Push sub array with greater elements than pivot into the stack
      if(PI + 1 < y){
        stack.push({x: PI + 1, y: y});
      }
      await sleep(500)
    }
    setArr([...arr])
  }



  //Render the main page
  return (
    <div className = "App"> 
      <Header rangeChange={rangeChange} 
      randomList = {generateRandomList} 
      initiateBubbleSort = {executeBubbleSort} 
      initiateHeapSort = {executeHeapSort} 
      initiateMergeSort = {executeMergeSort}
      initiateQuickSort = {executeQuickSort}
      />
      <Main data={arr} currentIndex = {currentIndex} nextIndex={currentNext}/>
    </div>
   
  );
}

export default App;