import React from 'react'
import './Layout.css'

export const Layout = (props) => {
    return (
        <div className = "Layout">
            {props.children}
        </div>
    )
}