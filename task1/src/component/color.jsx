import React, { useState } from 'react'

function Color() {
    const [isDarkTheme,setIsDarkTheme] = useState(false)

    const togglerThem = () =>{

        setIsDarkTheme(!isDarkTheme)
    }

    const stylecolor = {
        backgroundColor: isDarkTheme ? "black" : "white",
        height : '100vh',
    }
     
  return (
    <>
        <div style={stylecolor}>
        <button  style={stylecolor} onClick={togglerThem}>Switch</button>
        </div>

        

    </>
  )
}

export default Color