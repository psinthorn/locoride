import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Banner from "@/public/rrss-banner.png";

export default function Page() {
  return (
    <>
      <Image 
        src={Banner} 
        layout="responsive" 
        width={1920} 
        height={1024}
        className="object-contain w-full h-full"
      />
      <div className="flex absolute inset-0  items-center justify-center">
        <SignIn />
      </div>
    </>
 
  );
}