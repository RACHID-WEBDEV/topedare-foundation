import React from 'react'
import PagesIntro from '../components/global/PagesIntro'
import ProjectImg from '../assets/about/about-banner.jpg'
import { Link } from 'react-router-dom'
import Helmets from './Helmet'

export const ProjectCard = () => (
    <div className="w-full px-4 my-4">
        <Helmets title="Project-Listing Page" />
        <div className="border border-solid border-gray-300 p-[20px] md:p-[30px] group flex flex-wrap items-center">
            <div className="mb-6 lg:mb-0 lg:mr-8 w-full lg:w-1/2 xl:w-1/2">
                <Link to="project-details" className="overflow-hidden block">
                    <img className="transform group-hover:scale-110 h-80 transition-transform duration-500 w-full" loading="lazy" src={ProjectImg} alt="project listing" />
                </Link>
            </div>

            <div className="flex-1">
                <h3>
                    <Link to="project-details" className="block text-2xl md:text-3xl lg:4xl text-gray-700 hover:text-gray-800 transition-all font-medium pb-[10px] leading-[1.3]">Donec tellus Nulla lorem</Link></h3>
                <div className="blog-meta">
                    <ul className="flex flex-wrap mb-[10px]">
                        <li className="text-sm">
                            <Link className="text-sm text-gray-600 hover:text-gray-700 transition-all">21 April, 2021
                            </Link> <span className="inline-block mx-2">\</span> </li>
                        <li className="text-sm">
                            <p className="text-sm text-gray-600 hover:text-gray-700 transition-all">0 comments</p></li>
                    </ul>
                </div>

                <p className="font-normal text-gray-600 mb-[25px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore...</p>
                <a className="bg-white transition-all hover:bg-gray-600 hover:border-gray-600 hover:text-white text-gray-600 capitalize font-medium text-sm inline-block border border-solid border-gray-300 px-8 py-4 leading-none mb-[10px]" href="blog details.html">project details</a>
            </div>

        </div>
    </div>

)
const ProjectListing = () => {
    return (
        <div>
            <PagesIntro title="Project Listing" />

            <div className="py-24 px4 lg:px-20">
                <div className="container">
                    <div className="flex flex-wrap -my-4 -px-4">

                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectListing