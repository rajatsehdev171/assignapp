import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import ProductList from './ProductList';
import AppFooter from './AppFooter';
import {Container} from 'reactstrap';

class ProductListPage extends Component {
  
  render() {
    return (
      <div>
        <AppNavbar/>
        <Container>
        <ProductList/>
        </Container>
        <AppFooter/>
       </div>
    );
  }
}

export default ProductListPage;