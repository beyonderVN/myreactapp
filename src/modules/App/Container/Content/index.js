import React from 'react'
import { connect } from 'react-redux'

const Content = ({ children }) => {
    return (
        <div className="main-content w3-row-padding">
            {children}
        </div>
    )
}

export default Content