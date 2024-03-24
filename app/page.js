import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
// import Form2 from "@/components/Form2";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <Banner />
      <Hero />
      <Form />
      {/* <Form2 /> */}
      <Footer />
    </div>
  );
}
