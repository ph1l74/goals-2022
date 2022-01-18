import { useTranslation } from 'react-i18next';
import { useState } from 'react/cjs/react.development';
import './LanguageSwitcher.css';


const LanguageSwitcher = () => {

    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState("ru");

    const clickHandler = (language) => {
        setLang(language);
        i18n.changeLanguage(language);
    }


    return (
        <div className='lang-switcher'>
            <div className={lang === 'ru' ? 'lang active' : 'lang'} onClick={() => { clickHandler('ru') }}>{t('langRU')}</div>
            <div className={lang === 'en' ? 'lang active' : 'lang'} onClick={() => { clickHandler('en') }}>{t('langEN')}</div>
        </div>
    )
}
export default LanguageSwitcher;