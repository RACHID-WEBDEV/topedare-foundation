import React, { useState, useEffect } from 'react'
import PagesIntro from './../components/global/PagesIntro';
import { Fade } from 'react-reveal';
import SectionSubTitle from './../components/section/SectionSubTitle';
import CTA from './../components/section/CTA';
import SectionTitle from './../components/section/SectionTitle';
import Helmets from './Helmet';
import ReactPaginate from "react-paginate";

import Modal from '../components/Modal'
import data from "../data/images.json";



const Gallery = () => {

    const [showPost, setShowPost] = useState(data?.data)
    const [pageNumber, setPageNumber] = useState(0);

    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick = (item, index) => {
        setCurrentIndex(index);
        setClickedImg(item.imgLink);
    };

    const handelRotationRight = () => {
        const totalLength = data.data.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = data.data[0].imgLink;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = data.data.filter((item) => {
            return data.data.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].imgLink;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    const handelRotationLeft = () => {
        const totalLength = data.data.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = data.data[totalLength - 1].imgLink;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = data.data.filter((item) => {
            return data.data.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].imgLink;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    // scrollTo top
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [pageNumber]);

    const postPerPage = 15;
    const pagesVisited = pageNumber * postPerPage;

    const displayPosts = showPost
        .slice(pagesVisited, pagesVisited + postPerPage)
        .map((item, index) => (
            <div key={index} className="break-inside border rounded-lg p-3 mb-5">
                <span onClick={() => handleClick(item, index)} className="overflow-hidden group rounded-lg">
                    <img onClick={() => handleClick(item, index)} className="pic w-full  rounded-lg" src={item.imgLink} alt={item.subTitle} loading="lazy" />
                </span>
            </div>
            // <span key={index} onClick={() => handleClick(item, index)} className="overflow-hidden group  rounded-lg">
            //     <img onClick={() => handleClick(item, index)} className="pic  w-full mb-6 rounded-lg" src={item.imgLink} alt={item.subTitle} loading="lazy" />
            // </span>
        ))

    const pageCount = Math.ceil(showPost.length / postPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };


    return (
        <div>

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
                {/* gap-8 columns-1 lg:columns-sm  */} {/* aspect-square  -> to image tag below*/}
                <div className="masonry-3-col ">
                    {/* {
                        data.data.map((item, index) => (
                            <span key={index} onClick={() => handleClick(item, index)} className="overflow-hidden group rounded-lg">
                                <img onClick={() => handleClick(item, index)} className="pic  w-full mb-6 rounded-lg" src={item.imgLink} alt={item.subTitle} loading="lazy" />
                            </span>
                        ))
                    } */}

                    {displayPosts}
                </div>
                <div className="mb-10">
                    {setShowPost &&
                        <ReactPaginate
                            previousLabel={<span >&#x2039; </span>}
                            nextLabel={<span >   &#8250;</span>}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={"paginationBttns"}
                            previousLinkClassName={"previousBttn"}
                            nextLinkClassName={"nextBttn"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"}
                        />
                    }

                </div>

                {/* <>
                    <h3 className="mb-2 text-3xl">Masonry Design with TailwindCss</h3>

                    <div className="masonry-3-col">
                        {
                            data.data.map((item, index) => (
                                <div key={index} className="break-inside border p-3 mb-3">
                                    <span onClick={() => handleClick(item, index)} className="overflow-hidden group rounded-lg">
                                        <img onClick={() => handleClick(item, index)} className="pic  w-full mb-6 rounded-lg" src={item.imgLink} alt={item.subTitle} loading="lazy" />
                                    </span>
                                </div>

                            ))
                        }
                        
                    </div>
                </> */}

                {/* <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 p-2 lg:p-8">
                    {
                        galleryData.map((item, index) => (
                            <span key={index} >
                                <Fade bottom>
                                    <div onClick={() => handleClick(item, index)} className="relative max-h-[450px] min-h-[300px] overflow-hidden block group rounded-lg">
                                        <img
                                            onClick={() => handleClick(item, index)}
                                            className="w-full h-full min-h-[300px] object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-500 " src={item.imgLink} alt={item.title} loading="lazy" />
                                        <div className="absolute rounded-lg flex items-end bottom-0 left-0 pb-5 pl-5 rounded-b-lg pt-2 bg-gray-900 bg-opacity-30 w-full h-full">
                                            <div>
                                                <h5 className="text-2xl font-medium mb-1 text-white">{item.title}</h5>
                                                <p className="text-base font-medium text-gray-100">{item.subTitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </span>
                        ))
                    }


                </div> */}
                <div>
                    {clickedImg && (
                        <Modal
                            clickedImg={clickedImg}
                            handelRotationRight={handelRotationRight}
                            setClickedImg={setClickedImg}
                            handelRotationLeft={handelRotationLeft}
                        />
                    )}
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