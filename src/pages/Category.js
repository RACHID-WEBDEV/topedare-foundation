import React, { useState, useEffect } from 'react'
import PagesIntro from '../components/global/PagesIntro';
import { useLocation } from 'react-router-dom';
import Helmets from './Helmet';
import { Fade } from 'react-reveal';
import SectionSubTitle from './../components/section/SectionSubTitle';
import { LargeBlogcard } from '../components/BlogCards';
import BlogBtn from '../components/form/BlogBtn';
import useSWR from 'swr';
import parse from "html-react-parser";
import ReactPaginate from 'react-paginate';
const _config = require("../config.json")


const Blog = () => {

    const { pathname } = useLocation()
    const categoryPath = pathname.replace('/blog/category/', '')

    const { data, error } = useSWR(`${_config.REACT_APP_BASE_URL}public/content/posts?user=${_config.REACT_APP_USER_lOGIN_ID}`)
    if (error) console.log(error)


    const gettAllCategory = data?.data?.posts

    const AllCategory = gettAllCategory?.filter((item) => {
        return (item.category.value === categoryPath)
    })

    const [pageNumber, setPageNumber] = useState(0);
    // scrollTo top
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [pageNumber]);

    const postPerPage = 6;
    const pagesVisited = pageNumber * postPerPage;

    const displayPosts = AllCategory?.slice(pagesVisited, pagesVisited + postPerPage)?.map(({ title, image, category, content, id }) => (
        <>
            <LargeBlogcard key={id} title={title} blogPhoto={image} category={category.label} short_desc={parse(content.substring(0, 299))
            } />
        </>
    ))

    const pageCount = Math.ceil(AllCategory?.length / postPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <>
            <Helmets title="Our Category Page" />
            <PagesIntro title="Category " />
            <div>
                <div className="py-10 px-2 lg:px-16  ">
                    <Fade bottom>
                        <SectionSubTitle className="text-center capitalize pb-5" subTitle={`Category - ${categoryPath.replaceAll('-', " ")}`}
                        />
                    </Fade>

                    <div className="container">
                        {/* <div className="flex items-center gap-2 flex-wrap"> */}
                        <div className="grid grid-cols-1 gap-6 px-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                            {displayPosts}

                        </div>
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
                        <div className="flex items-center justify-center mt-6">
                            <BlogBtn title="Go Back" url={-1} arrow={false} />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog