import React, { useState, useEffect } from 'react'
import PagesIntro from './../components/global/PagesIntro';
// import BlogCard from '../components/section/BlogCard';
import ReactPaginate from "react-paginate";
import Helmets from './Helmet';
import { LargeBlogcard } from '../components/BlogCards';
import useSWR from 'swr';
import parse from "html-react-parser";
const _config = require("../config.json")


const Blog = () => {
    const { data, error } = useSWR(`${_config.REACT_APP_BASE_URL}public/content/posts?user=${_config.REACT_APP_USER_lOGIN_ID}`)

    if (error) console.log(error)
    const [pageNumber, setPageNumber] = useState(0);
    // scrollTo top
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [pageNumber]);

    const postPerPage = 6;
    const pagesVisited = pageNumber * postPerPage;

    const displayPosts = data?.data?.posts?.slice(pagesVisited, pagesVisited + postPerPage)?.map(({ title, image, category, content, id }) => (
        <>
            <LargeBlogcard key={id} title={title} blogPhoto={image} category={category.label} short_desc={parse(content.substring(0, 299))
            } />
        </>
    ))

    const pageCount = Math.ceil(data?.data?.posts?.length / postPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <>
            <Helmets title="Our Blog Page" />
            <PagesIntro title="Our Blog" />
            <div>
                <div className="py-10 px-2 lg:px-16  ">
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

                    </div>
                </div>

            </div>
        </>
    )
}

export default Blog