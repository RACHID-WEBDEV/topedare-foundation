import React from 'react'
import { Link } from "react-router-dom";
import HeroShape2 from '../../assets/hero/hero-shape-2.png'
import Button from '../form/Button';
import Fade from 'react-reveal/Fade';
import Slider from 'react-slick';
import slideData from "../../data/hero/heroSlide"



export const HeroSlide = ({ banner1, banner2, banner3, btnLink, btnTitle, title, subTitle }) => (
    <>
        <div className="px-4 lg:px-12 mt-[74px]">
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:justify-between">
                <div className="py-5 order-last mt-[-130px] mb-5 md:ml-20 lg:ml-0  lg:mb-0 md:mt-10 lg:mt-0 lg:order-first lg:py-20 lg:w-[45%] xl:pl-14">
                    <div className="lg:mt-3">
                        <Fade top delay={1000} >
                            <h1 className="text-gray-800 mb-6 text-[44px] leading-none lg:text-7xl ">
                                {title}
                            </h1>
                        </Fade>
                        <Fade bottom delay={1000} >
                            <p className="font-semibold text-gray-600 mb-8 text-xl tracking-normal leading-normal">
                                {subTitle}
                            </p>
                        </Fade>
                        <Fade left delay={2000} >
                            <Link to={btnLink}>
                                <Button className="">{btnTitle}</Button>
                            </Link>
                        </Fade>
                    </div>

                </div>
                <div className="pt-2 lg:w-[55%] h-full">
                    <div className="relative">
                        <div className=" flex justify-center gap-6">
                            <div className="img-holder one z-20 " style={{ width: 270, height: 300 }}>
                                {banner1}
                                {banner3}

                            </div>
                            <div className="img-holder two mt-28 z-20" style={{ width: 240, height: 370 }}>
                                {banner2}
                            </div>
                        </div>
                        <img src={HeroShape2} width={638} height={551} alt="" className="absolute right-[-25px] top-[-20px] md:right-5 lg:right-0 lg:top-[-80px]" />
                    </div>
                </div>


            </div>
        </div>
    </>
)

function HeroIntro() {

    const slideSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: false
    };
    return (
        <>
            <section className="relative py-14 lg:py-24 overflow-hidden object-cover object-[83%]  bg-cover bg-center bg-hero-bg">
                <Slider {...slideSettings}>

                    {slideData.map(({ banner1, banner2, banner3, btnLink, btnTitle, title, subTitle }, index) => (
                        <HeroSlide key={index} banner1={banner1} banner2={banner2} banner3={banner3} btnLink={btnLink}
                            btnTitle={btnTitle} title={title} subTitle={subTitle} />
                    ))}
                </Slider>
            </section>

        </>
    )
}

export default HeroIntro