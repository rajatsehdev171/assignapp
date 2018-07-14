import { LOAD_MORE, ITEMS_LOADING} from '../actions/types';

const initialState ={
    moreItems:[],
    loading:false
}

export default function(state=initialState,action){
switch(action.type){
    case LOAD_MORE:
    return{
        ...state,
        moreItems:action.payload,
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