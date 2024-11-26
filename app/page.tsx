import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div className="flex flex-col h-screen w-screen">
        <Navbar />
      </div>
    </div>
  );
}
