   "use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTextExpanded, setIsTextExpanded] = useState(false); // State to toggle text visibility


 const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
 const toggleText = () => setIsTextExpanded(!isTextExpanded); // Function to toggle expanded text


  return (
    <div className="flex flex-col items-center pt-2 rounded-3xl overflow-hidden min-h-[600px] w-[800px] mx-auto mt-14">
      <div className="md:hidden flex justify-between items-center w-full px-4">
        <button onClick={handleMenuToggle} className="text-white">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
     <ul
        className={`${isMenuOpen ? "block" : "hidden"} md:flex md:justify-end md:space-x-6 text-white uppercase mt-4 md:mt-0`}
      >
        <Link href="#about">
          <li className="bg-black rounded-2xl font-mono p-2  ">About</li>
        </Link>
        <Link href="#projects">
          <li className="bg-black rounded-2xl font-mono p-2 ml-4">Projects</li>
        </Link>
        <Link href="#skills">
          <li className="bg-black rounded-2xl font-mono p-2 ml-4">Skills</li>
        </Link>
        <Link href="#contact">
          <li className="bg-black rounded-2xl font-mono p-2 ml-3">Contact</li>
        </Link>
      </ul>

      {/* Image with fade-in effect */}
       <div className="image-container opacity-0 transform translate-y-10 transition-opacity duration-1000 ease-in-out">
         <Image
          src="/image/Frame_3762-removebg-preview.png"
          height={100}
          width={300}
          alt="logo-img"
          className="rounded-full mt-8"
        />
      </div>

       {/* Text with fade-in effect */}  
            <div className=" text-container text-center mt-6 opacity-1 transform translate-y-10 transition-opacity duration-1000 ease-in-out delay-300">
       <h1 className="text-white text-2xl md:text-3xl font-bold font-sans">Hey</h1>
        <h2 className="text-white text-lg md:text-2xl font-semibold mt-2">
           I&apos;m Kiran Rao
           <br />      
               <span className="text-yellow-400">Frontend Developer</span>
         </h2>
          <p className="text-white text-sm md:text-lg mt-4 pr-6">
            Passionate about creating dynamic and responsive websites. I specialize in <br />
           frontend development, with a strong focus on user experience and clean,
           scalable code.
            <br /> Always eager to learn new technologies and tackle exciting challenges.
          </p>
       </div>
        {/* //Buttons  */}
        <div className="flex space-x-4 mt-4">
         {/* <button className="bg-black text-white rounded-2xl pr-6 p-2 mt-4 opacity-0 transform translate-x-10 transition-opacity duration-1000 ease-in-out">           Learn More
         </button> */}


 <div className="flex space-x-4 mt-4">
         <button
           onClick={toggleText} // Toggle text visibility
           className="bg-black text-white rounded-2xl pr-6 p-2 mt-4 opacity-0 transform translate-x-10 transition-opacity duration-1000 ease-in-out " >
           {isTextExpanded ? "Learn Less" : "Learn More"}
         </button>
         <button className="bg-black text-white rounded-2xl p-2 mt-4 opacity-0 transform translate-x-10 transition-opacity duration-1000 ease-in-out">          Contact Me         </button>
       </div>

       </div>
     </div>
   );
 };

 export default Nav;
  
        
        
