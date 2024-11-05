import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Image  src="/limousine-service.png" width={1024} height={1024}
        className="object-contain w-full h-full"
      />
      <div className="absolute top-10 left-10">
        <SignIn />
      </div>
    </>
 
  );
}