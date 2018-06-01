import {FETCH_POSTS, NEW_POSTS} from '../actions/types';

const initialState = {
    items: [],
    item: {}
};

export default function(state = initialState, action) {
    
    switch(action.type) {

        case FETCH_POSTS:
        console.log("Reducer being despatched");
            return{
                ...state,
                items: action.payload
            }
            break;

        default : 
        return state;
    }
};