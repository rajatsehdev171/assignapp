import { ITEM_DETAIL, ITEMS_LOADING} from '../actions/types';

const initialState ={
    itemDetail:[],
    loading:false
}

export default function(state=initialState,action){
switch(action.type){
    case ITEM_DETAIL:
    return{
        ...state,
        itemDetail:action.payload,
        loading:false
    };
    case ITEMS_LOADING:
    return{
        ...state,
       loading:true
    };
    default:
    return state;
}
}