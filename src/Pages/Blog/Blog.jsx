import React from 'react';
import Header from '../../Component/Shared/Header';
import useBlog from '../../Data/useBlog';
import BlogCard from '../../Component/Shared/BlogCard';
import BlogCardd from '../../Component/Shared/BlogCardd';

const Blog = () => {
    const {blogs} = useBlog()

    return (
        <div>
            <div className="">
                <div className="w-9/12 mx-auto">
                    <Header name={"Blog"}></Header>
                    <div className="grid grid-cols-3 gap-10">
                        {
                            blogs.map(blog =>(
                                <div className="">
                                    <BlogCardd blog={blog}></BlogCardd>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;