import classNames from 'classnames'
import React from 'react'

const SectionSubTitle = ({ subTitle, className }) => {
    return (
        <h1 className={classNames("text-gray-800 mb-6 text-3xl lg:text-4xl ", className)}>
            {subTitle}
        </h1>
    )
}

export default SectionSubTitle