import React, { useState } from 'react'
import PagesIntro from './../components/global/PagesIntro';
import blogdata from '../data/blog';
import BlogCard from '../components/section/BlogCard';
// import ReactPaginate from "react-paginate";
// import { Link } from 'react-router-dom';
// import { LeftArrow, RightArrow } from '../assets/svgsIcons';


export function Pagination({ RenderComponent, title, pageLimit, dataLimit }) {
    const data = blogdata
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };

    return (
        <div>
            <h1>{title}</h1>

            {/* show the posts, 10 posts at a time */}
            <div className="dataContainer">
                {getPaginatedData().map(({ blogImg, comments, description, date, title, url }, idx) => (
                    <BlogCard key={idx} blogImg={blogImg} comments={comments} description={description} date={date} title={title} url={url} />
                ))}
            </div>

            {/* show the pagiantion
        it consists of next and previous buttons
        along with page numbers, in our case, 5 page
        numbers at a time
    */}
            <div className="pagination">
                {/* previous button */}
                <button
                    onClick={goToPreviousPage}
                    className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                >
                    prev
                </button>

                {/* show page numbers */}
                {getPaginationGroup().map((item, index) => (
                    <button
                        key={index}
                        onClick={changePage}
                        className={`paginationItem ${currentPage === item ? 'active' : null}`}
                    >
                        <span>{item}</span>
                    </button>
                ))}

                {/* next button */}
                <button
                    onClick={goToNextPage}
                    className={`next ${currentPage === pages ? 'disabled' : ''}`}
                >
                    next
                </button>
            </div>
        </div>
    )
}


const Blog = () => {
    // const [users, setUsers] = useState(blogdata.slice(0, 50));
    // const [pageNumber, setPageNumber] = useState(0);

    // const usersPerPage = 6;
    // const pagesVisited = pageNumber * usersPerPage;

    // const displayUsers = users
    //     .slice(pagesVisited, pagesVisited + usersPerPage)
    //     .map(({ blogImg, comments, description, date, title, url }, idx) => (
    //         <BlogCard key={idx} blogImg={blogImg} comments={comments} description={description} date={date} title={title} url={url} />
    //     ))

    // const pageCount = Math.ceil(users.length / usersPerPage);

    // const changePage = ({ selected }) => {
    //     setPageNumber(selected);
    // };


    // const [posts, setPosts] = useState([]);





    return (
        <>
            <PagesIntro title="Our Blog" />
            <div>
                <div className="py-10 px-2 lg:px-16 text-center ">
                    <div className="container">
                        <div className="flex flex-wrap">

                            {/* <div>
                                {posts.length > 0 ? (
                                    <>
                                        <Pagination
                                            data={posts}
                                            RenderComponent={BlogCard}
                                            title="Posts"
                                            pageLimit={5}
                                            dataLimit={10}
                                        />
                                    </>
                                ) : (
                                    <h1>No Posts to display</h1>
                                )}
                            </div> */}


                            {/* {
                                blogdata.map(({ blogImg, comments, description, date, title, url }, idx) => (
                                    <BlogCard key={idx} blogImg={blogImg} comments={comments} description={description} date={date} title={title} url={url} />
                                ))
                            } */}

                            {/* {displayUsers} */}
                            {/*<RightArrow /> <LeftArrow /> */}
                            {/* {setUsers &&
                                <ReactPaginate
                                    previousLabel={"Prev"}

                                    nextLabel={"Next"}
                                    pageCount={pageCount}
                                    onPageChange={changePage}
                                    containerClassName={"paginationBttns"}
                                    previousLinkClassName={"previousBttn"}
                                    nextLinkClassName={"nextBttn"}
                                    // disabledClassName={"paginationDisabled"}
                                    activeClassName={"paginationActive"}
                                />

                            } */}


                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Blog