import Module from "../../Components/Module/Module.jsx"
import NMIXXimg from "../../../../Data/Girl/assets/NMIXX.jpg"

const people = [
    {
        name: 'NMIXX',
        title: 'JYP',
        role: 'KPOP',
        imageUrl: NMIXXimg,
        redirectUrl: "/nmixx"
    }
]

const Girl = () => {
    return (
        <div className="bg-white p-4 h-[80vh]">
            <Module people={people}/>
        </div>
    );
};

export default Girl;