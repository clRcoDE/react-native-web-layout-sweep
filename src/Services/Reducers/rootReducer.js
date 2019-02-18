 
 import {FILTER_ITEMS} from '../types'
 
 import {store} from '../../App'
 const initialState ={ 
     filter:{
         hotels:true,
         rails:true,
         flights:true
     }
 }
 
  export const rootReducer=(state =initialState, action)=>{



    switch(action.type){
        case FILTER_ITEMS:
        return {
            ...state,
            filter:{
                ...state.filter,
                [action.payload]:!state.filter[action.payload]
            }

        }
        default:
        return state
    }
 }

 