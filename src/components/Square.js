import React from 'react';

const styling = {
    background: 'pink',
    fontSize: '45px',
    fontWeight: '700',
    border: '5px solid black',
    cursor: 'pointer',
    outline: 'none',
    padding: '40px'
}

const Square = ({value, onClick}) => 
     (
        <button style={styling} onClick={onClick} >
            {value}
        </button>
    )



export default Square;