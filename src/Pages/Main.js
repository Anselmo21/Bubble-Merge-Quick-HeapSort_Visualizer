import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components'
import { Buttons } from '../components/header.style';

/**
 * Function that parses the array and carries on the algorithm 
 * @param {} param0 
 * @returns 
 */
export default function Main({currentIndex,data, nextIndex, currentSwaps}) { 
    const width = window.screen.width  / data.length
    //Return n # of pillars based on the passed range size
    return (

        <Container>
        <BlocksContainer>
        {/* For each data make a bar of a corresponding size.....(HEIGHT AND WEIGHT dynamic) */}
        {data.map((size,i) => (
            <>
            <Bar 
            height={`${size}px`} 
            width={`${width}px`} 
            key={i} 
            active = {currentIndex === i} 
            style={nextIndex === i ? {backgroundColor:'#33cc33'} : null} 

            >

                {/* Disable labels for aesthetic purposes..only display if the size of the array is < 50 entries   */}
                {data.length < 50 && <Buttons disabled>{size}</Buttons> }
            </Bar>
            </>
        ))} 
        
        </BlocksContainer> 
        <Step>
            <Buttons disabled> Made By Rafael Dolores</Buttons>
        </Step>
        </Container>
      
    );
}

//To contain the main section of the algorithm -> Background
const Container = styled.div`
    position: absolute; 
    bottom: 0; 
    width: 100%;

`;

//To contain the blocks and style them in rows 
const BlocksContainer = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: center; 
    align-items: flex-end; 

`;

const Step = styled.div`   
    display: flex; 
    justify-content: center;
    width: 100%; 
    height: 50px; 
    background-color: black;
    border: 1px solid white;
    `;


// To design the bars contained inside the Blocks container 
const Bar = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center; 
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => (props.active ? '#33cc33': 	'#0099cc') };
    margin-right: 2px; 
    margin-left: 2px; 
    ${props => props.style};
    
`;

