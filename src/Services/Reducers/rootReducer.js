 
 import {SET_FILTER} from '../types'
 import {ListData} from '../../Components/ListData'
//  import {store} from '../../App'
 const initialState ={ 
    selectedItems : [
        'hotels',
        'flights',
        'rails'
    ],
    filteredData:ListData
 }
 
  export const rootReducer=(state =initialState, action)=>{



    switch(action.type){
        case SET_FILTER:
        let x = state.selectedItems.findIndex(p => p === action.ID )
        console.log(` x,s: ${state}${x}`)
        if(x<0){ 
            

    state={...state,selectedItems:[...state.selectedItems , action.ID ]}

          
          
        }
        else {
            
                state={...state,selectedItems:[...state.selectedItems.slice(0,x),...state.selectedItems.slice(x+1)]}
            
        }
   x=ListData.filter(item => state.selectedItems.findIndex(p => item.tag === p) >= 0)
  console.log(`after selected Items:  ${state.selectedItems} ${x} `)
        state={...state,filteredData:x}
        // this.setState({ filteredData: ListData.filter(item => this.props.selectedItems.findIndex(p => item.tag === p) >= 0) })

        console.log(` after  filter ${state.filteredData}`)
        default:
        return state
    }
 }

 