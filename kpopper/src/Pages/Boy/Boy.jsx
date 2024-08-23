import Module from "../../Components/Module/Module.jsx"
import BTSimg from "../../../../Data/Boy/assets/BTS.jpg"

const people = [
    {
        name: 'BTS',
        title: 'Big Hit',
        role: 'KPOP',
        imageUrl: BTSimg,
        redirectUrl: "/bts"
    }
]

const Boy = () => {
    return (
        <div className="bg-white p-4 h-[80vh]">
            <Module people={people}/>
        </div>
    );
};

export default Boy;