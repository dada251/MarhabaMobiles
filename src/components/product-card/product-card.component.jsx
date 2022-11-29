import './product-card.styles.scss';

import { ReactComponent as Whatsapp } from '../../assets/whatsapp.svg';

const ProductCard = ({ product }) => {
    let { name, price, imageUrl } = product;

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={name} />
            <div className='footer'>
                <span className='name'>Name: {name}</span>
            </div>
            <div className='footer'>
                <span className='price'>Price: Rs. {price}</span>
            </div>
            <div className='footer'>
                <span className='price'>Down payment: Rs. {(price * 20 / 100).toFixed(2)}</span>
            </div>
            <div className='footer'>
                <span className='price'>12 Month Plan: Rs. {((price - ((price * 20) / 100)) / 11).toFixed(2)}</span>
            </div>
            <div className='footer'>
                <span className='price'>24 Month Plan: Rs. {((price - ((price * 20) / 100)) / 23).toFixed(2)}</span>
            </div>
            <div className='footer'>
                <span className='price'>36 Month Plan: Rs. {((price - ((price * 20) / 100)) / 35).toFixed(2)}</span>
            </div>
            <div className='footer'>
                <div className='whatsapp-container'>
                    <Whatsapp className='whatsapp' />
                    +92 321 1234567
                </div>
            </div>
        </div>  
    );
};

export default ProductCard;