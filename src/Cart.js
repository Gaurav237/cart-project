import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor() {
        super();
        this.state= {
            products : [
                {
                    id: 1,
                    price: 999,
                    title: 'Phone',
                    qty: 1,
                    img: 'https://www.91-img.com/pictures/143993-v4-apple-iphone-14-mobile-phone-large-1.jpg'
                },
                {
                    id: 2,
                    price: 1000,
                    title: 'Laptop',
                    qty: 1,
                    img: 'https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg'
                },
                {
                    id: 3,
                    price: 10,
                    title: 'Watch',
                    qty: 1,
                    img: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/black_bdca4987-8550-461d-bb37-b1bae02009b4_600x.png?v=1685530794'
                }
            ]
            
        }
    }

    handleIncreaseQuantity = (product) => {
        // console.log(product);
        const { products } = this.state;
        const index = products.indexOf(product);
        
        products[index].qty += 1;

        this.setState({
            products: products
        })
    }

    handleDecreaseQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);

        if(products[index].qty > 1){ 
            products[index].qty -= 1;

            this.setState({
                products: products
            })
        }
    }

    handleDeleteProduct = (product) => {
        const { products } = this.state;
        const items = products.filter((item) => item.id !== product.id);

        this.setState({
            products: items
        });
    }

    render () {
        const { products } = this.state;

        return (
            <div className="cart">
                {
                    products.map( (product) => {
                        return (
                            <CartItem 
                                product={product}
                                key={product.id}
                                onIncreaseQuantity={this.handleIncreaseQuantity}
                                onDecreaseQuantity={this.handleDecreaseQuantity}
                                onDeleteProduct={this.handleDeleteProduct}
                            />
                        )
                    } )
                }
            </div>
        )
    }
}

export default Cart;