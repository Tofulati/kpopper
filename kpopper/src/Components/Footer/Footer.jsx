import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white">
        <div className="p-2 mx-auto max-w-xl md:flex md:items-center md:justify-center lg:px-8 ">
            <div className="md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
                The KPOPPER - In the know for KPOP
            </p>
            <div className="flex justify-center space-x-6 md:order-2">
                <a key={"Github"} href={"https://github.com/Tofulati/kpopper"} className="text-gray-400 hover:text-gray-500" target="_blank">
                <span className="sr-only">{"Github"}</span>
                <FaGithub classname="h-6 w-6" aria-hidden="true"/>
                </a>
            </div>
            </div>
        </div>
        </footer>
    )
}

export default Footer