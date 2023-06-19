import React from 'react';

class CartItem extends React.Component {
    render() {
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    <div>
                        <div style={{ fontSize: '24px'}}>Phone</div>
                        <div style={{ color: 'grey' }}>Rs 999</div>
                        <div style={{ fontSize: '18px' }}>Qty: 1</div>
                    </div> 
                    <div className='cart-item-actions'>
                        { /* Buttons */ }
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
    }
}

export default CartItem;