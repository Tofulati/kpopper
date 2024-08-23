import Calender from "../../../Components/Calender/Calender.jsx"
import Members from "../../../Components/Members/Members.jsx";
import JK from "../../../../../Data/Boy/assets/BTS/Members/JK.jpg"
import Jimin from "../../../../../Data/Boy/assets/BTS/Members/Jimin.jpg"
import Jin from "../../../../../Data/Boy/assets/BTS/Members/Jin.jpg"
import JH from "../../../../../Data/Boy/assets/BTS/Members/JH.jpg"
import RM from "../../../../../Data/Boy/assets/BTS/Members/RM.jpg"
import V from "../../../../../Data/Boy/assets/BTS/Members/V.jpg"
import Suga from "../../../../../Data/Boy/assets/BTS/Members/Suga.jpg"

const info = [
    {
        name: 'JungKook',
        imgUrl: JK,
        current: 'Since 2013',
        position: 'Center, Vocalist',
    },
    {
        name: 'RM',
        imgUrl: RM,
        current: 'Since 2013',
        position: 'Rapper, Leader',
    },
    {
        name: 'V',
        imgUrl: V,
        current: 'Since 2013',
        position: 'Vocalist',
    },
    {
        name: 'Suga',
        imgUrl: Suga,
        current: 'Since 2013',
        position: 'Rapper',
    },
    {
        name: 'Jin',
        imgUrl: Jin,
        current: 'Since 2013',
        position: 'Vocalist',
    },
    {
        name: 'Jimin',
        imgUrl: Jimin,
        current: 'Since 2013',
        position: 'Vocalist',
    },
    {
        name: 'JHope',
        imgUrl: JH,
        current: 'Since 2013',
        position: 'Rapper',
    },
]

const BTS = () => {
    return (
        <div className="bg-white overflow-hidden">
            <Members members={info} />
            <Calender />
        </div>
    );
};

export default BTS;