import React from 'react';

const CartItem = (props) => {

    const { price, title, qty, img } = props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct} = props;
    return (
        <div className='cart-item'>
            <div className='left-block'>
                <img style={styles.image} alt='' src={img} />
            </div>
            <div className='right-block'>
                <div>
                    <div style={{ fontSize: '24px'}}>{title}</div>
                    <div style={{ color: 'grey' }}>Rs {price}</div>
                    <div style={{ fontSize: '18px' }}>Qty: {qty}</div>
                </div> 
                <div className='cart-item-actions'>
                    { /* Buttons */ }
                    <img 
                    className='action-icons' 
                    src='https://cdn-icons-png.flaticon.com/512/992/992651.png' 
                    alt='increase' 
                    onClick={() => {onIncreaseQuantity(product) }}
                    />
                    <img 
                    className='action-icons' 
                    src='https://cdn-icons-png.flaticon.com/512/992/992683.png' 
                    alt='decrease' 
                    onClick={() => { onDecreaseQuantity(product) }}
                    />
                    <img 
                    className='action-icons' 
                    src='https://cdn-icons-png.flaticon.com/512/484/484662.png' 
                    alt='delete' 
                    onClick={() => { onDeleteProduct(product) }}
                    />
                </div>
            </div>
        </div>
    );
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        marginTop: 7
    }
}

export default CartItem;