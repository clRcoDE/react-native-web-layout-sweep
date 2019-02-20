import {FILTER_ITEMS} from '../types'


export const filterCreator=filterType=>{
return filterSubmitter(filterType)
}


const filterSubmitter=ID=>{
    return{
        type:FILTER_ITEMS,
        ID
    }
}