import React from 'react';

const BlogCardd = ({blog}) => {
    return (
        <div>
            <div className="">
                <div className="group h-63 overflow-hidden">
                    <img src={blog.thumbnail} alt="" />
                    <div className=" text-center bg-black/55 text-white transform group-hover:-translate-y-38 duration-700 px-5 py-3">
                        <p className='text-lg font-semibold'>{blog.publish_date}</p>
                        <h1 className='text-xl font-bold my-3'>{blog.title}</h1>
                        <p className='text-gray-200'>{blog.short_description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCardd;