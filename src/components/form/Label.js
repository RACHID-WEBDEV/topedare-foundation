import React from 'react'

const Label = ({ text, htmlFor, name }) => {
    return (
        <label htmlFor={htmlFor || name} className="font-display text-gray-700 mb-1 block text-lg">{text}<span className="text-red-500">*</span></label>
    )
}

export default Label