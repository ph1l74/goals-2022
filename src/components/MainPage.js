import { useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import Header from './Header';
import Menu from './Menu';
import MenuItem from './MenuItem';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getAllData, getDataByName } from '../store/thunks';
import { setCurrentCategory } from '../store/actions';
import { categories } from '../constants'
import '../i18n';
import './MainPage.css';
import LanguageSwitcher from './LanguageSwitcher';
import Content from './Content';
import ProgressBar from './ProgressBar';
import ItemBasic from './ItemBasic';
import Loader from './Loader';
import ItemMovie from './ItemMovie';


const MainPage = () => {

    const { t } = useTranslation('common');
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.isLoading);
    const currentCategory = useSelector(state => state.currentCategory);
    const data = useSelector(state => state.data);
    const [firstLoad, setFirstLoad] = useState(true);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        if (firstLoad) {
            dispatch(getAllData());
            setFirstLoad(false);
        }

        setMenuItems(Object.keys(data))

    }, [firstLoad, data, currentCategory, dispatch]);

    const onMenuItemClick = (category) => {
        dispatch(setCurrentCategory(category))
    }

    return (
        <div className='main-page'>
            <LanguageSwitcher />
            <Header>2022 Goals</Header>
            {isLoading ?
                <Loader />
                : <>
                    <Dashboard>
                        <Menu>
                            {menuItems.map((item, i) => (
                                <MenuItem key={i}
                                    onClick={() => { onMenuItemClick(item) }}
                                    addClass={item === currentCategory ? 'active' : null}>
                                    {t(`common:categories.${item}`)}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Dashboard>
                    <Content>
                        {data[currentCategory] && data[currentCategory].goal ?
                            <ProgressBar
                                key={`${currentCategory}_progressBar`}
                                goal={data[currentCategory].goal}
                                done={data[currentCategory].items ? data[currentCategory].items.length : 0}
                                title={t(`common:done.${currentCategory}`)} />
                            : null
                        }
                        {data[currentCategory] && data[currentCategory].items && data[currentCategory].items.length > 0 ?
                            <>
                                {data[currentCategory].items.map((item, index) => {
                                    return (
                                        currentCategory === categories.CAT_MOVIES ?
                                            <ItemMovie
                                                key={`${currentCategory}_${index}`}
                                                title={item.title}
                                                rating={item.rating}
                                                link={item.url}
                                            />
                                            :
                                            <ItemBasic
                                                key={`${currentCategory}_${index}`}
                                                title={item.title}
                                                description={item.description}
                                                link={item.url || null}
                                                actual={item.actual}
                                            />
                                    )
                                }
                                )}
                            </>
                            :
                            null
                        }
                    </Content>
                </>
            }
        </div>
    )
}

export default MainPage;