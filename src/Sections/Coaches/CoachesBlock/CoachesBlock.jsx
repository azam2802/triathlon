import { useEffect, useState } from 'react';
import './CoachesBlock.scss';
import api from '../../../api';
import CustomCarousel from '../../../UI/CustomCarousel';
import ButtonsBlock from '../ButtonsBlock/ButtonsBlock.jsx';
import CustomTitle from '../../../UI/CustomTitle/CustomTitle.jsx';
import coachService from '../../../Services/coachService.js';

const CoachesBlock = () => {
    const [coaches, setCoaches] = useState([]);
    const [buttons, setButtons] = useState([]);
    const [curGroup, setCurGroup] = useState([]);
    const [activeBtn, setActiveBtn] = useState(null);
    const slidesPerView = 4;

    useEffect(() => {
        const data = api.data.fetchAll();
        setButtons(data.buttons);
    }, []);

    useEffect(() => {
        coachService.get().then((data) => {
            setCoaches(data);
            setCurGroup(data);
        });
    }, []);

    const handleChangeCoaches = ({ target }) => {
        setActiveBtn(target.name);
        const newGroup = curGroup.filter((coach) => coach.area === target.name);
        setCurGroup(newGroup);
    };

    if (!coaches) return 'Loader...';

    return (
        <section className="coaches" id="coaches">
            <div className="container">
                <div className="coaches__title">
                    <CustomTitle title={'Наши тренеры'} />
                </div>
                <ButtonsBlock
                    buttons={buttons}
                    onChangeCoaches={handleChangeCoaches}
                    activeBtn={activeBtn}
                />
                <CustomCarousel
                    dataArray={curGroup}
                    slidesPerView={slidesPerView}
                />
            </div>
        </section>
    );
};

export default CoachesBlock;
