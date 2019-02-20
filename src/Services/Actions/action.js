import {SET_FILTER} from '../types'


export const filterCreator=ID=>{
return filterSubmitter(ID)
}


const filterSubmitter=ID=>{
    return{
        type:SET_FILTER,
        ID
    }
}