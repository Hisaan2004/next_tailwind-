import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Intropage from "@/app/components/Intropage";
import Skills from "@/app/components/Skills";
import Educationpage from "@/app/components/Educationpage";
import Projects from "@/app/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 ">
      <div className="flex-grow">
        <Navbar />
        <div id="Intropage"><Intropage /></div>
        <div id="Educationpage"><Educationpage /></div>
        
        <div id="Projects"><Projects /></div>
        <div id="Skills"><Skills /></div>
      </div>
      <Footer />
    </div>
  );
}
