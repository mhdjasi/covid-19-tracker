import axios from 'axios'
import {COVID_LIST_SUCCESS,COVID_LIST_FAIL} from '../constansts/covidConstansts'


export const listcovid = () => async (dispatch) =>{
    const data = await axios.get('/coviddata.json')
    const res = data.data.world_total
    console.log("item",res);

    try {
        dispatch({ type: COVID_LIST_SUCCESS, payload: res })
    } catch (error) {
        dispatch({ type: COVID_LIST_FAIL, error: error })
    }
}