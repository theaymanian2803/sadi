import Image from "next/image";
import image1 from "@/assets/1.png";
import image2 from "@/assets/2.png";
function Hero() {
  return (
    <div>
      <div className="hero min-h-[600px] bg-slate-100 relative overflow-hidden ">
        <div className="hero-content w-full flex-col lg:flex-row gap-10">
          <div className="mt-10 relative p-4 h-[300px] lg:h-[700px] w-full">
            <Image
              src={image1}
              alt="Hero Image"
              width={600}
              height={600}
              className="object-contain mt-3 h-full lg:w-[460px] absolute top-2 left-0 "
            />
          </div>
          <div className=" text-center lg:text-left  ">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button id="contact" className="btn btn-secondary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
