import axios from 'axios'
import {COVID_LIST_SUCCESS,COVID_LIST_FAIL} from '../constansts/covidConstansts'


export const countrycovid = () => async (dispatch) =>{
    const data = await axios.get('/coviddata.json')
    const coun = data.data.countries_stat
    console.log("country",coun);

    try {
        dispatch({ type: COVID_LIST_SUCCESS, payload: coun })
    } catch (error) {
        dispatch({ type: COVID_LIST_FAIL, error: error })
    }
}