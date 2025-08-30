import React from 'react'
import { useState } from 'react'

const Inputarea = (props) => {
    const [inputText,setInputText] = useState("")

    const handleChange =(event)=>{
            setInputText(event.target.value)
    }
  return (
    <div className='form'>
        <input type='text' onChange={handleChange} value={inputText}/>
        <button onClick={()=>{
            {inputText.trim() !="" ? 
                props.addItems(inputText)
                : "add items"}
            
            setInputText("")
        }}>
            <span>Add</span>
        </button>
      
    </div>
  )
}

export default Inputarea
