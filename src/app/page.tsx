
import Nav from "./Navbar/Nav";
import About from  "./About/About"
import Projects from "./Projects/Projects";
import Skill from "./Skill/Skill";
import Contact from "./Contact/Contact";


export default function Home() {
  return (
   <>

   <div className="bg-slate-900 in-h-screen flex flex-col 
   
  min-h-[600px] items-center pt-2 rounded-3xl border-[30px] border-slate-800 
     w-[800px] mx-auto mt-14"> 
   <Nav/>
     <About/> 
     <Projects/>   
     <Skill/>
     <Contact/>
    </div>
          
    
       
    
    </>
 );
 }

