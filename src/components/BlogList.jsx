import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
// Optional: Import line-clamp plugin styles if needed
// import "tailwindcss-line-clamp";

const BlogList = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8800";
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchPublishedBlogs = async () => {
      try {
        const res = await axios.get(`${baseURL}/api/blogs`);
        setBlogs(res.data);
      } catch (err) {
        console.error("Failed to load blogs", err);
      }
    };
    fetchPublishedBlogs();
  }, []);

  // const renderBlogCard = (blog) => {
  //   let tagsArray = [];
  //   try {
  //     tagsArray = Array.isArray(blog.tags) ? blog.tags : JSON.parse(blog.tags);
  //   } catch {}

  //   return (
  //     <div
  //       key={blog._id}
  //       className="bg-[#1a1a1a] border border-[#FBD3AF] rounded-xl overflow-hidden shadow-md flex flex-col h-full"
  //     >
  //       <img
  //         src={
  //           blog.coverImage
  //             ? `${baseURL}${blog.coverImage}`
  //             : `${baseURL}/room_images/08.jpg`
  //         }
  //         alt={blog.title}
  //         className="w-full h-48 object-cover"
  //         loading="lazy"
  //       />
  //       <div className="p-5 flex-1 flex flex-col justify-between">
  //         <div>
  //           <h3 className="text-xl font-semibold text-[#FBD3AF] mb-2">
  //             {blog.title}
  //           </h3>
  //           <p className="text-gray-300 text-sm mb-3 italic line-clamp-3">
  //             {blog.description}
  //           </p>
  //           <p className="text-xs text-gray-500 mb-4">
  //             Tags: {tagsArray.join(", ")}
  //           </p>
  //         </div>
  //         <Link
  //           to={`/blogs/${blog.slug}`}
  //           className="inline-block text-sm text-[#FBD3AF] hover:underline font-medium mt-auto"
  //         >
  //           Read More →
  //         </Link>
  //       </div>
  //     </div>
  //   );
  // };
const renderBlogCard = (blog) => {
  let tagsArray = [];
  try {
    tagsArray = Array.isArray(blog.tags)
      ? blog.tags
      : JSON.parse(blog.tags.replace(/\\+/g, "")); // Cleanup extra slashes
  } catch {
    tagsArray = [];
  }

  return (
    <div
      key={blog._id}
      className="bg-[#1a1a1a] border border-[#FBD3AF] rounded-xl overflow-hidden shadow-md flex flex-col min-h-[350px]"
    >
      <img
        src={
          blog.coverImage
            ? `${baseURL}${blog.coverImage}`
            : `${baseURL}/room_images/08.jpg`
        }
        alt={blog.title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-[#FBD3AF] mb-2 line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-gray-300 text-sm mb-3 italic line-clamp-3">
            {blog.description}
          </p>
        </div>
        <Link
          to={`/blogs/${blog.slug}`}
          className="inline-block text-sm text-[#FBD3AF] hover:underline font-medium mt-auto"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

  return (
    <div className="bg-black text-white py-20 px-6 md:px-10">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-serif text-[#FBD3AF] tracking-wide mb-4">
          — OUR BLOGS —
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto font-light text-lg">
          Dive into stories, updates, and travel inspiration from Amartarangini.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {blogs.length > 0 && (
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={blogs.length > 1}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Autoplay]}
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog._id}>
                <div className="px-3 h-full flex">
                  <div className="w-full max-w-md mx-auto h-full">
                    {renderBlogCard(blog)}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default BlogList;
