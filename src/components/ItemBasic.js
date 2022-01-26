import './ItemBasic.css';

const ItemBasic = ({ title, description, link }) => {

    return (
        <a className='item-basic' href={link} target={`_blank`}>
            <div className='title'>{title}</div>
            <div className='description'>{description}</div>
        </a>
    )
}

export default ItemBasic;