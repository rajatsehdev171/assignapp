import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {getItems, loadMoreItems} from '../actions/itemActions';

class ProductList extends Component {
    constructor(props){
        super(props);
        this.state={
            clicked:false
        }
    }

    componentDidMount(){
        this.props.getItems();
        this.props.loadMoreItems();
    }
    checkClickState(){
        this.setState({
            clicked:!this.state.clicked
        })
    }
  render() {
      const {items} =this.props.item;
      const {moreItems} =this.props.moreItem;
      const productItems =items.map((item)=>{
        let string = "/itemDetails/"+item._id;
        return(<div className="col-sm-5 col-lg-4" key={item._id}>
                  <div className="images">
                  <NavLink to={string} params={{_id:item._id}} exact><img src={item.images[0]} alt={item.name}  /></NavLink><br/>
                      <h6>{item.name}</h6>
                     <h6> {"₹ "+item.sale_price} </h6>
                      </div>
                   </div>)
       });
       const moreItemsArray =moreItems.map((item)=>{
        let string = "/itemDetails/"+item._id;
        return(<div className="col-sm-5 col-lg-4" key={item._id}>
                  <div className="images">
                  <NavLink to={string} params={{_id:item._id}} exact><img src={item.images[0]} alt={item.name}  /></NavLink><br/>
                      <h6>{item.name}</h6>
                     <h6> {"₹ "+item.sale_price} </h6>
                      </div>
                   </div>)
       })
    
    return (
      <div className="container-fluid">
          <div className="row">
          {productItems}
          {this.state.clicked?moreItemsArray:[]}
          </div>
          <div className="row">
          <div className='col-sm-12'>
          <div className="loading" onClick={this.checkClickState.bind(this)}>
          {this.state.clicked?'Load Less':'Load More'}</div>
          </div>
          </div>
          
       </div>
    );
  }
}
const mapStateToProps =(state)=>({
    item:state.item,
    moreItem:state.moreItem
    })
    export default connect(mapStateToProps, {getItems, loadMoreItems})(ProductList);



