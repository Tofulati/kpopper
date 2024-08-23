import Calender from "../../../Components/Calender/Calender.jsx"
import Members from "../../../Components/Members/Members.jsx";
import Haewon from "../../../../../Data/Girl/assets/NMIXX/Members/Haewon.jpg"
import Bae from "../../../../../Data/Girl/assets/NMIXX/Members/Bae.jpg"
import Kyujin from "../../../../../Data/Girl/assets/NMIXX/Members/Kyujin.jpg"
import Lily from "../../../../../Data/Girl/assets/NMIXX/Members/Lily.jpg"
import Jiwoo from "../../../../../Data/Girl/assets/NMIXX/Members/Jiwoo.jpg"
import Sullyoon from "../../../../../Data/Girl/assets/NMIXX/Members/Sullyoon.jpg"
import Jini from "../../../../../Data/Girl/assets/NMIXX/Members/Jini.jpg"

const info = [
    {
        name: 'Haewon',
        imgUrl: Haewon,
        current: 'Since 2022',
        position: 'Leader, Vocalist',
    },
    {
        name: 'Sullyoon',
        imgUrl: Sullyoon,
        current: 'Since 2022',
        position: 'Vocalist',
    },
    {
        name: 'Kyujin',
        imgUrl: Kyujin,
        current: 'Since 2022',
        position: 'Rapper, Vocalist',
    },
    {
        name: 'Jiwoo',
        imgUrl: Jiwoo,
        current: 'Since 2022',
        position: 'Rapper, Vocalist',
    },
    {
        name: 'Bae',
        imgUrl: Bae,
        current: 'Since 2022',
        position: 'Vocalist',
    },
    {
        name: 'Lily',
        imgUrl: Lily,
        current: 'Since 2022',
        position: 'Vocalist',
    },
    {
        name: 'Jini',
        imgUrl: Jini,
        current: '2022-2022',
        position: 'Rapper',
    },
]

const NMIXX = () => {
    return (
        <div className="bg-white overflow-hidden">
            <Members members={info}/>
            <Calender />
        </div>
    );
};

export default NMIXX;