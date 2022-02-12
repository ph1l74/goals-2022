import './ItemBasic.css';

const ItemBasic = ({ title, description, link, actual }) => {

    return (
        <a className={actual ? 'item-basic' : 'item-basic not-actual'} href={link} target={`_blank`}>
            <div className='title'>{title}</div>
            <div className='description'>{description}</div>
        </a>
    )
}

export default ItemBasic;