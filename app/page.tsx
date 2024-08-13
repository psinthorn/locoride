import Image from "next/image";
import GoogleMapsSection from './../components/Home/GoogleMapsSection'
import SearchSection from './../components/Home/SearchSection'

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-6 gap-5 ">
      <div >
        <SearchSection/>
      </div>
      <div className="col-span-2">
        <GoogleMapsSection />
      </div>
    </div>
  );
}
