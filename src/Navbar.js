import React from "react";

const Navbar = (props) => {
  
  return (
      <div style={styles.nav}>
          <div style={styles.header}>
              <h1>CART</h1>
          </div>
          <div style={styles.cartIconContainer} >
              <img style={styles.cartIcon} alt="cart-icon" src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" />
              <span style={styles.cartCount} >{props.count}</span>
          </div>
      </div>
  );
}

const styles = {
    header: {
      marginLeft: 20,
      color: 'white',
      fontSize: 22
    },
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative',
      marginRight: 20
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };
  

export default Navbar;