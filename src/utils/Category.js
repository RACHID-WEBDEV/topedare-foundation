import React, { useState, useEffect } from 'react'
import PagesIntro from '../components/global/PagesIntro';
import blogdata from '../data/blog';
// import BlogCard from '../components/section/BlogCard';
import { useLocation } from 'react-router-dom';
import { kebabCase } from '../utils/utils'
import Helmets from './Helmet';
import { Fade } from 'react-reveal';
import SectionSubTitle from './../components/section/SectionSubTitle';
import Pagination from '../components/Pagination';
import { LargeBlogcard } from '../components/BlogCards';
import BlogBtn from '../components/form/BlogBtn';


const Blog = () => {

    const { pathname } = useLocation()
    const categoryPath = pathname.replace('/blog/category/', '')
    let posts = blogdata.filter((blog) => kebabCase(blog.category) === categoryPath.toLowerCase());

    // console.log('categoryRender', posts)
    // const renderCategory = posts.map(({ blogImg, comments, description, date, title, id, url, category, short_desc }, idx) => (
    //     <>
    //         <LargeBlogcard key={idx} blogPhoto={blogImg} id={id} slug={url} comments={comments} category={category} description={description} date={date} title={title} short_desc={short_desc} />
    //     </>
    // ))



    const [showPost, setShowPost] = useState(posts.slice(0, 18))

    const [pageNumber, setPageNumber] = useState(0);
    // scrollTo top
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [pageNumber]);

    const postPerPage = 3;
    const pagesVisited = pageNumber * postPerPage;

    const displayPosts = showPost
        .slice(pagesVisited, pagesVisited + postPerPage)
        .map(({ blogImg, comments, description, date, title, id, url, category, short_desc }, idx) => (
            <>
                {/* <BlogCard key={idx} blogImg={blogImg} comments={comments} description={description} date={date} title={title} url={url} /> */}
                <LargeBlogcard key={idx} blogPhoto={blogImg} id={id} slug={url} comments={comments} category={category} description={description} date={date} title={title} short_desc={short_desc} />
            </>
        ))

    const pageCount = Math.ceil(showPost.length / postPerPage);

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
                    {/* {
                        !displayPosts &&
                        <>
                            <Fade bottom>
                                <SectionSubTitle className="text-center pb-5" subTitle="No Category found" />
                            </Fade>
                        </>
                    } */}

                    <div className="container">
                        {/* <div className="flex items-center gap-2 flex-wrap"> */}
                        <div className="grid grid-cols-1 gap-6 px-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                            {displayPosts}

                        </div>
                        {setShowPost &&
                            <Pagination pageCount={pageCount} onPageChange={changePage} />
                        }
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