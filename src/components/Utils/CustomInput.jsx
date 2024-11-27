import React from 'react'
import './utils.css'
function CustomInput({icon, placeholder, type='text'}) {
  return (
    <div className="custom_inputs">
        <span>{icon}</span>
        <input type={type} placeholder={placeholder} />
    </div>
  )
}

export default CustomInput
