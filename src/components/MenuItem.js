import './MenuItem.css';

const MenuItem = ({ children, onClick, addClass }) => {

    const basicClass = 'menu-item'
    const className = addClass ? basicClass + ' ' + addClass : basicClass

    return (
        <div className={className} onClick={onClick}>
            {children}
        </div>
    )
}

export default MenuItem;