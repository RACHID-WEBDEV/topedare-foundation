import { Link } from "react-router-dom";
import { Comment } from "../assets/svgsIcons";
import { kebabCase } from "../utils/utils";
import { BlogBtn2 } from "./form/BlogBtn";

export const LargeBlogcard = ({ blogPhoto, category, id, short_desc, title, slug }) => (
    <div className="border border-gray-200  p-2 rounded-lg group">
        <Link to={`/blog/${kebabCase(title)}`}>
            <div className="relative overflow-hidden rounded-md w-full max-h-96 h-80 ">
                <img className="transform group-hover:scale-110 w-full h-full rounded-xl mb-6 transition-transform duration-500" src={blogPhoto} alt="blog" />
                <span className="bg-yellow-300 absolute bottom-2 left-2 text-darken text-xs font-semibold px-4 py-1 uppercase  rounded-full">{category}</span>
            </div>
        </Link>
        <Link to={`/blog/${kebabCase(title)}`}>
            <h1 className="text-gray-900 font-bold my-3 lg:mt-4 capitalize font-DmSans text-xl lg:text-2xl two-row-paragraph">{title}</h1>

        </Link>
        <div className="text-gray-600 text-base lg:text-xl mb-3  two-row-paragraph">{short_desc}</div>
        {/* <Link to={`/blog/${id}`} className="underline">Read more</Link> */}
        <div className="flex items-center justify-between py-4 pt-6 px-2">
            <BlogBtn2 title="Blog details" url={`/blog/${kebabCase(title)}`} />

            <div className="text-gray-800 hover:text-tdf-blue-50 inline-flex items-center gap-2">
                <Comment /> <p className="font-medium text-base leading-none">Comments</p>
            </div>

        </div>



    </div>
)