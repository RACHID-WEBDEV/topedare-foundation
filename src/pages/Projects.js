import React from 'react'
import ProjectsCard from './../components/section/ProjectsCard';
import PagesIntro from './../components/global/PagesIntro';
import { Fade } from 'react-reveal';
import SectionSubTitle from './../components/section/SectionSubTitle';
import SectionTitle from './../components/section/SectionTitle';
import CTA from '../components/section/CTA';
import Helmets from './Helmet';

const Projects = () => {
    return (
        <div>
            <Helmets title="Our Projects Page" />
            <PagesIntro title="Our Projects" />
            {/* <div className="hidden lg:block"> */}
            {/* <Fade bottom>
                <SectionSubTitle className="text-center" subTitle="We Love To Help The Poor" />
            </Fade> */}

            {/* </div> */}
            <div className="px-5 pt-5 lg:px-14">
                <div className="relative">
                    <Fade top>
                        <SectionTitle title="OUR INITIATIVES" />
                    </Fade>
                    <Fade left>
                        <div className="max-w-2xl">
                            <SectionSubTitle subTitle=" We Can Save More Lifes With Your Helping Hand." />
                            <p className=" mb-5 text-gray-600">
                                The Tope Dare Foundation's Mission is to Inspire, Educate, Empower, and Connect People to Change the World.

                            </p>

                        </div>
                    </Fade>

                </div>
            </div>
            <ProjectsCard />
            <CTA />
            <div className=" w-full mt-[-60px] pb-2 bg-tdf-bg border-b border-gray-400"></div>
        </div>
    )
}

export default Projects