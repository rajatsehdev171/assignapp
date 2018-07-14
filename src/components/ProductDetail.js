import React, { Component } from 'react';
import {Container} from 'reactstrap';
import {connect} from 'react-redux';
import {itemDetailCall} from '../actions/itemActions';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import $ from 'jquery';
// window.jQuery = window.$ = $;




class ProductDetail extends Component {
   constructor(props){
    super(props);
    console.log("this is props",this.props);
    this.state = {
        currentImageIndex: 0,
        expanded: false,
        setActive: true,
        setOtherActive:false,
        setSizeActive:true,
        setOtherSizeActive:false,
        count:0,
        obj:{color_attr_id:"5aec58955a39460004b3f6d1",
            size_attr_id:"5aec58955a39460004b3f6d0",
             color:"Black",
             size:"1.5GB"},
        selectedObject:{}
        
    };
    
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);    
   }
   componentDidMount(){
     this.props.itemDetailCall(this.props.paramsId.match.params._id); 
      
   }
   

   previousSlide (imgUrls) {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
    this.setState({
        currentImageIndex: index
    });
}

nextSlide (imgUrls) {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
        currentImageIndex: index
    });
}
showMore(){
this.setState({
    expanded:!this.state.expanded
})
}
addActiveChoice(e){
  if(e.target.innerHTML ==='Black'){
    this.setState({
        setActive:true,
        setOtherActive:false,
        obj:{color_attr_id: "5aec58955a39460004b3f6d1", size_attr_id: this.state.obj.size_attr_id, color: "Black", size: this.state.obj.size}
    })  
      }
}
addActiveChoiceOther(e){
    if(e.target.innerHTML ==='Gold'){
        this.setState({
            setActive:false,
            setOtherActive:true,
            obj:{color_attr_id: "5aec58955a39460004b3f6d1", size_attr_id: this.state.obj.size_attr_id, color: "Gold", size: this.state.obj.size}
        })
    }
   
   
}
setSizeChoice(e){
    console.log("check event",e.target.innerHTML);
    if(e.target.innerHTML ==='1.5GB'){
        this.setState({
            setSizeActive:true,
            setOtherSizeActive:false,
            obj:{color_attr_id: this.state.obj.color_attr_id, size_attr_id: '5aec58955a39460004b3f6d0', color: this.state.obj.color, size: "1.5GB"}
        })
    }
    
}
setOtherSizeChoice(e){
    if(e.target.innerHTML ==='2GB'){
    this.setState({
        setSizeActive:false,
        setOtherSizeActive:true,
        obj:{color_attr_id: this.state.obj.color_attr_id, size_attr_id: '5aec58955a39460004b3f6d0', color: this.state.obj.color, size: "2GB"},
    })}
}

decrementCounter(){
    if(this.state.count === 0){
        return null;
    }
    else{this.setState({
        count:this.state.count -1
    })}
    
}
incrementCounter(){
    this.setState({
        count:this.state.count +1
    })
}

makeSelectionIdAndRetrievedata(itemDetail){
    let newArray =[];
    let signToBeSearched =[];
    console.log("this is inside retrieve data",itemDetail);
    if(this.state.obj.color && this.state.obj.size){
      console.log("attrrnnn=====",this.state.obj.size_attr_id);
       var sizeObj = itemDetail.options.filter((obj) => {
        return [this.state.obj.size_attr_id,this.state.obj.size].includes(obj.attrib_id && obj.name) ;
      });
      
      var colourObj = itemDetail.options.filter((obj) => {
        return [this.state.obj.color_attr_id,this.state.obj.color].includes(obj.attrib_id && obj.name) ;
      });
      console.log("six obj",sizeObj);
     newArray.push(sizeObj);
     newArray.push(colourObj);
     console.log("this is  newArray",newArray);
     if(newArray.length === 0){
         return null;
     }else{
        signToBeSearched.push(newArray[0][0]._id);
        signToBeSearched.push(newArray[1][0]._id);
        var itemToSearched = itemDetail['product_variations'].filter((item) => {
            console.log("type check",item.sign);
           return ( item.sign[0] === (signToBeSearched[0]))&&(item.sign[1] === signToBeSearched[1]);
          
         });
       this.setState({
           selectedObject:itemToSearched
       }) ;
     }
    

    }
}

  render() {
      const{itemDetail} =this.props.itemDetail;
 const imgUrls =itemDetail.primary_product?itemDetail.primary_product.images:[];
       
    return (
      <div >
          <Container className="detailsContain">
              <div className="row">
              <div className=' col-lg-1'>
              </div>
              <div className='col-sm-6 col-lg-5'>
              <div className="carousel">
            
				<Arrow direction="left" clickFunction={ this.previousSlide.bind(this,imgUrls) } glyph="&larr;" />
				<ImageSlide url={(this.state.selectedObject.length >0)?this.state.selectedObject[0].images[this.state.currentImageIndex]: imgUrls[this.state.currentImageIndex] } />
				<Arrow direction="right" clickFunction={ this.nextSlide.bind(this,imgUrls) } glyph="&rarr;" />
			</div>
              </div>
              <div className='col-sm-6 col-lg-5'>
                    <section>
                        <div className='row'>
                        <div >
                             <div>
                                 <h3 className="fromCenter">{(this.state.selectedObject.length>0)?this.state.selectedObject[0].name:itemDetail.primary_product?itemDetail.primary_product.name:''}</h3><br/>
                                 <p className='para'>{(this.state.expanded)?itemDetail.primary_product?itemDetail.primary_product.desc:'':(itemDetail.primary_product?itemDetail.primary_product.desc:'').slice(0,100)}</p>
                                <a onClick={this.showMore.bind(this)} style={{cursor:'pointer',color:'blue',fontSize:'12px'}}>{(this.state.expanded)?"+LESS":"+MORE"}</a>
                             </div>
                        </div>
                        </div>
                    </section>
                    <div>
                        <div className='row'>
                        <div >
                            <div className="price">
                                <h6>Rs {(this.state.selectedObject.length>0)?this.state.selectedObject[0].mark_price:itemDetail.primary_product?itemDetail.primary_product.mark_price:''}</h6>
                                <h6> Discount:{(this.state.selectedObject.length>0)?this.state.selectedObject[0].sale_msg:itemDetail.primary_product?itemDetail.primary_product.sale_msg:''};DiscountedPrice:Rs{(this.state.selectedObject.length>0)?this.state.selectedObject[0].sale_price:itemDetail.primary_product?itemDetail.primary_product.sale_price:''} </h6>
                                <p className="para">Local taxes included(taxes applicable)</p>
                                <div>
                                  
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <section>
                        <span>2 colors available</span>
                        <div className='row'>
                        <div >
                        <div className='adjust'>
                            <div >
                            <div className={this.state.setActive?'customRadio active':'customRadio '} onClick={this.addActiveChoice.bind(this)}>
                           <div className="dotWraper"> <div className="dot1"></div><span className="text">Black</span></div>
                           </div>
                           <div className={this.state.setOtherActive?'customRadio active':'customRadio'} onClick={this.addActiveChoiceOther.bind(this)}>
                           <div className="dotWraper"> <div className="dot2"></div><span className="text">Gold</span></div></div>
                            <div></div>
                            
                            </div>
                            
                        </div>
                        </div>
                        </div>
                    </section>
                    <section>
                        <span>2 sizes available</span>
                        <div className='row'>
                        <div>
                        <div className='adjust'>
                            <div >
                            <div className={this.state.setSizeActive?'customSize active':'customSize'} onClick={this.setSizeChoice.bind(this)}>
                           <div className="sizeWraper"> <span className="textNew">1.5GB</span></div>
                           </div>
                           <div className={this.state.setOtherSizeActive?'customSize active':'customSize'} onClick={this.setOtherSizeChoice.bind(this)}>
                           <div className="sizeWraper"> <span className="textNew">2GB</span></div></div>
                            <div></div>
                            
                            </div>
                            
                        </div>
                        </div>
                        </div>
                    </section>
                    <section>
                        <div className="quantity">
                            <span>Quantity</span>
                            <div className='row'>
                            <div className="col-sm-12">
                            <div className='counter'>
                            <div className='adjust'>
                           <div>
                               <table>
                                   <tbody>
                               <tr>
                                   <td className="plusminus" onClick={this.decrementCounter.bind(this)}>-</td>
                                   <td className="count">{this.state.count}</td>
                                   <td className="plusminus" onClick={this.incrementCounter.bind(this)}>+</td>
                               </tr>
                               </tbody>
                               </table>

                           </div>
                            
                            </div>

                            </div>

                            </div>
                            </div>
                        </div>
                    </section>
                    <div className="addItems">
                        <div className="row colourBarCart">
                        <div className="addToCart" onClick={this.makeSelectionIdAndRetrievedata.bind(this,itemDetail)}>
                        <span>Add To Cart</span>
                        </div>
                        </div>
                    </div>
              </div>
              <div className=' col-lg-1'>
              </div>
              </div>
          </Container>
       </div>
    );
  }
}
const Arrow = ({ direction, clickFunction, glyph }) => (
	<div 
		className={ `slide-arrow ${direction}` } 
		onClick={ clickFunction }>
		{ glyph } 
	</div>
);

const ImageSlide = ({ url }) => {
	return (
		<img className="image-slide" src={url} alt={url} />
	);
}

const mapStateToProps =(state)=>({
    itemDetail:state.itemDetail
    })
    export default connect(mapStateToProps, {itemDetailCall})(ProductDetail);