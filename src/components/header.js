import React from 'react'; 
import {Buttons,Wrapper, SortWrapper, RangeWrapper} from "./header.style"

export default function Header({rangeChange, randomList, initiateBubbleSort, initiateHeapSort, initiateMergeSort, initiateQuickSort}) { 
    
 
    
    return( 
        <Wrapper>
            <Buttons disabled> Sorting Visualizer</Buttons>
            <Buttons onClick = {randomList}> Generate Random List</Buttons>
            <Buttons onClick = {rangeChange}> Change Size</Buttons>
            <Buttons onClick = {initiateHeapSort}> Heap Sort</Buttons>
            <Buttons onClick = {initiateBubbleSort}> Bubble Sort</Buttons>
            <Buttons onClick = {initiateMergeSort}> Merge Sort</Buttons>
            <Buttons onClick = {initiateQuickSort}> Quick Sort</Buttons>
        </Wrapper>
        )
}