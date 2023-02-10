import React from 'react'
import { Link } from 'react-router-dom';
export const BlogBtn2 = ({ arrow, title, url }) => {
    return (
        <button>
            <Link to={url} className="bg-white inline-flex items-center group transition-all hover:text-tdf-blue-50  text-gray-700 capitalize font-medium text-base pr-4 leading-none">



                {title}
                {
                    arrow &&
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1 
    pt-0.5 transition-transform transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                }

            </Link>
        </button>
    )
}

BlogBtn2.defaultProps = {
    arrow: true
}
const BlogBtn = ({ arrow, title, url }) => {
    return (
        <button>
            <Link to={url} className="bg-white inline-flex items-center group transition-all hover:bg-tdf-blue-50 hover:border-tdf-blue-100 hover:text-white text-gray-700 capitalize font-medium text-base border border-solid border-gray-300 px-8 py-4 leading-none rounded-md " href="blog-details.html">

                {title}
                {
                    arrow &&
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1 
    pt-0.5 transition-transform transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                }

            </Link>
        </button>
    )
}

BlogBtn.defaultProps = {
    arrow: true
}

export default BlogBtn