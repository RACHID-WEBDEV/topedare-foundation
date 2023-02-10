import React, { useState, useEffect } from 'react'
import BlogCard from '../src/components/section/BlogCard';
import ReactPaginate from "react-paginate";


const Blogtest = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [pageNumber, setPageNumber] = useState(0);
    // scrollTo top
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [pageNumber]);

    const url = 'https://jsonplaceholder.typicode.com/posts';



    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (response.ok) return response.json();
                throw new Error('something went wrong while requesting posts');
            })
            .then((posts) => setPosts(posts))
            .catch((error) => setError(error.message));
    }, []);

    if (error) return <h1>{error}</h1>;

    const usersPerPage = 9;
    const pagesVisited = pageNumber * usersPerPage;

    const displayUsers = posts
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map(({ blogImg, comments, body, date, title, url, id }, idx) => (
            <BlogCard key={idx} blogImg={blogImg} comments={comments} description={body} date={id} title={title} url={url} />
        ))

    const pageCount = Math.ceil(posts.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div>
            {displayUsers}

            {/* {setUsers && */}
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
        </div>
    )
}

export default Blogtest



// import React, { useState, useEffect } from 'react'
// import PagesIntro from './../components/global/PagesIntro';
// import blogdata from '../data/blog';
// // import BlogCard from '../components/section/BlogCard';

// import Helmets from './Helmet';
// import Pagination from '../components/Pagination';
// import { LargeBlogcard } from '../components/BlogCards';
// import useSWR from 'swr';
// import parse from "html-react-parser";

// const Blog = () => {

//     const { data, error } = useSWR(`${process.env.REACT_APP_BASE_URL}public/content/posts?user=${process.env.REACT_APP_USER_lOGIN_ID}`)
//     console.log('result blog', data?.data?.posts?.map(({ category }) => {
//         return (category.label)
//     }))


//     const [showPost, setShowPost] = useState(blogdata.slice(0, 18))

//     const [pageNumber, setPageNumber] = useState(0);
//     // scrollTo top
//     useEffect(() => {
//         window.scrollTo({ behavior: 'smooth', top: '0px' });
//     }, [pageNumber]);

//     const postPerPage = 6;
//     const pagesVisited = pageNumber * postPerPage;

//     const displayUsers = showPost
//         .slice(pagesVisited, pagesVisited + postPerPage)
//         .map(({ blogImg, comments, description, date, title, id, url, category, short_desc }, idx) => (
//             <>
//                               <LargeBlogcard key={idx} blogPhoto={blogImg} id={id} slug={url} comments={comments} category={category} description={description} date={date} title={title} short_desc={short_desc} />
//             </>
//         ))

//     const pageCount = Math.ceil(showPost.length / postPerPage);

//     const changePage = ({ selected }) => {
//         setPageNumber(selected);
//     };


//     return (
//         <>
//             <Helmets title="Our Blog Page" />
//             <PagesIntro title="Our Blog" />
//             <div>
//                 <div className="py-10 px-2 lg:px-16  ">
//                     <div className="container">
                     
//                         <div className="grid grid-cols-1 gap-6 px-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
//                             {displayUsers}
//                             {
//                                 data?.data?.posts?.map(({ title, image, category, content }, idx) => {
//                                     return (
//                                         <LargeBlogcard key={idx} title={title} blogPhoto={image} category={category.label} short_desc={parse(content.substring(0, 299))
//                                         } />
//                                     )
//                                 })
//                             }

//                         </div>
//                         {setShowPost &&
//                             <Pagination pageCount={pageCount} onPageChange={changePage} />
//                         }
//                     </div>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default Blog