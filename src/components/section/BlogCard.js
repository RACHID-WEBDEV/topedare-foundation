import React from 'react'
import { Link } from 'react-router-dom'
import BlogBtn from '../form/BlogBtn'

const BlogCard = ({ blogImg, comments, description, date, title, url }) => {
    return (
        <div className="w-full px-2 my-4">
            <div className="border border-solid border-gray-300 p-3 rounded-lg md:p-5 group">
                <div className="mb-6">
                    <Link to={url} className="overflow-hidden rounded-md block">
                        <img className="transform group-hover:scale-110 h-60 rounded-md transition-transform duration-500 w-full" src={blogImg} alt="blog" />
                    </Link>
                </div>
                <h3>
                    <Link to={url} className="block text-2xl md:text-md hover:text-tdf-blue-50 transition-all font-bold text-gray-800 pb-[10px] leading-[1.3] two-row-paragraph ">{title}</Link></h3>

                <p className="font-normal text-lg text-gray-600  three-row-paragraph ">{description}</p>
                <div className="pt-4 mb-6 text-gray-400">
                    <ul className="flex flex-wrap items-center  ">
                        <li className="text-sm">
                            <p className="text-sm text-dark transition-all">{date}</p>
                        </li>
                        <span className="inline-block mx-2">\</span>
                        <li className="text-sm">
                            <p className="text-sm text-dark transition-all">{comments} comments</p>
                        </li>
                    </ul>
                </div>
                <BlogBtn title="Blog details" url="/blog-details" />


            </div>
        </div>
    )
}

export default BlogCard