import {combineReducers} from 'redux';
import itemReducer from './itemReducer';
import loadMoreReducer from './loadMoreReducer';
import itemDetailReducer from './itemDetailReducer';

export default combineReducers({item:itemReducer, moreItem:loadMoreReducer, itemDetail:itemDetailReducer})    
