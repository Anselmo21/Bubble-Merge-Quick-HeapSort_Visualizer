import React from 'react'; 
import ReactDOM from 'react-dom'
import ReactModal from "react-modal"

export default function RangeModal({hideModal}) { 
    const customStyles = { 
        content: { 
            top: "50%",
            left: "50%", 
            right: "auto", 
            bottom: "auto", 
            marginRight: "-50%",
            transform: "translate(-50%, 50%)"
        },
    };

    return (
        // Returns a PopUp Modal
        <ReactModal isOpen style = {customStyles}>
            <p>Modal content</p>
            <button onClick ={hideModal}>Save</button>
        </ReactModal>
    );
}