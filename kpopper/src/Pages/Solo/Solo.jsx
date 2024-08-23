import Module from "../../Components/Module/Module.jsx"
import IUimg from "../../../../Data/Soloists/assets/IU.jpg"

const people = [
    {
        name: 'IU',
        title: 'Kakao',
        role: 'KPOP/R&B Soul',
        imageUrl: IUimg,
        redirectUrl: "/iu"
    }
]

const Solo = () => {
    return (
        <div className="bg-white p-4 h-[80vh]">
            <Module people={people}/>
        </div>
    );
};

export default Solo;