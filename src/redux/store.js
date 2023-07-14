import {combineReducers, configureStore, createStore} from "@reduxjs/toolkit" ;
import  DataUser  from "./reducer";
import  MassageData  from "./reducerMassage";

const rootReducer = combineReducers({
    Contact : DataUser,
    Massage : MassageData,
})
// export const store = createStore(rootReducer) ;
export const store = configureStore({
    reducer:{
        redux :rootReducer ,
    },
    
})
// console.log(store.getState()) ;