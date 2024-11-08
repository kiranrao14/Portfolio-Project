
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  return (
    <div id="projects" className="space-y-10"> {/* This will add space between each project */}
      <h1 className='text-white font-serif font-semibold  '>Projects</h1>
       <Image src="/image/Component 16.png" height={50} width={500} alt='img'/>

      {/* Sushi-food-Website Section */}
      <div className="project-container">
        <h1 className='text-amber-400 font-semibold mt-4'>Sushi-food-Website</h1>
        <video
          src="/image/Create Next App - Google Chrome 2024-10-29 21-06-44.mp4"
          controls
          className="w-full max-w-lg rounded-lg shadow-lg mb-4 mt-7"
        ></video>
        <Link
          href="https://sushi-food-website.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline mt-2"
        >
          View on Vercel
        </Link>

        <Link
          href="https://github.com/kiranrao14/sushi-food-website/blob/main/src/app/page.tsx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline pl-12"
        >
          View on GitHub
        </Link>
      </div>

      {/* Countdown Timer Section */}
      <div className="project-container">
        <h1 className='text-amber-400 font-semibold mt-8'>Countdown Timer</h1>
        <video
          src="image/Create Next App - Google Chrome 2024-10-17 13-54-28.mp4" // Replace with your actual video file path
          controls
          className="w-full max-w-lg rounded-lg shadow-lg mb-4 mt-7"
        ></video>
        <Link
          href="https://countdown-timer-nu-five.vercel.app/" // Replace with your actual Vercel link
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline mt-2"
        >
          View on Vercel
        </Link>

        <Link
          href="https://github.com/kiranrao14/countdown-Timer"  // Replace with your actual GitHub repo link
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline pl-12"
        >
          View on GitHub
        </Link>
      </div>
      <div className="project-container max-w-md mx-auto p-4 bg-gray-700">
        <h1 className='text-amber-400 font-semibold mt-4 mb-4'>Words-Counter</h1>
        <Image src=
        "/image/Screenshot_2024-11-08-18-03-20-82_254de13a4bc8758c9908fff1f73e3725.jpg"
        height={50} width={450} alt="img-word-counter"/>
        
        

        <Link
          href="https://github.com/kiranrao14/word-counter" // Replace with the actual GitHub repo link
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline pl-12 "
        >
          View on GitHub
        </Link>
      </div>
      <div className="project-container max-w-md mx-auto p-4 bg-gray-700 ">
        <h1 className='text-amber-400 font-semibold mt-4 mb-4'>TodoListApp</h1>
        <Image src='/image/Frame 3762 1.jpg'height={100} width={400} alt='img-todo-app'/>
        <Link
          href="https://github.com/kiranrao14/todo_list" // Replace with the actual GitHub repo link
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline pl-12 "
        >
          View on GitHub
        </Link>
      </div>



    </div>
  );
};

export default Projects;
  
