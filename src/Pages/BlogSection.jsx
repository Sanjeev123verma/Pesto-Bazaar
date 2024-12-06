// BlogSection.js
import React, { useState } from 'react';

const BlogPost = ({ title, content, extraContent, imageUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (

    <div className="bg-white md:p-6 p-2 rounded-lg shadow-md font-abc">
      <img src={imageUrl} alt={title} className="w-full h-50 object-cover rounded-t-lg md:mb-4" />
      <h3 className="text-xl font-semibold md:mb-4">{title}</h3>
      <p className="text-gray-700 md:mb-4">{content}</p>
      {isExpanded && <p className="text-gray-700 md:mb-4">{extraContent}</p>}
      <button 
        onClick={handleReadMore} 
        className="text-blue-500 hover:underline"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

const BlogSection = () => {
  const blogPosts = [
    {
      title: 'Blog Post 1',
      content: 'This is a short preview of the first blog post...',
      extraContent: 'This is the extra content for the first blog post. It is initially hidden and shown when the user clicks "Read More".',
      imageUrl: 'https://via.placeholder.com/600x400' // Replace with actual image URL
    },
    {
      title: 'Blog Post 2',
      content: 'This is a short preview of the second blog post...',
      extraContent: 'This is the extra content for the second blog post. It is initially hidden and shown when the user clicks "Read More".',
      imageUrl: 'https://via.placeholder.com/600x400' // Replace with actual image URL
    },
    {
      title: 'Blog Post 3',
      content: 'This is a short preview of the third blog post...',
      extraContent: 'This is the extra content for the third blog post. It is initially hidden and shown when the user clicks "Read More".',
      imageUrl: 'https://via.placeholder.com/600x400' // Replace with actual image URL
    },
  ];

  return (
    <section className="container mx-auto md:py-10">
      <h2 className=" bg-[#1c085d] max-w-full mx-auto text-white text-3xl font-semibold font-abc text-center p-4"> BLOGS </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <BlogPost 
            key={index} 
            title={post.title} 
            content={post.content} 
            extraContent={post.extraContent} 
            imageUrl={post.imageUrl} 
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
