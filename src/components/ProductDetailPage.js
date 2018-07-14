import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import ProductDetail from './ProductDetail';
import AppFooter from './AppFooter';
import {Container} from 'reactstrap';

class ProductDetailPage extends Component {
  constructor(props){
      super(props);
      console.log("this is props",this.props);
  }
  render() {
    return (
      <div>
        <AppNavbar/>
        <Container>
      <ProductDetail paramsId={this.props}/>
        </Container>
        <AppFooter/>
       </div>
    );
  }
}

export default ProductDetailPage;