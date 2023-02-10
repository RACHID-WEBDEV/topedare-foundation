import React from "react";
import SupportBtn from './../form/SupportBtn';
import ProjectImg from '../../assets/project/school-children.jpg'
import ProjectImg2 from '../../assets/project/child-in-hospital.jpg'
import ProjectImg3 from '../../assets/project/empower-woman.jpg'

import { EmpowerIcon } from "../../assets/svgsIcons";
import { Fade } from 'react-reveal';

function ProjectsCard() {
    return (
        <>
            <div className="md:mx-auto md:container px-4">
                {/* Education Card */}
                <Fade left>
                    <div className=" ">
                        <div className="container mx-auto">
                            <div className="flex flex-wrap items-center pb-12">
                                <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                                    <div className="py-2 text-color">
                                        <h1 className="text-2xl lg:text-3xl text-gray-800 ">EDUCATION</h1>
                                        <p className="text-gray-600 text-lg lg:text-2xl py-4 ">The foundation has paid the 2022 JAMB examination fees for the entire 149 SS3 students of St. Peter’s Secondary School, Akure where Tope Dare finished from 29 years ago</p>
                                        <div className="cursor-pointer pb-4 md:pb-0">
                                            <SupportBtn title="Support Our Work" />
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                                    <img className="absolute w-full h-4/5 inset-0 object-cover object-center rounded-xl" src={ProjectImg} alt="Students in class" />
                                    <div className="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-20">
                                        <div className="flex items-center justify-between w-full sm:w-full mb-8">
                                            <div className="flex items-center">
                                                <div className="p-4 bg-tdf-bg text-gray-800 rounded-md">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-discount" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <line x1={9} y1={15} x2={15} y2={9} />
                                                        <circle cx="9.5" cy="9.5" r=".5" />
                                                        <circle cx="14.5" cy="14.5" r=".5" />
                                                        <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1" />
                                                    </svg>
                                                </div>
                                                <div className="ml-6">
                                                    <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">320+</h3>
                                                    <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">Avg Students</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-center pl-3 text-green-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trending-up" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <polyline points="3 17 9 11 13 15 21 7" />
                                                        <polyline points="14 7 21 7 21 14" />
                                                    </svg>
                                                    <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">7.2%</p>
                                                </div>
                                                <p className="font-normal text-xs text-right leading-4 text-green-400 tracking-normal">Increase</p>
                                            </div>
                                        </div>
                                        <div className="relative mb-3">
                                            <hr className="h-1 rounded-sm bg-gray-200" />
                                            <hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-tdf-blue-100" />
                                        </div>
                                        <h4 className="text-base text-gray-600 font-normal tracking-normal leading-5">Yearly Goal</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Fade>
                {/* Health Card */}
                <Fade bottom>

                    <div className="pb-32 pt-16">
                        <div className="mx-auto">
                            <div className="flex flex-wrap flex-row-reverse items-center">
                                <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                                    <div className="py-2 text-color">
                                        <h1 className="text-2xl lg:text-3xl text-gray-800 ">HEALTHCARE</h1>
                                        <p className="text-gray-600 text-lg lg:text-2xl py-4 ">
                                            By end of 2022, the Tope Dare Foundation aims to reach out to a minimum of 150 households in our communities directly with access to good water, clothing, and basic healthcare needs, as well as increased behavioral change through access to livelihood support, thus reinforcing child poverty and malnutrition alleviation and national advocacy
                                            We intend to pick up at least 30 hospital bills of patients who can not afford their medical bills at some government public hospitals
                                        </p>
                                        <div className="cursor-pointer pb-4 md:pb-0">
                                            <SupportBtn title="Support Our Work" />
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                                    <img className="absolute w-full h-full inset-0 object-cover object-center rounded-md" src={ProjectImg2} alt="people discussing on board" />
                                    <div className="relative z-10 p-4 bg-white shadow rounded mx-auto w-9/12 -mb-20">
                                        <h4 className="text-gray-800 font-normal text-md leading-4 tracking-normal mb-2">Invoice # 4.5 Million</h4>
                                        {/* <p className="text-gray-600 text-xs leading-3 font-normal">Assigned to: Yinka Rasheed</p> */}
                                        <div className="mt-4 flex items-center">
                                            <span className="text-gray-600">
                                                <svg className="feather feather-user" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                    <circle cx={12} cy={7} r={4} />
                                                </svg>
                                            </span>
                                            <p className="ml-1 text-sm text-gray-800 leading-3 tracking-normal font-normal">Special Consultancy</p>
                                        </div>
                                        <div className="mt-3 flex items-center">
                                            <span className="text-gray-600">
                                                <svg className="feather feather-dollar-sign" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1={12} y1={1} x2={12} y2={23} />
                                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                                </svg>
                                            </span>
                                            <p className="ml-1 text-sm text-gray-800 leading-3 tracking-normal font-normal">1,354 USD Received</p>
                                        </div>
                                        <div className="relative my-3">
                                            <hr className="h-1 rounded-sm bg-gray-200" />
                                            <hr className="absolute top-0 h-1 w-4/12 rounded-sm bg-tdf-blue-100" />
                                        </div>
                                        <h4 className="text-base text-gray-600 font-normal tracking-normal leading-5">Yearly Goal</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
                {/* FINANCIAL EMPOWERMENT Card */}
                <Fade right>
                    <div className="pt-10 ">
                        <div className="container mx-auto">
                            <div className="flex flex-wrap items-center pb-12">
                                <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                                    <div className="py-2 text-color">
                                        <h1 className="text-2xl lg:text-3xl text-gray-800 ">EMPOWERMENT</h1>
                                        <p className="text-gray-600 text-lg lg:text-2xl py-4 ">Our key empowerment initiative is geared towards the empowerment of women and younger people in our communities by supporting individuals to start small and medium-sized enterprises. The Tope Dare Foundation has already started identifying eligible beneficiaries in preparation for the program’s implementation in Lagos, Ogun, Ekiti, and Ondo State and will be actively targeting and empowering hundreds of women to help them become successful entrepreneurs.</p>
                                        <div className="cursor-pointer pb-4 md:pb-0">
                                            <SupportBtn title="Support Our Work" />
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                                    <img className="absolute w-full h-4/5 inset-0 object-cover object-center rounded-xl" src={ProjectImg3} alt="Empowering woman" />
                                    <div className="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-20">
                                        <div className="flex items-center justify-between w-full sm:w-full mb-8">
                                            <div className="flex items-center">
                                                <div className="p-4 bg-tdf-bg text-gray-800 rounded-md">
                                                    <EmpowerIcon width={30} height={30} />
                                                </div>
                                                <div className="ml-6">
                                                    <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">137+</h3>
                                                    <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">Avg Woman</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-center pl-3 text-green-400">

                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trending-up" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <polyline points="3 17 9 11 13 15 21 7" />
                                                        <polyline points="14 7 21 7 21 14" />
                                                    </svg>
                                                    <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">10.8%</p>
                                                </div>
                                                <p className="font-normal text-xs text-right leading-4 text-green-400 tracking-normal">Increase</p>
                                            </div>
                                        </div>
                                        <div className="relative mb-3">
                                            <hr className="h-1 rounded-sm bg-gray-200" />
                                            <hr className="absolute top-0 h-1 w-9/12 rounded-sm bg-tdf-blue-100" />
                                        </div>
                                        <h4 className="text-base text-gray-600 font-normal tracking-normal leading-5">Yearly Goal</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Fade>
                {/* End FINANCIAL EMPOWERMENT Card */}
                <div className="mt-20"></div>
            </div>
        </>
    );
}

export default ProjectsCard;
