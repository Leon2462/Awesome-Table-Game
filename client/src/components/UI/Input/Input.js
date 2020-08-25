import React from 'react'
import './Input.css'

const Input = props => {
    const type = props.type || 'text'
    return (
        <div className = "Input">
            <input
                value = {props.value}
                name = {props.name}
                placeholder = {props.placeholder}
                type = {type}
                onBlur = {props.onBlur}
            /> 
             {  props.valid === false && props.touched === true && props.error
                 ? <p>{props.error}</p>
                 : null
             }   
        </div>
    )
}

export default Input