import { useState } from 'react';
import Dashboard from './Dashboard';
import Header from './Header';
import Menu from './Menu';
import MenuItem from './MenuItem';
import { useTranslation } from 'react-i18next';
import '../i18n';
import './MainPage.css';
import LanguageSwitcher from './LanguageSwitcher';
import Content from './Content';
import ProgressBar from './ProgressBar';
import ItemBasic from './ItemBasic';


const MainPage = () => {

    const { t } = useTranslation('common');

    const data = {
        books: {
            goal: 10,
            items: []
        },
        movies: {
            goal: 50,
            items: [
                { title: 'Mila (2020)', url: 'https://www.imdb.com/title/tt10110614/', rating: 7 },
                { title: 'Colectiv (2019)', url: 'https://www.imdb.com/title/tt10706602/', rating: 8 },
                { title: 'Самый лучший день (2015)', url: 'https://www.imdb.com/title/tt5083604/', rating: 5 },
                { title: 'Mila (2020)', url: 'https://www.imdb.com/title/tt10110614/', rating: 7 },
                { title: 'Colectiv (2019)', url: 'https://www.imdb.com/title/tt10706602/', rating: 8 },
                { title: 'Самый лучший день (2015)', url: 'https://www.imdb.com/title/tt5083604/', rating: 5 },
                { title: 'Mila (2020)', url: 'https://www.imdb.com/title/tt10110614/', rating: 7 },
                { title: 'Colectiv (2019)', url: 'https://www.imdb.com/title/tt10706602/', rating: 8 },
                { title: 'Самый лучший день (2015)', url: 'https://www.imdb.com/title/tt5083604/', rating: 5 }
            ]
        }
    }

    const menuItems = [
        { category: 'books' },
        { category: 'movies' },
        { category: 'games' },
        { category: 'lectures' },
        { category: 'music' },
        { category: 'interviews' },
        { category: 'projects' }
    ];

    const [curCat, setCurCat] = useState(menuItems[0].category);

    const onMenuItemClick = (category) => {
        setCurCat(category);
    }

    return (
        <div className='main-page'>
            <LanguageSwitcher />
            <Header>2022 Goals</Header>
            <Dashboard>
                <Menu>
                    {menuItems.map((item, i) => (
                        <MenuItem key={i}
                            onClick={() => { onMenuItemClick(item.category) }}
                            addClass={item.category === curCat ? 'active' : null}>
                            {t(`common:categories.${item.category}`)}
                        </MenuItem>
                    ))}
                </Menu>
            </Dashboard>
            <Content>
                {curCat === 'movies' ?
                    <>
                        <ProgressBar goal={data[curCat].goal} done={data[curCat].items.length} title='moviesDone: ' />
                        {/* <div className='content-flex'> */}
                            {data[curCat].items.map((item, index) => (
                                <ItemBasic key={index} title={item.title} description={item.rating} index={index} />
                            ))}
                        {/* </div> */}
                    </> :
                    null}
            </Content>
        </div>
    )
}

export default MainPage;