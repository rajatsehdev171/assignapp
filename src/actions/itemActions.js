import axios from 'axios';
import {GET_ITEMS, ITEMS_LOADING, LOAD_MORE, ITEM_DETAIL} from './types';


export const getItems =()=>dispatch=>{
   dispatch(setItemsLoading());
   axios.get('https://assignment-appstreet.herokuapp.com/api/v1/products?page=1').then((res)=>{
       console.log('respose',res)
           dispatch({
               type:GET_ITEMS,
               payload:res.data.products
           })
        }).catch((err)=>{
            console.log('error occurred',err)
        })
} 
export const loadMoreItems =()=>dispatch=>{
    dispatch(setItemsLoading());
    axios.get('https://assignment-appstreet.herokuapp.com/api/v1/products?page=2').then((res)=>{
        console.log('respose',res)
            dispatch({
                type:LOAD_MORE,
                payload:res.data.products
            })
         }).catch((err)=>{
             console.log('error occurred',err)
         })
 } 
 export const itemDetailCall =(id)=>dispatch=>{
    dispatch(setItemsLoading());
    axios.get('https://assignment-appstreet.herokuapp.com/api/v1/products/'+id).then((res)=>{
        console.log('respose',res)
            dispatch({
                type:ITEM_DETAIL,
                payload:res.data
            })
         }).catch((err)=>{
             console.log('error occurred',err)
         })
 }

export const setItemsLoading =()=>{
    return{
        type:ITEMS_LOADING
    }
}

