import React from 'react'

const SectionTitle = ({ title }) => {
    return (
        <div className="flex items-center space-x-20 mb-5">
            <span className="border border-gray-500 w-14 absolute" />
            <p className="text-gray-500 tracking-wide uppercase font-black text-base">{title}</p>
        </div>
    )
}

export default SectionTitle