import React from 'react'
import ShowLove from "../../assets/about/love-shapes.svg"
import Button from '../form/Button'
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal'
import SectionTitle from './SectionTitle'
import SectionSubTitle from './SectionSubTitle';


const CTA = () => {
    return (
        <div className="py-5 mb-10 rounded-md  ">
            <div className="px-5 lg:px-6 lg:pl-8 xl:pl-20 xl:pr-8">
                <div className="relative">
                    <Fade top>
                        <SectionTitle title="Become a Volunteer" />
                    </Fade>
                    <Fade left>
                        <div className="max-w-2xl">
                            <SectionSubTitle subTitle="Support and Donate " />
                            <p className=" mb-10 text-gray-600">
                                Lets Change The World With Humanity. Your Mercy Can Change Someone’s Life </p>

                        </div>
                    </Fade>

                </div>
            </div>
            <section className="cta-area relative block overflow-hidden">
                <div className="cta-area_bg bg-cta-bg2 absolute left-0 bottom-0 right-0 bg-scroll bg-no-repeat bg-cover" />
                <div className="w-full">
                    <div className="">
                        <div className="">
                            <div className="px-3 lg:px-20 relative block  pb-20">
                                <div className="cta-content_top pl-4 lg:px-[100px] pt-[4.5rem] pb-[4.8125rem] bg-cta-bg relative block bg-scroll bg-no-repeat bg-cover " >
                                    <Fade top>
                                        <h2 className="text-white w-[19.5625rem] lg:w-[21.25rem] text-[1.625rem] lg:text-4xl font-medium mb-6 leading-[2.75rem]">Service to others is the rent you pay for your room here on earth.</h2>

                                    </Fade>
                                    <Fade bottom>
                                        <div className="name relative block pl-16">
                                            <p className="text-white text-lg lg:text-xl leading-4 font-normal">Muhammad Ali</p>
                                        </div>
                                    </Fade>
                                </div>

                                <div className="relative flex flex-row items-center justify-between flex-wrap mt-10 lg:mt-20">
                                    <div className="relative flex mb-10 lg:mb-0 items-center ">
                                        <Fade left>
                                            <div className="relative block">
                                                <img src={ShowLove} alt="icon" className="w-16 h-16 lg:w-20 lg:h-20" />
                                            </div>
                                        </Fade>
                                        <Fade bottom>
                                            <div className="relative block pl-5">
                                                <p className="text-gray-600 text-lg lg:text-2xl leading-6 font-medium m-0 mb-2">Make a Difference Today!</p>
                                                <h2 className="text-2xl lg:text-5xl font-extrabold text-tdf-blue-50/80 ">Become a Volunteer</h2>
                                            </div>

                                        </Fade>
                                    </div>
                                    <div className="relative mx-auto lg:mx-0 block">
                                        <Fade right>
                                            <Link to="/contact">
                                                <Button>
                                                    Register
                                                    Now
                                                </Button>
                                            </Link>
                                        </Fade>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </div>
    )
}

export default CTA