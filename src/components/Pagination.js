import React from 'react'
// import { LeftArrow, RightArrow } from '../assets/svgsIcons';
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, changePage }) => {
    return (
        <ReactPaginate
            // previousLabel={
            //     <button type="button" className="text-tdf-blue-50 border border-tdf-blue-50 p-3 rounded-full hover:text-white hover:bg-tdf-blue-100 justify-center transition-colors gap-2 inline-flex items-center">
            //         <LeftArrow />
            //     </button>
            // }

            // nextLabel={<button type="button" className="text-tdf-blue-50 border border-tdf-blue-50 p-3 rounded-full hover:text-white hover:bg-tdf-blue-100 justify-center transition-colors inline-flex items-center">
            //     <RightArrow />
            // </button>}

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
    )
}

export default Pagination