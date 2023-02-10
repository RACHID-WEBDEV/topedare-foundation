import classNames from 'classnames'
import React from 'react'
import { Fade } from 'react-reveal'

const PagesIntro = ({ className, title }) => {
    return (
        <div className="relative mt-16 object-cover object-[83%] w-full h-full  bg-cover bg-center bg-section-bg-lg bg-overlay">

            <div className="relative bg-opacity-75 ">
                <svg xmlns="http://www.w3.org/2000/svg" className={classNames("absolute inset-x-0 bottom-0", className)} viewBox="0 0 1440 320"><path fill="currentColor" fillOpacity="1" d="M0,192L120,213.3C240,235,480,277,720,282.7C960,288,1200,256,1320,240L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" /></svg>

                <div className="relative px-4  mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                    <div className="py-16">
                        <div className="h-[150px] pb-16 lg:h-[330px] lg:py-10">
                            <Fade top>
                                <h1 className="text-center tracking-wider pt-10 md:leading-normal lg:text-[50px] text-4xl font-medium text-white" >{title}</h1>
                            </Fade>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

PagesIntro.defaultProps = {
    className: "text-white"
};

export default PagesIntro