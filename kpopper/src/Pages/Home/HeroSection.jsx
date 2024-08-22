import Search from "../../Components/SearchBar/Search.jsx";
import Background from "../../Components/Background/Background.jsx";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden h-screen w-screen">
      <div className="absolute inset-0 z-0">
        <Background />
      </div>
      <div className="relative z-10 flex flex-col bg-white bg-opacity-80 h-screen w-screen items-center justify-center gap-5">
        <div className="flex items-center justify-center w-screen">
          <div className="bg-white bg-opacity-80 rounded-lg p-8 text-center w-screen max-w-xl">
            <h1 className="font-bold text-6xl p-2">
              The KPOPPER 🍭
            </h1>
            <p className="text-md text-gray-900">
              Learn more about your favorite KPOP groups or soloists. 
              From upcoming events, news, concerts, or just learn about the 
              groups/soloists, "The KPOPPER" helps you with all!
            </p>
          </div>
        </div>
        <Search />
      </div>
    </div>
  );
}
