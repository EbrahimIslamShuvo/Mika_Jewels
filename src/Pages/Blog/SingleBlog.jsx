import React from 'react';
import useBlog from '../../Data/useBlog';
import { useParams } from 'react-router-dom';
import { BiLogoFacebook } from 'react-icons/bi';

const SingleBlog = () => {
  const { id } = useParams();
  const { blogs } = useBlog();

  // Find the blog by id (converted to number for safety)
  const blog = blogs?.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div className="text-center py-20 text-red-500 text-xl font-semibold">
        Blog not found.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <img
        src={blog.thumbnail}
        alt="Blog Thumbnail"
        className="rounded-xl shadow-lg mb-6 w-full object-cover"
      />

      <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        Published on {blog.publish_date} • {blog.comment_count} comments
      </p>

      <p className="text-lg text-gray-700 italic mb-6">
        {blog.short_description}
      </p>

      <div className="space-y-5 mb-10">
        {blog.description?.map((para, index) => (
          <p key={index} className="text-base leading-relaxed">
            {para}
          </p>
        ))}
      </div>

      <div className="flex items-center gap-2 text-blue-600">
        <BiLogoFacebook className="text-2xl" />
        <span>Share on Facebook</span>
      </div>

      <hr className="my-10" />

      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      <div className="space-y-4">
        {blog.comments?.map((comment, i) => (
          <div key={i} className="bg-gray-100 p-4 rounded-md shadow-sm">
            <p className="text-sm text-gray-600 font-medium">
              {comment.commentor_name} — <span className="text-xs">{comment.date}</span>
            </p>
            <p className="mt-1 text-gray-800">{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleBlog;
