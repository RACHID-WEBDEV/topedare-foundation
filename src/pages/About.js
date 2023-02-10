// import React, { useState, useEffect } from 'react'
// import AboutUs from './../components/section/AboutUs';
import SectionTitle from './../components/section/SectionTitle';
import { Fade, Bounce } from 'react-reveal';
import SectionSubTitle from './../components/section/SectionSubTitle';
import AboutIntro from './../components/section/AboutIntro';
import { Link } from 'react-router-dom';
// import axios from 'axios';

import Health from '../assets/section/health-care.svg'
import Education from '../assets/section/charity-education.svg'
import Employment from '../assets/section/work.svg'
import { EmpowerIcon } from '../assets/svgsIcons';
import Button from '../components/form/Button';

import AboutImg1 from '../assets/about/about-landing-image.jpg'
import AboutImg2 from '../assets/about/about-landing-image2.jpg'
import PagesIntro from './../components/global/PagesIntro';
import Helmets from './Helmet';
// import useSWR from 'swr';
// import { kebabCase } from '../utils/utils';
import useSWR from 'swr';
import parse from 'html-react-parser';
const _config = require("../config.json")



const About = () => {
    const { data, error } = useSWR(`${_config.REACT_APP_BASE_URL}public/content/components?user=${_config.REACT_APP_USER_lOGIN_ID}`)

    const result = data?.data?.components?.map(({ description }) => {
        return description
    })

    // console.log('result out', result)

    if (error) return console.log(error)

    if (!result) {
        return <h1>Loading...</h1>
    }
    const aboutIntro = data?.data?.components?.find(({ slug }) => {
        return slug === "about-us-page-intro"
    })
    const aboutContent1 = data?.data?.components?.find(({ slug }) => {
        return slug === "about-us-page-content1"
    })
    const aboutinitiative = data?.data?.components?.find(({ slug }) => {
        return slug === "about-us-page-our-initiative"
    })

    const category1 = data?.data?.components?.find(({ slug }) => {
        return slug === "what-we-do-category-1"
    })
    const category2 = data?.data?.components?.find(({ slug }) => {
        return slug === "what-we-do-category-2"
    })
    const category3 = data?.data?.components?.find(({ slug }) => {
        return slug === "what-we-do-category-3"
    })
    const category4 = data?.data?.components?.find(({ slug }) => {
        return slug === "what-we-do-category-4"
    })
    const statsIntro = data?.data?.components?.find(({ slug }) => {
        return slug === "about-us-page-stats-intro"
    })
    const stats1 = data?.data?.components?.find(({ slug }) => {
        return slug === "about-us-page-stats1"
    })
    const stats2 = data?.data?.components?.find(({ slug }) => {
        return slug === "about-us-page-stats2"
    })
    const stats3 = data?.data?.components?.find(({ slug }) => {
        return slug === "about-us-page-stats3"
    })
    const stats4 = data?.data?.components?.find(({ slug }) => {
        return slug === "about-us-page-stats4"
    })


    return (
        <>
            <Helmets title="About Us" />
            <PagesIntro className="text-tdf-bg" title="About Us" />
            <section className="object-cover object-[83%] pb-10  bg-cover bg-center bg-hero-bg overflow-hidden pt-5 ">
                <div className="hidden lg:block">
                    <Fade bottom>
                        <SectionSubTitle className="text-center" subTitle="We Love To Help The Poor" />
                    </Fade>

                </div>
                <div className="gap-16 items-center xl:px-16 py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        {aboutIntro && <Fade top>
                            {parse(aboutIntro?.description)}
                        </Fade>}

                        {aboutContent1 &&
                            <Fade bottom>
                                {parse(aboutContent1?.description)}
                            </Fade>}
                    </div>
                    <Fade right>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <img className="w-full  rounded-lg" src={AboutImg1} alt="About Landing 1" />
                            <img className="mt-10 w-full lg:mt-16 rounded-lg" src={AboutImg2} alt="About Landing 2" />
                        </div>

                    </Fade>

                </div>
            </section>


            <AboutIntro aboutpage switchColumn />

            <div className=" lg:pt-28 lg:pb-4 object-cover object-[83%]  bg-cover bg-right bg-section-bg overflow-hidden">
                <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
                    <div>
                        <Fade top>
                            <SectionTitle title="Our initiative" />
                        </Fade>
                        <Fade left>
                            <div className="max-w-2xl">
                                {parse(aboutinitiative?.description)}
                            </div>
                        </Fade>
                    </div>
                    <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
                        {category1 &&
                            <Fade top>
                                <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                                    <div className="relative p-8 space-y-8">
                                        <img src={Health} className="w-10" alt="Health illustration" />
                                        <div className="space-y-2">
                                            {parse(category1?.description)}
                                        </div>
                                        <Link to="" className="lg:flex justify-between hidden items-center group-hover:text-gray-600">
                                            <span className="text-base">Read more</span>
                                            <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">→</span>
                                        </Link>
                                    </div>
                                </div>
                            </Fade>}

                        {category4 &&
                            <Fade bottom>
                                <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                                    <div className="relative p-8 space-y-8">
                                        <EmpowerIcon className="w-10 h-10" />
                                        <div className="space-y-2">
                                            {parse(category4?.description)}
                                        </div>
                                        <Link to="" className="lg:flex hidden justify-between items-center group-hover:text-gray-600">
                                            <span className="text-base">Read more</span>
                                            <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">→</span>
                                        </Link>
                                    </div>
                                </div>
                            </Fade>}
                        {category2 &&
                            <Fade top>
                                <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                                    <div className="relative p-8 space-y-8">
                                        <img src={Education} className="w-10" alt="education illustration" />

                                        <div className="space-y-2">
                                            {parse(category2?.description)}

                                        </div>

                                        <Link to="/about" className="hidden lg:flex justify-between items-center group-hover:text-gray-600">
                                            <span className="text-base">Read more</span>
                                            <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">→
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </Fade>}
                        {/* category3 expected below */}
                        {category4 &&
                            <Fade bottom>
                                <div className="relative group bg-gray-100 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
                                    <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
                                        <img src={Employment} className="w-10" alt="Employment illustration" />
                                        <div className="space-y-2">
                                            {parse(category4?.description)}
                                        </div>
                                        <Link to="" className="flex justify-between items-center group-hover:text-gray-600">
                                            <span className="text-base">Read more</span>
                                            <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">→</span>
                                        </Link>
                                    </div>
                                </div>
                            </Fade>}
                    </div>
                </div>
            </div>
            <div className="pt-16 pb-8 bg-tdf-bg ">
                <Fade top>
                    {parse(statsIntro?.description)}
                </Fade>



                <div className="grid grid-cols-2 md:grid-cols-4">
                    <Fade top>
                        {parse(stats1?.description)}
                    </Fade>
                    {stats2 && <>
                        {parse(stats2?.description)}
                    </>}
                    <Fade top>
                        {parse(stats3?.description)}
                    </Fade>
                    <Fade bottom>
                        {parse(stats4?.description)}
                    </Fade>
                </div>
            </div>




            <div className="py-16 bg-white">
                <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
                    <Fade top>
                        <div className="flex items-center justify-center -space-x-2">
                            <img loading="lazy" width="220" height="220" src="https://xsgames.co/randomusers/assets/avatars/male/46.jpg" alt="member " className="w-8 h-8 object-cover rounded-full" />
                            <img loading="lazy" width="220" height="220" src="https://xsgames.co/randomusers/assets/avatars/female/51.jpg" alt="member " className="w-12 h-12 object-cover rounded-full" />
                            <img loading="lazy" width="220" height="220" src="https://xsgames.co/randomusers/assets/avatars/male/11.jpg" alt="member " className="z-10 w-16 h-16 object-cover rounded-full" />
                            <img loading="lazy" width="220" height="220" src="https://xsgames.co/randomusers/assets/avatars/male/52.jpg" alt="member " className="relative w-12 h-12 object-cover rounded-full" />
                            <img loading="lazy" width="220" height="220" src="https://xsgames.co/randomusers/assets/avatars/female/42.jpg" alt="member " className="w-8 h-8 object-cover rounded-full" />
                        </div>

                    </Fade>
                    <div className="m-auto space-y-6 md:w-8/12 lg:w-8/12">
                        <Fade top>
                            <h1 className="text-3xl text-gray-700 text-center md:text-4xl"> Make a Difference Today!</h1>

                        </Fade>
                        <Fade left>
                            <p className="text-center capitalize">Become a Volunteer Today. Help Hundreds of Childrens across the Country </p>
                        </Fade>

                        <div className="flex items-center justify-center">
                            <Fade bottom>
                                <Link to="/contact">
                                    <Bounce delay={1000}>
                                        <Button className="">Join Today</Button>
                                    </Bounce>
                                </Link>

                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            {/* <AboutUs /> */}

        </>

    )
}

export default About