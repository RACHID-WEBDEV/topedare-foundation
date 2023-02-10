import React from "react";
import SectionTitle from "./SectionTitle";
import { Fade } from "react-reveal";
import mapbg from '../../assets/cta/map-bg.png'
import map from '../../assets/cta/serving-map2.png'
import SectionSubTitle from "./SectionSubTitle";



export default function Stats() {

    return (
        <div className="bg-white">
            <div className="xl:px-16 px-4 py-10 xl:mx-auto xl:container">
                <Fade top>
                    <SectionTitle title="Working on Charity" />

                </Fade>
                <div className="max-w-[45rem]">
                    <Fade left>
                        <SectionSubTitle subTitle="Happy People. Better World " />

                    </Fade>
                    <Fade bottom>
                        <p className=" mb-10 pb-10 lg:pb-5 text-gray-600">Join hands with us for a better life and future for the poor across the country, Small Donations Make Bigger Impact
                            On Someone’s Life, Act Today!</p>
                    </Fade>

                </div>


                <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
                    <img src={map} alt="world map drawing " className="w-full xl:h-full h-96 object-fill sm:block hidden" />
                    <img src={mapbg} alt="mobile world map drawing" className="sm:hidden -mt-10 block w-full h-96  object-fill absolute z-0" />

                    <Fade top>
                        <div className="shadow-lg xl:p-6 p-4 w-52 sm:w-auto hidden lg:block lg:right-80 lg:top-[-300px] bg-white sm:absolute relative z-30 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
                            <p className="text-4xl font-bold text-gray-800">42+</p>
                            <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">COMPLETED PROJECT</p>
                        </div>
                    </Fade>


                    <Fade left>
                        <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20  mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
                            <p className="text-4xl font-bold text-gray-800">100+</p>
                            <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">EMPOWERMENT DONE</p>
                        </div>
                    </Fade>


                    <Fade bottom>
                        <div className="shadow-lg xl:p-6 p-4 w-52 sm:w-auto  bg-white sm:absolute relative z-20 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
                            <p className="text-4xl font-bold text-gray-800">8+</p>
                            <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">SCHOOLS SUPPORTED</p>
                        </div>
                    </Fade>

                    <Fade right>
                        <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
                            <p className="text-4xl font-bold text-gray-800">1300+</p>
                            <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">HAPPY CHILDREN</p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
}
