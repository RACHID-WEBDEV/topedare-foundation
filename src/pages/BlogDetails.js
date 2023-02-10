import React from 'react'
import { Link } from 'react-router-dom'
import blogImg from '../assets/project/empower-woman.jpg'
import { Facebook, WhatsApp } from '../assets/svgsIcons';
import PagesIntro from './../components/global/PagesIntro';
import { Instagram, Twitter2,Search } from './../assets/svgsIcons';
import BlogBtn from '../components/form/BlogBtn';
const BlogDetails = () => {
    return (
        <div>
            <PagesIntro title="Blog Details" />
            <div className=" py-5 lg:py-20 px-4 lg:px-16">
                <div className="container">
                    <div className="flex flex-wrap flex-col lg:flex-row -mx-4">
                        <div className="lg:w-[30%] px-4 order-last mt-8 lg:mt-0">
                            <div>
                                <div className="mb-12">
                                    <h4 className="font-medium text-gray-700 text-lg xl:text-3xl text-dark capitalize mb-6">Search</h4>
                                    <div className="pro-sidebar-search mb-50 mt-25">
                                        <form className="border border-solid border-gray-300" action="#" method="get">
                                            <div className="relative">
                                                <input className="w-full h-12 text-base py-4 pl-4 pr-16 bg-white text-dark placeholder-current focus:outline-none" type="search" name="search" placeholder="Search Blog" />
                                                <button className="w-12 h-full absolute top-0 right-0 flex items-center justify-center text-dark text-md border-l border-solid border-gray-300" type="submit"><Search/></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="mb-12 text-gray-600">
                                    <h4 className="font-medium text-lg text-gray-700 xl:text-3xl text-dark capitalize mb-5">Custom Menu</h4>
                                    <ul>
                                        <li className="mb-4"><Link to="" className="text-base transition-all hover:text-orange">Best Value</Link></li>

                                        <li className="mb-4"><Link to="" className="text-base transition-all hover:text-orange">Your Order</Link></li>

                                        <li className="mb-4"><Link to="" className="text-base transition-all hover:text-orange">Terms & Condition</Link></li>

                                        <li className="mb-4"><Link to="" className="text-base transition-all hover:text-orange">Contact us</Link></li>

                                        <li className="mb-4"><Link to="" className="text-base transition-all hover:text-orange">Manufactureres</Link></li>
                                    </ul>
                                </div>

                                <div className="mb-12 text-gray-600 ">
                                    <h4 className="font-medium text-gray-700  text-lg xl:text-3xl text-dark capitalize mb-8">Recent Post</h4>

                                    <div className="sidebar-project-wrap mt-30">
                                        <div className="flex flex-wrap pb-5 mb-5 border-b border-solid border-gray-300">
                                            <div className="w-20 mr-5 relative">
                                                <Link to="" className="block absolute top-0 left-0 h-full">
                                                    <img className="object-cover rounded-md w-16 h-16" loading="lazy"  src={blogImg} alt="blog details" /></Link>
                                            </div>
                                            <div className="flex-1">
                                                <span className="text-base">Apr 21, 2021</span>
                                                <h4><Link to="" className="transition-all hover:text-orange text-base" >Sarbi at ligula porta</Link></h4>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap pb-5 mb-5 border-b border-solid border-gray-300">
                                            <div className="w-20 mr-5 relative">
                                                <Link to="" className="block absolute top-0 left-0 h-full">
                                                    <img className="object-cover rounded-md w-16 h-16" loading="lazy"  src={blogImg} alt="blog details" /></Link>
                                            </div>
                                            <div className="flex-1">
                                                <span className="text-base">Apr 21, 2021</span>
                                                <h4><Link to="" className="transition-all hover:text-orange text-base" >Donec tellus Nulla lorem</Link></h4>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap">
                                            <div className="w-20 mr-5 relative">
                                                <Link to="" className="block absolute top-0 left-0 h-full">
                                                    <img className="object-cover rounded-md w-16 h-16" loading="lazy" width="240" height="114" src={blogImg} alt="blog details" /></Link>
                                            </div>
                                            <div className="flex-1">
                                                <span className="text-base">Apr 20, 2021</span>
                                                <h4><Link to="" className="transition-all hover:text-orange text-base" >Norbi at omgula qorta</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-12 text-gray-600 ">
                                    <h4 className="font-medium text-gray-700  text-lg xl:text-3xl text-dark capitalize">Archive</h4>

                                    <span className="font-medium text-base text-dark capitalize my-4 block"> April 2021</span>
                                    <ul>
                                        <li className="mb-4"><Link to="" className="text-base transition-all hover:text-orange" ><i className="icofont-rounded-right" /> Sarbi at ligula porta</Link></li>
                                        <li className="mb-4"><Link to="" className="text-base transition-all hover:text-orange" ><i className="icofont-rounded-right" /> Donec tellus Nulla lorem</Link></li>
                                        <li className="mb-4"><Link to="" className="text-base transition-all hover:text-orange" ><i className="icofont-rounded-right" /> Norbi at omgula qorta</Link></li>
                                        <li className="mb-4"><Link to="" className="text-base transition-all hover:text-orange" ><i className="icofont-rounded-right" /> Mithout wery warkness</Link></li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-medium text-lg text-gray-700  xl:text-3xl text-dark capitalize mb-10">Tags</h4>

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
                            <div className="blog-details-wrapper">
                                <div className="mb-8">
                                    <img src={blogImg} loading="lazy"  alt="blog details" className="mb-8 w-full h-80 lg:h-[500px] rounded-xl" />
                                    <h3 className="mb-4 font-medium text-3xl lg:text-4xl text-gray-800 ">Meet Crystal, an Indigenous Pipeline Fighter in Africa</h3>
                                    <ul className="flex flex-wrap text-gray-500 text-base">
                                        <li>21 September, 2022</li>
                                        <li><span className="inline-block mx-2">\</span></li>
                                        <li>Tope Dare</li>
                                    </ul>
                                </div>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprhendit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                    non proident, sunt in culpa qei officia deser mollit anim id est laborum.
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                    veritatis et
                                </p>
                                <blockquote className="my-6 ml-12 relative before:absolute before:top-0 before:-left-5 before:w-1 before:h-full before:empty before:bg-orange">
                                    Es un hecho establecido hace demasiado tiempo que un lector se distraerá con
                                    el contenido del texto de un sitio mientras que mira su diseño.
                                </blockquote>
                                <p className="mb-8">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehendrit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur.
                                </p>

                                <div className="flex flex-wrap justify-between mb-8">
                                    <BlogBtn title="Back" url="/blog" arrow={false} />
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


                                <div>
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
                                </div>
                            </div>







                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails