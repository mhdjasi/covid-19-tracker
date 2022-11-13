import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { covidListReducer } from './redux/reducers/covidReducer'
import { countryListReducer } from './redux/reducers/countryReducer'

const reducers = combineReducers({

    covidReducer : covidListReducer,
    countryReducer : countryListReducer
})

const middleware = [thunk]

const store = createStore(reducers, applyMiddleware(...middleware))

export default store