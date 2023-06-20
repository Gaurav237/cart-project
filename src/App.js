import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {

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
              },{
                id: 4,
                price: 49,
                title: "Headphones",
                qty: 1,
                img: "https://m.media-amazon.com/images/I/811RreTN3rL.jpg"
              },
              {
                "id": 5,
                "price": 299,
                "title": "Smart Speaker",
                "qty": 1,
                "img": "https://www.apple.com/newsroom/images/product/homepod/standard/Apple_homepod-mini-white-10132020.jpg.landing-big_2x.jpg"
              },
              {
                "id": 6,
                "price": 399,
                "title": "Camera",
                "qty": 1,
                "img": "https://m.media-amazon.com/images/I/914hFeTU2-L._AC_UF1000,1000_QL80_.jpg"
              },
              {
                "id": 7,
                "price": 29,
                "title": "Wireless Mouse",
                "qty": 1,
                "img": "https://m.media-amazon.com/images/I/71fybw1BEZL.jpg"
              },
              {
                "id": 8,
                "price": 1499,
                "title": "Gaming Console",
                "qty": 1,
                "img": "https://m.media-amazon.com/images/I/51n+n+8AXZL._AC_UF1000,1000_QL80_.jpg"
              },
              {
                "id": 9,
                "price": 79,
                "title": "External Hard Drive",
                "qty": 1,
                "img": "https://5.imimg.com/data5/DO/AG/MY-49489529/external-hard-disk-500x500.jpg"
              },
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

    getCartCount = () => {
      const { products } = this.state;

      let count = 0;
      products.forEach(product => {
        count += product.qty;
      })

      return count;
    }

    getCartTotal = () => {
      const { products } = this.state;

      let cartTotal = 0;
      products.forEach((product) => {
        cartTotal += product.qty * product.price;
      })

      return cartTotal;
    }

    render () {
      const { products } = this.state;

      return (
        <div className="App">
          <Navbar 
          count={this.getCartCount()}
          />
          <Cart 
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
          />
          <div className="footer">
            <h2>
              Total Amount : $ {this.getCartTotal()}
            </h2>
          </div>
        </div>
      );
    }
}

export default App;
