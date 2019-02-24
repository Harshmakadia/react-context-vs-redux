import React, { Component } from 'react';

import ShopContext from './shop-context';

class GlobalState extends Component {
  state = {
    products: [
      { id: 'p1', title: 'React 16 Sticker + T-shirt', price: 29.99 },
      { id: 'p2', title: 'Vue.js T-shirt', price: 9.99 },
      { id: 'p3', title: 'Angular T-shirt', price: 8.99 },
      { id: 'p4', title: 'JS Notebook', price: 2.99 }
    ],
    cart: []
  };

  addProductToCart = product => {
    console.log('Adding product', product);
    const updatedCart = [...this.state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === product.id
    );

    if (updatedItemIndex < 0) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      const updatedItem = {
        ...updatedCart[updatedItemIndex]
      };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }
    this.setState({ cart: updatedCart });
  };

  removeProductFromCart = productId => {
    console.log('Removing product with id: ' + productId);
    const updatedCart = [...this.state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === productId
    );

    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1);
    } else {
      updatedCart[updatedItemIndex] = updatedItem;
    }
    this.setState({ cart: updatedCart });
  };

  render() {
    return (
      <ShopContext.Provider
        value={{
          products: this.state.products,
          cart: this.state.cart,
          addProductToCart: this.addProductToCart,
          removeProductFromCart: this.removeProductFromCart
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

export default GlobalState;
