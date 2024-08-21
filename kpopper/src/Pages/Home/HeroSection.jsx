import Search from "../../Components/SearchBar/Search.jsx"

export default function HeroSection() {
    return (
        <div className="overflow-hidden">
            <div className="flex-col bg-white h-screen w-screen flex items-center justify-center h-[80vh] gap-5">
                <div className="flex items-center justify-center w-screen">
                    <main className="text-center w-screen max-w-xl">
                        <h1 className="font-bold text-6xl mb-4">
                            The KPOPPER 🍭
                        </h1>
                        <p className="text-md text-gray-600">
                            Learn more about your favorite KPOP groups or soloists. 
                            From upcoming events, news, concerts, or just learn about the 
                            groups/soloists, "The KPOPPER" helps you with all!
                        </p>
                    </main>
                </div>
                <Search />
            </div>
        </div>
    );
}
