import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import { Facebook, WhatsApp } from '../assets/svgsIcons';
import PagesIntro from '../components/global/PagesIntro';
import { Instagram, Twitter2 } from '../assets/svgsIcons';
import BlogBtn from '../components/form/BlogBtn';
import blogdata from '../data/blog';
import { kebabCase } from '../utils/utils'

// const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
//     <div className='searchBar-wrap'>
//         <form onSubmit={formSubmit}>
//             <input
//                 type='text'
//                 placeholder='Search By Category'
//                 value={value}
//                 onChange={handleSearchKey}
//             />
//             {value && <span onClick={clearSearch}>X</span>}
//             <button>Go</button>
//         </form>
//     </div>
// );

export const CategoryTab = ({ handleCategory, data }) => {
    return (
        <>
            {
                data.map((item, index) => (
                    <li key={index} className="mb-4 flex items-center justify-between">
                        <p className="text-xl font-medium transition-all cursor-pointer hover:text-tdf-blue-100"
                            onClick={() => handleCategory(item.category)}>{item.category}</p>

                        <p className='p-0.5 px-2.5 bg-gray-200 rounded-md text-gray-600 font-medium '>12</p>
                    </li>
                ))
            }
        </>
    )
}
const BlogDetails = () => {
    // const { id } = useParams();
    const { slug } = useParams();


    // const [blogs, setBlogs] = useState(null);
    const [posts, setPosts] = useState(null);

    const filterCategory = blogdata.reduce((acc, item) => {
        if (!acc[item.category]) {
            return { ...acc, [item.category]: 1 };
        }
        return { ...acc, [item.category]: acc[item.category] + 1 }

    }, [])

    const categoryResults = Object.entries(filterCategory).map(([key, value], index) => {
        return (
            <li key={index} className="mb-4 flex items-center justify-between">
                <Link to={`/blog/category/${kebabCase(key)}`}>
                    <p className="text-xl font-medium transition-all cursor-pointer hover:text-tdf-blue-100"
                    >{key}</p>
                </Link>

                <p className='p-0.5 px-2.5 bg-gray-200 rounded-md text-gray-600 font-medium '>{value}</p>
            </li>
        )
    })


    // Object.entries(filterCategory).forEach(([key, value]) => console.log("loop", `${key}: ${value}`));


    // const handleCategory = async (category) => {
    //     const response = await axios.get(`http://localhost:5000/blogs?category=${category}`)
    //     if (response.status === 200) {
    //         setData(response.data)
    //     } else {
    //         toast.error('Something went wrong')
    //     }
    //     let posts = blogdata.filter((blog) => blog.category);
    //     if (posts) {

    //         setPosts(posts);
    //     }
    // }

    useEffect(() => {
        let posts = blogdata.find((blog) => kebabCase(blog.title) === slug);
        if (posts) {
            setPosts(posts);
        }
    }, [slug]);


    // useEffect(() => {
    //     let blogs = blogdata.find((blogs) => blogs.id === parseInt(id));
    //     if (blogs) {
    //         setBlogs(blogs);
    //     }
    // }, [id]);


    return (
        <div>
            <PagesIntro title="Blog Details" />
            <div className=" py-5 lg:py-20 px-4 lg:px-16">
                <div className="container">
                    <div className="flex flex-wrap flex-col lg:flex-row -mx-4">
                        <div className="lg:w-[30%] px-4 order-last mt-8 lg:mt-0">
                            <div>
                                {/* <div className="mb-12">
                                    <h4 className="font-medium text-gray-700 text-lg xl:text-3xl text-dark capitalize mb-6">Search</h4>
                                    <div className="pro-sidebar-search mb-50 mt-25">
                                        <form className="border border-solid border-gray-300" action="#" method="get">
                                            <div className="relative">
                                                <input className="w-full h-12 text-base py-4 pl-4 pr-16 bg-white text-dark placeholder-current focus:outline-none" type="search" name="search" placeholder="Search Blog" />
                                                <button className="w-12 h-full absolute top-0 right-0 flex items-center justify-center text-dark text-md border-l border-solid border-gray-300" type="submit"><Search /></button>
                                            </div>
                                        </form>
                                    </div>
                                </div> */}

                                <div className="mb-12 text-gray-600">
                                    <h4 className="font-medium text-2xl text-gray-700 xl:text-3xl text-dark capitalize mb-5">Category</h4>
                                    <ul>
                                        {categoryResults}

                                    </ul>
                                </div>

                                <div className="mb-12 text-gray-600 ">
                                    <h4 className="font-medium text-gray-700  text-2xl xl:text-3xl text-dark capitalize mb-8">Recent Post</h4>

                                    <div className="sidebar-project-wrap mt-30">

                                        {
                                            blogdata.slice(0, 4).map(({ blogImg, title, url }) => (
                                                <div className="flex flex-wrap pb-4 mb-5 border-b border-solid border-gray-300">
                                                    <div className="w-20 mr-5 relative">
                                                        <Link to={`/blog/${kebabCase(title)}`} className="block absolute top-0 max-w-[80px] max-h-[80px] left-0 h-full">
                                                            <img className="object-cover bg-center min-w-[80px] min-h-[80px] rounded-md w-full h-full" loading="lazy" src={blogImg} alt="blog details" />
                                                        </Link>
                                                    </div>
                                                    <div className="flex-1">
                                                        <Link to={`/blog/${kebabCase(title)}`} >
                                                            <h4 className="transition-all three-row-paragraph hover:text-tdf-blue-50 text-base" >{title}
                                                            </h4>
                                                        </Link>
                                                        {/* <span className="text-base">Apr 21, 2021</span> */}
                                                    </div>
                                                </div>
                                            ))
                                        }


                                    </div>
                                </div>

                                {/* <div className="mb-12 text-gray-600 ">
                                    <h4 className="font-medium text-gray-700  text-lg xl:text-3xl text-dark capitalize">Archive</h4>

                                    <span className="font-medium text-base text-dark capitalize my-4 block"> April 2021</span>
                                    <ul>
                                        <li className="mb-4"><Link to="" className="text-base transition-all hover:text-orange" ><i className="icofont-rounded-right" /> Sarbi at ligula porta</Link></li>
                                        <li className="mb-4"><Link to="" className="text-base transition-all hover:text-orange" ><i className="icofont-rounded-right" /> Donec tellus Nulla lorem</Link></li>
                                        <li className="mb-4"><Link to="" className="text-base transition-all hover:text-orange" ><i className="icofont-rounded-right" /> Norbi at omgula qorta</Link></li>
                                        <li className="mb-4"><Link to="" className="text-base transition-all hover:text-orange" ><i className="icofont-rounded-right" /> Mithout wery warkness</Link></li>
                                    </ul>
                                </div> */}

                                <div>
                                    <h4 className="font-medium text-2xl text-gray-700  xl:text-3xl text-dark capitalize mb-10">Tags</h4>

                                    <ul className="flex flex-wrap -m-1 text-gray-600 ">
                                        <li className="m-1"><Link to="" className="bg-gray-light leading-none py-3 px-5 block text-base transition-all hover:text-white border border-gray-200 hover:bg-tdf-blue-100">Donation</Link></li>
                                        <li className="m-1"><Link to="" className="bg-gray-light leading-none py-3 px-5 block text-base transition-all hover:text-white border border-gray-200 hover:bg-tdf-blue-100">Charity</Link></li>
                                        <li className="m-1"><Link to="" className="bg-gray-light leading-none py-3 px-5 block text-base transition-all hover:text-white border border-gray-200 hover:bg-tdf-blue-100">Health</Link></li>
                                        <li className="m-1"><Link to="" className="bg-gray-light leading-none py-3 px-5 block text-base transition-all hover:text-white border border-gray-200 hover:bg-tdf-blue-100">Food</Link></li>
                                        <li className="m-1"><Link to="" className="bg-gray-light leading-none py-3 px-5 block text-base transition-all hover:text-white border border-gray-200 hover:bg-tdf-blue-100">Empowerment</Link></li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="flex-1 px-4">
                            {
                                posts ? <div className="blog-details-wrapper">
                                    <div className="mb-8">
                                        <div className="">
                                            <img src={posts.blogImg} loading="lazy" alt="blog details" className="mb-8  max-h-80 w-full h-full lg:max-h-[600px] rounded-xl" />
                                        </div>
                                        <h3 className="mb-4 font-medium text-2xl lg:text-4xl text-gray-800 ">
                                            {posts.title}
                                        </h3>
                                        <ul className="flex flex-wrap text-gray-500 text-base">
                                            <li>21 September, 2022</li>
                                            <li><span className="inline-block mx-2">\</span></li>
                                            <li>Tope Dare</li>
                                        </ul>
                                    </div>

                                    {posts.description}
                                    {/* <blockquote className="my-6 ml-12 relative before:absolute before:top-0 before:-left-5 before:w-1 before:h-full before:empty before:bg-orange">
                                        Es un hecho establecido hace demasiado tiempo que un lector se distraerá con
                                        el contenido del texto de un sitio mientras que mira su diseño.
                                    </blockquote> */}

                                    {/* <div className="chip "> AnimateArrow</div> */}
                                    <div className="flex flex-wrap justify-between  my-8">
                                        <BlogBtn title="Back" url={-1} arrow={false} />
                                        <div className="flex flex-wrap items-center">
                                            <span className="mr-4">Share:</span>

                                            <div className="share-social">
                                                <ul className="flex flex-wrap gap-x-4">
                                                    <Link to="">
                                                        <Facebook />
                                                    </Link>
                                                    <Link to="">

                                                        <Instagram />
                                                    </Link>
                                                    <Link to="">
                                                        <Twitter2 />

                                                    </Link>
                                                    <Link to="">
                                                        <WhatsApp />
                                                    </Link>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>


                                    {/* <div>
                                        <h4 className="mb-8 font-medium text-gray-700 text-lg uppercase">Leave a comment</h4>
                                        <form method="post" action="#">
                                            <div className="grid grid-cols-2 gap-x-4">
                                                <div className="leave-form col-span-2 sm:col-span-1">
                                                    <input className="border border-solid border-gray-300 w-full py-1 px-5 mb-8 placeholder-current text-dark h-12 focus:outline-none text-base" type="text" name="name" placeholder="Name" />
                                                </div>
                                                <div className="leave-form col-span-2 sm:col-span-1">
                                                    <input className="border border-solid border-gray-300 w-full py-1 px-5 mb-8 placeholder-current text-dark h-12 focus:outline-none text-base" type="email" name="email" placeholder="Email" />
                                                </div>
                                                <div className="text-leave col-span-2">
                                                    <textarea className="border border-solid border-gray-300 w-full py-1 px-5 mb-8 placeholder-current text-dark h-60 focus:outline-none text-base resize-none" placeholder="Message" />

                                                    <BlogBtn title="Post comment" arrow={false} />
                                                </div>
                                            </div>
                                        </form>
                                    </div> */}
                                </div>
                                    : <h1 className="text-gray-900">No Blog Found</h1>
                            }







                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails