import React from 'react'
import PagesIntro from './../components/global/PagesIntro';
import { Fade } from 'react-reveal';
import SectionSubTitle from './../components/section/SectionSubTitle';
import CTA from './../components/section/CTA';
import SectionTitle from './../components/section/SectionTitle';
import Helmets from './Helmet';

const Gallery = () => {


    return (
        <div>
            {/* 
<img src="https://i.ibb.co/ftMphJw/project-1.jpg" alt="project-1" border="0" />
<img src="https://i.ibb.co/Xp3yvhY/project-2.jpg" alt="project-2" border="0" />
<img src="https://i.ibb.co/jHRcSGK/project-3.jpg" alt="project-3" border="0" />
<img src="https://i.ibb.co/VJDkwcz/school-children.jpg" alt="school-children" border="0" /> */}
            <Helmets title="Gallery Page" />
            <PagesIntro title="Our Gallery" />
            <div className="hidden lg:block">
                <Fade bottom>
                    <SectionSubTitle className="text-center" subTitle="We Love To Help The Poor" />
                </Fade>

            </div>
            <section className="py-6  dark:text-gray-50">
                <div className="px-5 lg:px-14">
                    <div className="relative">
                        <Fade top>
                            <SectionTitle title="Our Gallery" />
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
                <div className="container grid grid-cols-2 gap-4 lg:gap-8 p-2 lg:p-8 md:grid-cols-4">
                    <div className="img-info overflow-hidden group rounded-xl w-full h-full col-span-2 row-span-2  shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square">
                        <img src="https://i.ibb.co/LYcp31L/tope-dare-foundation-project-1.jpg" alt="tope-dare-foundation-project-1" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 rounded-xl group-hover:scale-105 transition-transform duration-700 aspect-square" />
                        <div className="info p-4">
                            <h1 className=" text-xl lg:text-2xl">Projects</h1>
                            <p className="text-base" >Tope Dare Foundation</p>
                        </div>

                    </div>
                    <div className="img-info overflow-hidden w-full h-full group rounded-xl">
                        <img className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square rounded-xl group-hover:scale-110 transition-transform duration-700" src="https://i.ibb.co/FKTCpgj/tope-dare-foundation-project-2.jpg" alt="tope-dare-foundation-project-2" />
                        <div className="info p-4 hide-info">
                            <h1 className=" text-xl lg:text-2xl">Projects </h1>
                            <p className="text-base" >Tope Dare Foundation</p>
                        </div>

                    </div>
                    <div className="img-info overflow-hidden w-full h-full group rounded-xl">
                        <img className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square rounded-xl group-hover:scale-105 transition-transform duration-700" src="https://i.ibb.co/Bcp8Lhs/tope-dare-foundation-project-4.jpg" alt="tope-dare-foundation-project-4" />
                        <div className="info p-4 hide-info">
                            <h1 className=" text-xl lg:text-2xl">Projects </h1>
                            <p className="text-base" >Tope Dare Foundation</p>
                        </div>
                    </div>
                    <div className="img-info overflow-hidden w-full h-full group rounded-xl">
                        <img className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square rounded-xl group-hover:scale-105 transition-transform duration-700" src="https://i.ibb.co/H4FHkF0/tope-dare-foundation-project-3.jpg" alt="tope-dare-foundation-project-3" />
                        <div className="info p-4 hide-info">
                            <h1 className=" text-xl lg:text-2xl">Projects 3</h1>
                            <p className="text-base" >Tope Dare Foundation</p>
                        </div>
                    </div>
                    <div className="img-info overflow-hidden w-full h-full group rounded-xl">
                        <img className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square rounded-xl group-hover:scale-105 transition-transform duration-700" src="https://i.ibb.co/9G12DCt/tope-dare-foundation-project-5.jpg" alt="tope-dare-foundation-project-5" />
                        <div className="info p-4 hide-info">
                            <h1 className=" text-xl lg:text-2xl">Projects </h1>
                            <p className="text-base" >Tope Dare Foundation</p>
                        </div>
                    </div>
                    {/* </div>
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4"> */}
                    <div className="img-info overflow-hidden w-full h-full group rounded-xl min-h-96">
                        <img className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square rounded-xl group-hover:scale-105 transition-transform duration-700" src="https://i.ibb.co/VDP0f1R/tope-dare-foundation-project-6.jpg" alt="tope-dare-foundation-project-6" />
                        <div className="info p-4 hide-info">
                            <h1 className=" text-xl lg:text-2xl">Projects </h1>
                            <p className="text-base" >Tope Dare Foundation</p>
                        </div>
                    </div>
                    <div className="img-info overflow-hidden w-full h-full group rounded-xl">
                        <img className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square rounded-xl group-hover:scale-105 transition-transform duration-700" src="https://i.ibb.co/FK22Nqy/tope-dare-foundation-project-7.jpg" alt="tope-dare-foundation-project-7" />
                        <div className="info p-4 hide-info">
                            <h1 className=" text-xl lg:text-2xl">Projects </h1>
                            <p className="text-base" >Tope Dare Foundation</p>
                        </div>
                    </div>
                    <div className="img-info overflow-hidden w-full h-full group rounded-xl">
                        <img className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square rounded-xl group-hover:scale-105 transition-transform duration-700" src="https://i.ibb.co/920rH4q/tope-dare-foundation-project-8.jpg" alt="tope-dare-foundation-project-8" />
                        <div className="info p-4 hide-info">
                            <h1 className=" text-xl lg:text-2xl">Projects</h1>
                            <p className="text-base" >Tope Dare Foundation</p>
                        </div>
                    </div>
                    <div className="img-info overflow-hidden w-full h-full group rounded-xl">
                        <img className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square rounded-xl group-hover:scale-105 transition-transform duration-700" src="https://i.ibb.co/cNDxrZp/tope-dare-foundation-project-9.jpg" alt="tope-dare-foundation-project-9" />
                        <div className="info p-4 hide-info">
                            <h1 className=" text-xl lg:text-2xl">Projects</h1>
                            <p className="text-base" >Tope Dare Foundation</p>
                        </div>
                    </div>

                    <div className="img-info overflow-hidden group rounded-xl w-full h-full col-span-2 row-span-2  shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square">
                        <img src="https://i.ibb.co/VT08Ljc/tope-dare-foundation-project-10.jpg" alt="tope-dare-foundation-project-10" className="w-full h-full col-span-2 row-span-2 rounded-xl shadow-sm min-h-96 md:col-start-1 md:row-start-3 rounded-xl group-hover:scale-110 transition-transform duration-700 aspect-square" />

                        <div className="info p-4">
                            <h1 className=" text-xl lg:text-2xl">Projects</h1>
                            <p className="text-base" >Tope Dare Foundation</p>
                        </div>

                    </div>


                </div>
                {/* Gallary Grid 2 */}
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 p-2 lg:p-8">
                    <div className="relative max-h-[500px] overflow-hidden group rounded-lg">
                        <img className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-700 " src=" https://i.ibb.co/ftMphJw/project-1.jpg" alt="project-1" />
                        <div className="absolute rounded-lg flex items-end bottom-0 left-0 pb-5 pl-5 rounded-b-lg pt-2 bg-gray-900 bg-opacity-30 w-full h-full">
                            <div>
                                <h5 className="text-2xl font-medium mb-1 text-white">Projects</h5>
                                <p className="text-base font-medium text-gray-100">Tope Dare Foundation</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
                        <div className="relative lg:col-span-2 overflow-hidden group rounded-lg">
                            <img className="w-full h-60 object-cover rounded-lg  group-hover:scale-110 transition-transform duration-700 " src="https://i.ibb.co/VJDkwcz/school-children.jpg" alt="school-children" />
                            <div className="absolute rounded-lg flex items-end bottom-0 left-0 pb-5 pl-5 rounded-b-lg pt-2 bg-gray-900 bg-opacity-30 w-full h-full">
                                <div>
                                    <h5 className="text-2xl font-medium mb-1 text-white">Project</h5>
                                    <p className="text-base font-medium text-gray-100">Tope Dare Foundation</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden group rounded-lg">
                            <img className="w-full h-60 object-cover rounded-lg group-hover:scale-110 transition-transform duration-700 " src="https://i.ibb.co/jHRcSGK/project-3.jpg" alt="Project 3" />
                            <div className="absolute rounded-lg flex items-end bottom-0 left-0 pb-5 pl-5 rounded-b-lg pt-2 bg-gray-900 bg-opacity-30 w-full h-full">
                                <div>
                                    <h5 className="text-2xl font-medium mb-1 text-white">Projects</h5>
                                    <p className="text-base font-medium text-gray-100">Tope Dare Foundation</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden group rounded-lg">
                            <img className="w-full h-60 object-cover rounded-lg group-hover:scale-110 transition-transform duration-700 " src="https://i.ibb.co/Xp3yvhY/project-2.jpg" alt="project-2" />
                            <div className="absolute rounded-lg flex items-end bottom-0 left-0 pb-5 pl-5 rounded-b-lg pt-2 bg-gray-900 bg-opacity-30 w-full h-full">
                                <div>
                                    <h5 className="text-2xl font-medium mb-1 text-white">Projects</h5>
                                    <p className="text-base font-medium text-gray-100">Tope Dare Foundation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <CTA />
            <div className=" w-full mt-[-60px] pb-2 bg-tdf-bg border-b border-gray-400">

            </div>
        </div>
    )
}

export default Gallery



// src="https://source.unsplash.com/random/302x302/"
// https://source.unsplash.com/random/200x200/?7