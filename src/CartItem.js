import React from 'react';

class CartItem extends React.Component {

    increaseQuantity = () => {
        this.setState( (prevState) => {
            return {
                qty: prevState.qty + 1
            } 
        });
    }

    decreaseQuantity = () => {
        if(this.state.qty > 1){
            this.setState( (prevState) => {
                return {
                    qty: prevState.qty - 1
                }
            });
        }
    }

    render() {
        const { price, title, qty, img } = this.props.product;
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
                        onClick={this.increaseQuantity}
                        />
                        <img 
                        className='action-icons' 
                        src='https://cdn-icons-png.flaticon.com/512/992/992683.png' 
                        alt='decrease' 
                        onClick={this.decreaseQuantity}
                        />
                        <img 
                        className='action-icons' 
                        src='https://cdn-icons-png.flaticon.com/512/484/484662.png' 
                        alt='delete' 
                        />
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