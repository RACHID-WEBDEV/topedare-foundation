// import React from 'react'
// import { Link } from "react-router-dom";
// import AboutBanner from "../../assets/about/about-banner.jpg"
// import ShowLove from "../../assets/about/love-shapes.svg"
// import Button from '../form/Button';
// import aboutShape from '../../assets/about/about-shape-3.png';
// import Fade from 'react-reveal/Fade';

// import classNames from 'classnames';
// import { CheckIcon } from '../../assets/svgsIcons';
// import useSWR from 'swr';
// import parse from "html-react-parser";
// const _config = require("../../config.json")



// function AboutIntro({ content, intro, switchColumn, aboutpage, subTitle, floatStats, title, statsTitle1, statsSubTitle1, statsTitle2, statsSubTitle2 }) {
//     const { data, error } = useSWR(`${_config.REACT_APP_BASE_URL}public/content/components?user=${_config.REACT_APP_USER_lOGIN_ID}`)

//     if (error) return console.log(error)



//     if (!data) {
//         return (
//             <div className="containerspiner">
//                 <div className="loading" />
//             </div>
//         )
//     }


//     const render = data?.data?.components?.find(({ slug }) => {
//         return slug === "about-intro-test"
//     })

//     const stats1 = data?.data?.components?.find(({ slug }) => {
//         return slug === "about-intro-stats-1"
//     })
//     const stats2 = data?.data?.components?.find(({ slug }) => {
//         return slug === "about-intro-stats-2"
//     })

//     const stats3 = data?.data?.components?.find(({ slug }) => {
//         return slug === "about-intro-stats-3"
//     })
//     const stats4 = data?.data?.components?.find(({ slug }) => {
//         return slug === "about-intro-stats-4"
//     })

//     const floatStatss = data?.data?.components?.find(({ slug }) => {
//         return slug === "about-intro-floating-stats"
//     })
//     const aboutPageIntro = data?.data?.components?.find(({ slug }) => {
//         return slug === "about-us-page-intro-2"
//     })
//     const aboutPageContent = data?.data?.components?.find(({ slug }) => {
//         return slug === "about-page-intro-2-content"
//     })


//     // console.log("stats4", stats4)
//     return (
//         <>
//             <section className={classNames("relative pt-24 pb-10 lg:pt-32 lg:pb-2 text-gray-800", { 'pb-0 lg:pb-10': switchColumn })}>

//                 <div className="lg:p-12">
//                     <div className="flex flex-col lg:flex-row lg:gap-10 lg:justify-between">
//                         <div className={classNames("lg:w-[55%] px-2 ", { "order-last lg:order-first pt-16": switchColumn })}>
//                             <div className="relative">
//                                 <div className=" flex justify-center gap-6">
//                                     <Fade left>
//                                         <div className="z-20 overflow-hidden group rounded-xl" style={{ width: 520, height: 370 }}>
//                                             <img src={AboutBanner} width={520} height={370} loading="lazy" alt="about banner" className="rounded-xl group-hover:scale-105 transition-transform duration-700" />
//                                         </div>
//                                     </Fade>


//                                 </div>
//                                 {floatStatss &&
//                                     <div className="w-[291px] h-[93px] absolute bottom-16 md:bottom-[-20px] lg:bottom-[-40px] z-30  bg-no-repeat bg-contain bg-about-shape1 about-shape-1-animate">
//                                         <div className="flex items-center ml-[-22px] justify-center gap-2 pt-3.5 p-2">
//                                             <span className="rounded-full p-4 bg-tdf-blue-50/20" >
//                                                 <img src={ShowLove} width={30} height={30} alt="" className="" />
//                                             </span>
//                                             <div className="max-w-[155px]">
//                                                 {parse(floatStatss?.description)}
//                                             </div>

//                                         </div>
//                                     </div>}

//                                 <img src={aboutShape} width="732" height="528" alt="" className="lg:min-w-[732px] absolute left-[-50px] top-[-80px]" />
//                             </div>
//                         </div>
//                         <div className="mt-[-30px] md:mt-0 lg:pb-20 lg:mt-[-100px] xl:mt-[-50px] lg:w-[45%] px-3 ">
//                             <div className="md:px-8 md:mt-12 lg:mt-0 lg:px-0">
//                                 {
//                                     intro && <>
//                                         <Fade bottom>
//                                             {parse(render?.description)}
//                                         </Fade>

//                                     </>
//                                 }
//                                 {
//                                     aboutpage &&
//                                     <div>
//                                         {aboutPageIntro &&
//                                             <Fade top>
//                                                 {parse(aboutPageIntro?.description)}
//                                             </Fade>}

//                                         {aboutPageContent &&
//                                             <Fade bottom>
//                                                 {parse(aboutPageContent?.description)}
//                                             </Fade>}
//                                     </div>
//                                 }
//                                 <Fade right>
//                                     <div className="flex space-x-4 mb-8 sm:space-x-10">
//                                         {stats1 &&
//                                             <div className="flex space-x-4">
//                                                 <CheckIcon />
//                                                 {parse(stats1?.description)}
//                                             </div>}
//                                         {stats2 &&
//                                             <div className="flex space-x-4">
//                                                 <CheckIcon />
//                                                 {parse(stats2?.description)}
//                                             </div>}
//                                     </div>
//                                 </Fade>
//                                 {
//                                     switchColumn &&
//                                     <Fade bottom delay={1000}>
//                                         <div className="flex space-x-4 mb-8 sm:space-x-10">
//                                             {stats3 &&
//                                                 <div className="flex space-x-4">
//                                                     <CheckIcon />
//                                                     {parse(stats3?.description)}
//                                                 </div>}
//                                             {stats4 &&
//                                                 <div className="flex space-x-4">
//                                                     <CheckIcon />
//                                                     {parse(stats4?.description)}
//                                                 </div>}
//                                         </div>

//                                     </Fade>
//                                 }
//                                 <Fade bottom delay={1000}>
//                                     <div className={classNames("text-center lg:text-left", { 'hidden': switchColumn })}>
//                                         <Link to="/about">
//                                             <Button className="">Learn More</Button>
//                                         </Link>
//                                     </div>

//                                 </Fade>
//                             </div>

//                         </div>



//                     </div>
//                 </div>
//             </section>

//         </>
//     )
// }

// export default AboutIntro

import React from 'react'
import { Link } from "react-router-dom";
import AboutBanner from "../../assets/about/about-banner.jpg"
import ShowLove from "../../assets/about/love-shapes.svg"
import Button from '../form/Button';
import aboutShape from '../../assets/about/about-shape-3.png';
import Fade from 'react-reveal/Fade';
import SectionTitle from './SectionTitle';
import SectionSubTitle from './SectionSubTitle';
import classNames from 'classnames';
import { CheckIcon } from '../../assets/svgsIcons';



function AboutIntro({ content, switchColumn, subTitle, title, }) {
    return (
        <>
            <section className={classNames("relative pt-24 pb-10 lg:pt-32 lg:pb-2 text-gray-800", { 'pb-0 lg:pb-10': switchColumn })}>

                <div className="lg:p-12">
                    <div className="flex flex-col lg:flex-row lg:gap-10 lg:justify-between">
                        <div className={classNames("lg:w-[55%] px-2 ", { "order-last lg:order-first pt-16": switchColumn })}>
                            <div className="relative">
                                <div className=" flex justify-center gap-6">
                                    <Fade left>
                                        <div className="z-20 overflow-hidden group rounded-xl" style={{ width: 520, height: 370 }}>
                                            <img src={AboutBanner} width={520} height={370} loading="lazy" alt="about banner" className="rounded-xl group-hover:scale-105 transition-transform duration-700" />
                                        </div>
                                    </Fade>


                                </div>
                                <div className="w-[291px] h-[93px] absolute bottom-16 md:bottom-[-20px] lg:bottom-[-40px] z-30  bg-no-repeat bg-contain bg-about-shape1 about-shape-1-animate">
                                    <div className="flex items-center justify-center gap-3 pt-3.5 p-2">
                                        <span className="rounded-full p-4 bg-tdf-blue-50/20" >
                                            <img src={ShowLove} width={30} height={30} alt="" className="" />
                                        </span>
                                        <p className="text-xs font-black mr-8 text-gray-900 w-[155px]">We help more than 320+ children every year</p>
                                    </div>
                                </div>

                                <img src={aboutShape} width="732" height="528" alt="" className="lg:min-w-[732px] absolute left-[-50px] top-[-80px]" />
                            </div>
                        </div>
                        <div className="mt-[-30px] md:mt-0 lg:pb-20 lg:mt-[-100px] xl:mt-[-50px] lg:w-[45%] px-3 ">
                            <div className="md:px-8 md:mt-12 lg:mt-0 lg:px-0">
                                <Fade top>
                                    <SectionTitle title={title} />
                                </Fade>
                                <Fade left>
                                    <SectionSubTitle subTitle={subTitle} />
                                </Fade>
                                <Fade bottom>
                                    <p className="mb-10 text-gray-600">
                                        {content}
                                    </p>

                                </Fade>
                                <Fade right>
                                    <div className="flex space-x-4 mb-8 sm:space-x-10">
                                        <div className="flex space-x-4">
                                            <CheckIcon />
                                            <div>
                                                <span className="font-black text-gray-600 block text-xl dark:text-white">82+</span>
                                                <span className="text-gray-500">Completed Project</span>
                                            </div>
                                        </div>
                                        <div className="flex space-x-4">
                                            <CheckIcon />
                                            <div>
                                                <span className="font-black text-gray-600 block text-xl dark:text-white">90.7%</span>
                                                <span className="text-gray-500">Satisfaction Rate</span>
                                            </div>



                                        </div>
                                    </div>

                                </Fade>
                                {
                                    switchColumn &&
                                    <Fade bottom delay={1000}>
                                        <div className="flex space-x-4 mb-8 sm:space-x-10">
                                            <div className="flex space-x-4">
                                                <CheckIcon />
                                                <div>
                                                    <span className="font-black text-gray-600 block text-xl dark:text-white">425+</span>
                                                    <span className="text-gray-500">Successful Campaigns</span>
                                                </div>
                                            </div>
                                            <div className="flex space-x-4">
                                                <CheckIcon />
                                                <div>
                                                    <span className="font-black text-gray-600 block text-xl dark:text-white">162+</span>
                                                    <span className="text-gray-500">Happy Families</span>
                                                </div>
                                            </div>

                                        </div>

                                    </Fade>
                                }
                                <Fade bottom delay={1000}>
                                    <div className={classNames("text-center lg:text-left", { 'hidden': switchColumn })}>
                                        <Link to="/about">
                                            <Button className="">Learn More</Button>
                                        </Link>
                                    </div>

                                </Fade>
                            </div>

                        </div>



                    </div>
                </div>
            </section>

        </>
    )
}

export default AboutIntro   