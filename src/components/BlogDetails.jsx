import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/blogs/${slug}`);
        setBlog(res.data);
      } catch (err) {
        console.error("Failed to load blog", err);
      }
    };

    fetchBlog();
  }, [slug]);

  if (!blog) return <p className="text-white p-10">Loading blog...</p>;

  let tagsArray = [];
  try {
    tagsArray = Array.isArray(blog.tags) ? blog.tags : JSON.parse(blog.tags);
  } catch {}

  return (
    <div className="bg-black text-white py-20 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-[#FBD3AF] mb-4">{blog.title}</h1>
        <p className="text-sm text-gray-400 italic mb-2">By {blog.author?.fullName}</p>

        {blog.coverImage && (
          <img
            src={`http://localhost:8800${blog.coverImage}`}
            alt={blog.title}
            className="w-full max-h-[300px] object-cover rounded-lg mb-6 shadow-md"
          />
        )}

        <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-line mb-6">
          {blog.content}
        </div>

        <div className="text-sm text-gray-500 italic">Tags: {tagsArray.join(", ")}</div>
      </div>
    </div>
  );
};

export default BlogDetails;
