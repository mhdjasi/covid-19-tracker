import { COVID_LIST_SUCCESS, COVID_LIST_FAIL } from '../constansts/covidConstansts'


export const countryListReducer = (state={country:[]},action) => {
    switch(action.type){
        case COVID_LIST_SUCCESS:
            return{country:action.payload}
        case COVID_LIST_FAIL:
            return{country:action.error}  
        default:
            return state      
    }
}