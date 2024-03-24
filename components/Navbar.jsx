import logo from "@/assets/logoa.png";
import Image from "next/image";
function Navbar() {
  return (
    <div className="navbar h-[120px] bg-slate-200  flex justify-center items-center shadow-2xl">
      <Image
        src={logo}
        alt="Hero Image"
        width={400}
        height={400}
        className="object-cover h-[100px] w-[100px]"
      />
    </div>
  );
}

export default Navbar;
