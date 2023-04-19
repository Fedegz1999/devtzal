import React from "react"
import './Modal.css'

interface Props {
    children: React.ReactNode
}

export default function Modal ({children}:Props) {
    return (
        <div className="modalContainer">
            <div className="modalBody">
        {children}
        </div>
        </div>
    )
}