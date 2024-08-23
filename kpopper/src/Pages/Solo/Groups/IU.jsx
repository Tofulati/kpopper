import Calender from "../../../Components/Calender/Calender.jsx"
import Members from "../../../Components/Members/Members.jsx";
import IUimg from "../../../../../Data/Soloists/assets/IU/IU.jpg"

const info = [
    {
        name: 'IU',
        imgUrl: IUimg,
        current: 'Since 2008',
        position: 'Vocalist',
    }
]

const IU = () => {
    return (
        <div className="bg-white overflow-hidden">
            <Members members={info}/>
            <Calender />
        </div>
    );
};

export default IU;