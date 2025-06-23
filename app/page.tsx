import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <div className="flex-grow">
        <Navbar />
        {/* You can place additional page content here */}
      </div>
      <Footer />
    </div>
  );
}