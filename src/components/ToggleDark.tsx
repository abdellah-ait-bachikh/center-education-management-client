import React, { useState } from 'react'

const ToggleDark = () => {
    const [theme,setTheme] = useState("light")
    
  return (
    <div className='underline'>ToggleDark</div>
  )
}

export default ToggleDark