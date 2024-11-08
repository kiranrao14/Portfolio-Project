

import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className=" flex flex-col lg:flex-row items-center 
     pt-8 rounded-3xl min-h-[600px] w-[800px] mx-auto mt-14 gap-8">
      <div className="flex-1">
        <Image 
          src="/image/Group 6 (1).jpg" 
          height={400} 
          width={400} 
          alt="about-img" 
          className="rounded-2xl ml-6"
        />
      </div>
      <div className="flex-1 text-white text-center lg:text-left">
        <h1 className="text-amber-400 font-bold mb-4">About Me</h1>
        <p className="text-lg">
          I am a passionate frontend developer with <br/>
           experience in creating beautiful,<br/> responsive websites using 
           modern web technologies. I strive to create <br/>
           user-friendly<br/>
            and high-performance web applications<br/> with a focus on clean<br/>
             and maintainable code.
        </p>
      </div>
    </div>
  );
}

export default About;
       
        
