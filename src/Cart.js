import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {

    render () {
    const { products, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct} = this.props;

        return (
            <div className="cart">
                {
                    products.map( (product) => {
                        return (
                            <CartItem 
                                product={product}
                                key={product.id}
                                onIncreaseQuantity={onIncreaseQuantity}
                                onDecreaseQuantity={onDecreaseQuantity}
                                onDeleteProduct={onDeleteProduct}
                            />
                        )
                    } )
                }
            </div>
        )
    }
}

export default Cart;