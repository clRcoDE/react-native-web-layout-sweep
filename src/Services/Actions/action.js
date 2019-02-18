import {FILTER_ITEMS} from '../types'


export const filterCreator=filterType=>{
return filterSubmitter(filterType)
}


const filterSubmitter=filterType=>{
    return{
        type:FILTER_ITEMS,
        payload:filterType
    }
}