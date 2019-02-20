 
 import {FILTER_ITEMS} from '../types'
 
 import {store} from '../../App'
 const initialState ={ 
    selectedItems : [
        'hotels',
        'flights',
        'rails'
    ]
 }
 
  export const rootReducer=(state =initialState, action)=>{



    switch(action.type){
        case FILTER_ITEMS:
        let x = state.selectedItems.findIndex(p => p === action.ID )
        if(x<0){ 
            console.log(` too ${state}`)
return {
    ...state,selectedItems:[...state.selectedItems , action.ID ]
}
          
          
        }
        else {
            console.log(`yoo ${state}`)
            return {
                ...state,selectedItems:[...state.selectedItems.slice(0,x),...state.selectedItems.slice(x+1)]
            }
        }

        default:
        return state
    }
 }

 