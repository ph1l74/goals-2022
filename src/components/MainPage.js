import { useState } from 'react';
import Dashboard from './Dashboard';
import Header from './Header';
import Menu from './Menu';
import MenuItem from './MenuItem';
import { useTranslation } from 'react-i18next';
import '../i18n';
import './MainPage.css';
import LanguageSwitcher from './LanguageSwitcher';


const MainPage = () => {

    const progressData = {};

    const { t } = useTranslation('common');

    const menuItems = [
        { category: 'books'},
        { category: 'movies'},
        { category: 'games'},
        { category: 'lectures'},
        { category: 'music'},
        { category: 'interviews'},
        { category: 'projects'}
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
        </div>
    )
}

export default MainPage;