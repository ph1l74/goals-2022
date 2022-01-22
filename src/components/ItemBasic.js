import './ItemBasic.css';

const ItemBasic = ({ title, description, index, link }) => {

    return (
        <a className='item-basic' href={link}>
            <div className='title'>{title}</div>
            <div className='description'>{description}</div>
        </a>
    )
}

export default ItemBasic;