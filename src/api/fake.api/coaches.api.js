import coach1 from '../../Assets/coach1.jpg';
import coach2 from '../../Assets/coach2.jpg';
import coach3 from '../../Assets/coach3.jpg';
import coach4 from '../../Assets/coach4.jpg';

const buttons = [
    {
        id: 1,
        name: 'pool',
        text: 'Бассейн',
    },
    {
        id: 2,
        name: 'gym',
        text: 'Тренировочный зал',
    },
];

const coaches = [
    {
        id: 1,
        section: 'coach',
        area: 'gym',
        image: coach1,
        alt: 'coach1',
        title: 'Даниил Степанович',
        text1: 'Сертифицированный тренер',
        text2: '',
        text3: '',
        text4: 'Стаж 8 лет',
        text5: 'Специализация',
        text6: 'Похудение, коррекция фигуры и восстановление после низкокалорийных диет. Силовой тренинг увеличение мышечной массы. Функциональный тренинг. Внедрение новых привычек в образ жизни. Работа с клиентами с особенностями здоровья. Обеспечу поддержку и опыт на пути к вашим тренировочным успехам.',
    },
    {
        id: 2,
        section: 'coach',
        area: 'gym',
        image: coach2,
        alt: 'coach2',
        title: 'Анжелина Данииловна',
        text1: 'Групповой инструктор по фитнесу',
        text2: '',
        text3: '',
        text4: 'Стаж 5 лет',
        text5: 'Специализация',
        text6: 'Похудение, коррекция фигуры и восстановление после диет. Силовом тренинге и увеличении мышечной массы. Функциональном тренинге. Внедрение здоровых привычек в образ жизни. Работа с клиентами с особенностями здоровья. Готова помочь вам достичь ваших фитнес-целей!',
    },
    {
        id: 3,
        section: 'coach',
        area: 'gym',
        image: coach3,
        alt: 'coach3',
        title: 'Павел Соколов',
        text1: 'Инструктор по йоге',
        text2: '',
        text3: '',
        text4: 'Стаж 3 года',
        text5: 'Специализация',
        text6: 'Разработка персонализированных программ тренировок для достижения ваших фитнес-целей. Обучение эффективным техникам силовых тренировок и увеличению мышечной массы. Составление индивидуальных планов для функциональных тренировок. Внедрение здоровых привычек в повседневную активность. Адаптация программ для клиентов с особенностями здоровья.',
    },
    {
        id: 4,
        section: 'coach',
        area: 'gym',
        image: coach4,
        alt: 'coach4',
        title: 'Иван Александрович',
        text1: 'Инструктор тренажерного зала',
        text2: '',
        text3: '',
        text4: 'Стаж 8 лет',
        text5: 'Специализация',
        text6: 'Похудение, коррекция фигуры и восстановление после низкокалорийных диет. Силовой тренинг, увеличение мышечной массы. Функциональный тренинг. Внедрение новых привычек в образ жизни. Работа с клиентами с особенностями здоровья. Обеспечу поддержку и опыт на пути к вашим тренировочным успехам.',
    },
    {
        id: 5,
        section: 'coach',
        area: 'pool',
        image: coach2,
        alt: 'coach5',
        title: 'Достаева Меруерт',
        text1: 'Групповой инструктор по фитнесу',
        text2: '',
        text3: '',
        text4: 'Стаж 8 лет',
        text5: 'Специализация',
        text6: 'Похудение, коррекция фигуры и восстановление после низкокалорийных диет. Силовой тренинг увеличение мышечной массы. Функциональный тренинг. Внедрение новых привычек в образ жизни. Работа с клиентами с особенностями здоровья. Обеспечу поддержку и опыт на пути к вашим тренировочным успехам.',
    },
    {
        id: 6,
        section: 'coach',
        area: 'pool',
        image: coach1,
        alt: 'coach6',
        title: 'Проскурников Савелий',
        text1: 'Инструктор по йоге',
        text2: '',
        text3: '',
        text4: 'Стаж 5 лет',
        text5: 'Специализация',
        text6: 'Похудение, коррекция фигуры и восстановление после диет. Силовом тренинге и увеличении мышечной массы. Функциональном тренинге. Внедрение здоровых привычек в образ жизни. Работа с клиентами с особенностями здоровья. Готова помочь вам достичь ваших фитнес-целей!',
    },
    {
        id: 7,
        section: 'coach',
        area: 'pool',
        image: coach3,
        alt: 'coach7',
        title: 'Ханадеев Артем',
        text1: 'Сертифицированный тренер',
        text2: '',
        text3: '',
        text4: 'Стаж 3 года',
        text5: 'Специализация',
        text6: 'Разработка персонализированных программ тренировок для достижения ваших фитнес-целей. Обучение эффективным техникам силовых тренировок и увеличению мышечной массы. Составление индивидуальных планов для функциональных тренировок. Внедрение здоровых привычек в повседневную активность. Адаптация программ для клиентов с особенностями здоровья.',
    },
    {
        id: 8,
        section: 'coach',
        area: 'pool',
        image: coach4,
        alt: 'coach8',
        title: 'Артем Шапилов',
        text1: 'Групповой инструктор по фитнесу',
        text2: '',
        text3: '',
        text4: 'Стаж 8 лет',
        text5: 'Специализация',
        text6: 'Похудение, коррекция фигуры и восстановление после низкокалорийных диет. Силовой тренинг, увеличение мышечной массы. Функциональный тренинг. Внедрение новых привычек в образ жизни. Работа с клиентами с особенностями здоровья. Обеспечу поддержку и опыт на пути к вашим тренировочным успехам.',
    },
    {
        id: 9,
        section: 'coach',
        area: 'pool',
        image: coach1,
        alt: 'coach9',
        title: 'Ханадеев Андрей',
        text1: 'Инструктор по йоге',
        text2: '',
        text3: '',
        text4: 'Стаж 8 лет',
        text5: 'Специализация',
        text6: 'Похудение, коррекция фигуры и восстановление после низкокалорийных диет. Силовой тренинг увеличение мышечной массы. Функциональный тренинг. Внедрение новых привычек в образ жизни. Работа с клиентами с особенностями здоровья. Обеспечу поддержку и опыт на пути к вашим тренировочным успехам.',
    },
    {
        id: 10,
        section: 'coach',
        area: 'pool',
        image: coach4,
        alt: 'coach10',
        title: 'Намуратов Алексей',
        text1: 'Инструктор по йоге',
        text2: '',
        text3: '',
        text4: 'Стаж 5 лет',
        text5: 'Специализация',
        text6: 'Похудение, коррекция фигуры и восстановление после диет. Силовом тренинге и увеличении мышечной массы. Функциональном тренинге. Внедрение здоровых привычек в образ жизни. Работа с клиентами с особенностями здоровья. Готова помочь вам достичь ваших фитнес-целей!',
    },
    {
        id: 11,
        section: 'coach',
        area: 'pool',
        image: coach2,
        alt: 'coach11',
        title: 'Мазовка Екатерина',
        text1: 'Инструктор по йоге',
        text2: '',
        text3: '',
        text4: 'Стаж 3 года',
        text5: 'Специализация',
        text6: 'Разработка персонализированных программ тренировок для достижения ваших фитнес-целей. Обучение эффективным техникам силовых тренировок и увеличению мышечной массы. Составление индивидуальных планов для функциональных тренировок. Внедрение здоровых привычек в повседневную активность. Адаптация программ для клиентов с особенностями здоровья.',
    },
    {
        id: 12,
        section: 'coach',
        area: 'gym',
        image: coach3,
        alt: 'coach1',
        title: 'Виталий Сметанко',
        text1: 'Сертифицированный тренер',
        text2: '',
        text3: '',
        text4: 'Стаж 8 лет',
        text5: 'Специализация',
        text6: 'Похудение, коррекция фигуры и восстановление после низкокалорийных диет. Силовой тренинг, увеличение мышечной массы. Функциональный тренинг. Внедрение новых привычек в образ жизни. Работа с клиентами с особенностями здоровья. Обеспечу поддержку и опыт на пути к вашим тренировочным успехам.',
    },
];

export function fetchAll() {
    return {
        buttons,
        coaches,
    };
}
