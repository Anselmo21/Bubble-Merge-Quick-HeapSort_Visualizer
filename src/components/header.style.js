import styled from 'styled-components'


//Button configurations
export const Buttons = styled.p`
    color: #fff;
    &:hover { 
        color: ${props => props.disabled ? 'white' :'#0099cc'};
    }
    cursor: ${props => props.disabled ? 'cursor' : 'pointer'};
    font-size: 16.5px;
    font-family: Arial, Helvetica, sans-serif
    text-align: center;
    line-height: 20px;
    margin-bottom: 10px;
  
`;

//styled-div creates a React component, which renders an HTML tag corresponding to the property in the styled div
//Renders a black rectangle, with contents being assembled into a row 
export const Wrapper = styled.div`
    display:flex;
    flex-direction: row; 
    justify-content: space-around;
    align-content: centre; 
    width: 100%;
    background-color: black;
    padding-left: 25px; 
    padding-right: 25px;

`;


//Separate Styling for SortWrapper 
export const SortWrapper = styled.div`
    display:flex; 
    width: 300px;
    flex-direction: row; 
    align-content: center; 
    justify-content: space-evenly;
`;

export const RangeWrapper = styled.div`
    width: 300px;
    align-content: center; 
    justify-content: space-evenly;
    margin-top: 15px;
`;