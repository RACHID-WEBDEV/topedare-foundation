import React from 'react'
import { LoveIcon } from './../../assets/svgsIcons';

const SupportBtn = ({ title }) => {
    return (
        <button type="button" className="text-white bg-tdf-blue-50 hover:bg-tdf-blue-100 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center">
            {title}
            <span className="ml-2 -mr-1">
                <LoveIcon className=" w-4 h-4" />
            </span>
        </button>
    )
}

export default SupportBtn