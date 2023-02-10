/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import SectionTitle from "./SectionTitle";
import SectionSubTitle from './SectionSubTitle';
import { Fade } from 'react-reveal'
import Health from '../../assets/section/health-care.svg'
import Education from '../../assets/section/charity-education.svg'
import Employment from '../../assets/section/work.svg'
import { EmpowerIcon } from "../../assets/svgsIcons";
import SectionImg from '../../assets/section/section-img.jpg'



const WhatWeDo = () => {
    return (
        <>
            <section className="relative overflow-hidden ">
                <div className="py-16 lg:pl-8 xl:pl-20 xl:pr-8">
                    <div className="px-5 lg:px-6">
                        <div className="relative">
                            <Fade top>
                                <SectionTitle title="What We do" />
                            </Fade>
                            <Fade left>
                                <div className="max-w-2xl">
                                    {/* We believe they have a future bright with hope if we assist them */}
                                    <SectionSubTitle subTitle=" Spread Love with Donations" />
                                    <p className=" mb-10 text-gray-600">
                                        Here some of the Categories and Sector we Work regularly, We believe they have a future bright with hope if we assist them </p>

                                </div>
                            </Fade>

                        </div>
                    </div>
                    <div className="relative px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="absolute inset-0">
                            <div className="absolute inset-y-0 z-0 w-full h-full bg-white custom-shadow rounded-md lg:w-3/4" />
                        </div>

                        <div className="relative">
                            <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
                                <div className="grid gap-10 row-gap-5">
                                    <div className="">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                                            <Fade left>
                                                <div className="flex p-4 shadow-md border border-gray-200 rounded-md">
                                                    <div className="mr-6">
                                                        <img src={Health} width={80} height={80} alt="health icon" className="min-w-[40px] min-h-[40px]" />

                                                    </div>
                                                    <div className="">
                                                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">Health</p>
                                                        <p className="mt-2 font-normal text-base leading-6 text-gray-600">Helping those in need of basic medical health care get and stay healthy for life by teaching good habits, payment of hospital bills and provision of drugs and equipment.</p>
                                                    </div>
                                                </div>

                                            </Fade>
                                            <Fade bottom>
                                                <div className="flex p-4 shadow-md border border-gray-200 rounded-md">
                                                    <div className="mr-6">
                                                        <img src={Education} width={65} height={65} alt="health icon" className="min-w-[40px] min-h-[40px]" />
                                                    </div>
                                                    <div className="">
                                                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">Education</p>
                                                        <p className="mt-2 font-normal text-base leading-6 text-gray-600">Keeping kids in school through tutoring, computer courses and financial aid as education serves as a panacea for socio-economic.</p>
                                                    </div>
                                                </div>

                                            </Fade>

                                            <Fade top>
                                                <div className="flex p-4 shadow-md border border-gray-200 rounded-md">
                                                    <div className="mr-6">
                                                        <img src={Employment} width={65} height={65} alt="health icon" className="min-w-[40px] min-h-[40px]" />

                                                    </div>
                                                    <div className="">
                                                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">Employment</p>
                                                        <p className="mt-2 font-normal text-base leading-6 text-gray-600">Providing an avenue to train unemployed youths with the necessary skills to get jobs and start a career or profession for financial freedom.</p>
                                                    </div>
                                                </div>

                                            </Fade>


                                            <Fade bottom>
                                                <div className="flex p-4 shadow-md border border-gray-200 rounded-md">
                                                    <div className="mr-6">
                                                        <EmpowerIcon />

                                                    </div>
                                                    <div className="">
                                                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">Empowerment</p>
                                                        <p className="mt-2 font-normal text-base leading-6 text-gray-600">Promoting empowerment of the unemployed in achieving poverty eradication, social integration and full employment integration for our youth and women.</p>
                                                    </div>
                                                </div>
                                            </Fade>
                                        </div>




                                    </div>

                                </div>
                                <Fade right>
                                    <div className="order-first lg:order-last">

                                        <div className="z-20 overflow-hidden group rounded-xl w-full h-full" >
                                            <img src={SectionImg} loading="lazy" alt="What we do banner" className="w-full  h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700" />
                                        </div>

                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

        </>
    );
};

export default WhatWeDo;