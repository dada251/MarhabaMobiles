import './product-card.styles.scss';

import Button from '../button/button.component';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    const addProductToCart = () => {}

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={name} />
            <div className='footer'>
                <span className='name'>Name: {name}</span>
                <span className='price'>Price: {price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>
                Buy Now
            </Button>
        </div>  
    );
};

export default ProductCard;