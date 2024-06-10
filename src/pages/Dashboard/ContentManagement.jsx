import { Link } from "react-router-dom";

const ContentManagement = () => {
    return (
        <div className="my-6">
            {/* <h2 className="text-4xl font-bold text-[#ff0054] text-center">Content Management</h2> */}
            <div className="w-[90%] mx-auto mt-10 flex justify-end">
                <Link to='/dashboard/add_blog'>
                    <button className="btn bg-[#ff0054] text-white px-12 ">Add Blog</button>
                </Link>
            </div>
            
        </div>
    );
};

export default ContentManagement;