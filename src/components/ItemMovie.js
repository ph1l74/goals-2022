import './ItemMovie.css';

const ItemMovie = ({ title, rating, link }) => (

    <a className='item-movie' href={link} target={`_blank`}>
        <div className='title'>{title}</div>
        <div className='rating'><div className='star'></div>{rating}</div>
    </a>
)

export default ItemMovie;