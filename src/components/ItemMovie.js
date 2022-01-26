import './ItemMovie.css';

const ItemMovie = ({ title, rating, link }) => {

    console.log(link);

    return (
        <a className='item-movie' href={link} target={`_blank`}>
            <div className='title'>{title}</div>
            <div className='rating'><div className='star'></div>{rating}</div>
        </a>
    )
}

export default ItemMovie;