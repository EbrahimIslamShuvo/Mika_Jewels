import React from 'react';

const BlogCard = ({blog}) => {
    console.log(blog);
    
    return (
        <div>
            <div className="">
                <div className="group overflow-hidden h-100">
                    <img className='' src={blog.thumbnail} alt="" />
                    <div className=" relative z-50 julius-sans-one-font text-center bg-black/55 text-white transform -translate-y-0 group-hover:-translate-y-66 duration-700 px-10">
                        <p className='text-2xl font-bold pt-10'>{blog.publish_date}</p>
                        <h1 className='pt-15 text-3xl font-bold'>{blog.title}</h1>
                        <p className='pt-5 text-lg pb-5'>{blog.short_description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;