import React from 'react'

function Header(){
    const headerStyle ={
        margin: '2% 10%',
        textAlign: 'center',
        border: '1px solid #cccccc', 
        borderTopLeftRadius: '7px',
        borderTopRightRadius: '7px',
        padding: '20px'
    }
    return(
        <div style={headerStyle}>
            <h1>React Calculator....</h1>
        </div>
    )
}

export default Header