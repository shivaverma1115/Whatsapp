import { createStore } from "redux";
import { reducer } from "./reducer";
//use this variable to create the redux store.
//the initial data of the redux store should be {counter: 10}
const initState={
    data :[1,2,3,4,5] ,
}
const store = createStore(reducer, initState);


export { store };