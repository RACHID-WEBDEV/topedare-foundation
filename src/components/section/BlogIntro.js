import React from 'react'
import { Link } from 'react-router-dom';
import SectionSubTitle from './SectionSubTitle';
import Button from '../form/Button';
import { Fade } from 'react-reveal';
// import blogdata from '../../data/blog';
import { kebabCase } from '../../utils/utils'
import useSWR from 'swr';
import parse from "html-react-parser";
const _config = require("../../config.json")

export const LargeBlogcard = ({ blogPhoto, category, short_desc, title, }) => (
    <div className="lg:w-6/12 group">
        <Link to={`/blog/${kebabCase(title)}`}>
            <div className="relative overflow-hidden rounded-md w-full max-h-96 h-80 ">
                <img className="transform group-hover:scale-110 w-full h-full rounded-xl mb-6 transition-transform duration-500" src={blogPhoto} alt="blog" />
                <span className="bg-yellow-300 absolute bottom-2 left-2 text-darken text-xs font-semibold px-4 py-1 uppercase  rounded-full">{category}</span>
            </div>
        </Link>
        <Link to={`/blog/${kebabCase(title)}`}>
            <h1 className="text-gray-900 font-bold my-3 capitalize lg:mt-4 font-DmSans text-xl lg:text-2xl two-row-paragraph">{title}</h1>

        </Link>
        <p className="text-gray-600 text-base lg:text-xl mb-3  two-row-paragraph">{short_desc}</p>
        <Link to={`/blog/${kebabCase(title)}`} className="underline">Read more</Link>
    </div>
)

export const SmallBlogcard = ({ blogPhoto, category, id, short_desc, title, slug }) => (
    <div className="lg:pb-4">
        <div className="flex space-x-5 ">
            <div className="w-6/12 lg:w-4/12">
                <div className="relative group">
                    <Link to={`/blog/${kebabCase(title)}`}>
                        <div className="relative overflow-hidden rounded-md max-w-[200px] max-h-32 lg:max-h-40 ">
                            <img className="transform group-hover:scale-110 w-full h-full min-h-[128px] lg:min-h-[160px] rounded-xl mb-6 transition-transform duration-500" src={blogPhoto} alt="blog" />
                            <span className="bg-yellow-300 absolute bottom-2 right-2 text-darken text-xs font-semibold px-4 py-1 uppercase  rounded-full">{category}</span>
                        </div>
                    </Link>

                </div>
            </div>
            <div className="w-8/12">
                <Link to={`/blog/${kebabCase(title)}`}>
                    <h1 className="text-gray-800 font-DmSans capitalize text-xl font-bold two-row-paragraph">{title}</h1>
                </Link>
                <div className="text-gray-500 my-1 text-sm lg:text-xl excerpt three-row-paragraph">{short_desc}</div>
            </div>
        </div>
    </div>
)

const BlogIntro = () => {
    const { data, error } = useSWR(`${_config.REACT_APP_BASE_URL}public/content/posts?user=${_config.REACT_APP_USER_lOGIN_ID}`)

    if (error) console.log(error)

    const introablogData = data?.data?.posts?.sort()?.reverse()

    // console.log('introablogData', introablogData)

    return (
        <div className="my-14 bg-tdf-bg py-8 lg:px-10 lg:py-16">
            <Fade top>
                <SectionSubTitle className="text-center " subTitle="Daily Updates" />

            </Fade>
            <Fade bottom>
                <p className="text-center text-gray-600">Latest news and articles directly
                    coming from the blog</p>
            </Fade>
            <div className="p-4 lg:p-12 flex flex-col lg:flex-row lg:space-x-20 ">
                {
                    introablogData?.slice(0, 1).map(({ title, image, category, content, id }) => (
                        <LargeBlogcard key={id} title={title} blogPhoto={image} category={category.label} short_desc={parse(content.substring(0, 299))
                        } />
                    ))
                }

                <div className="lg:w-7/12 flex flex-col justify-between mt-12 space-y-5 lg:space-y-0 lg:mt-0">
                    {
                        introablogData?.slice(1, 4).map(({ title, image, category, content, id }) => (
                            <SmallBlogcard key={id} title={title} blogPhoto={image} category={category.label} short_desc={parse(content.substring(0, 299))} />
                        ))
                    }

                </div>
            </div>
            <Link to="blog">
                <div className="flex items-center mt-5 justify-center">
                    <Button>Read More</Button>

                </div>
            </Link>
        </div>
    )
}

export default BlogIntro