import { COVID_LIST_SUCCESS, COVID_LIST_FAIL } from '../constansts/covidConstansts'


export const covidListReducer = (state={covid:[]},action) => {
    switch(action.type){
        case COVID_LIST_SUCCESS:
            return{covid:action.payload}
        case COVID_LIST_FAIL:
            return{covid:action.error}  
        default:
            return state      
    }
}