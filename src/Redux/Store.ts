import { combineReducers, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import { employeesReducer } from "./EmployeesState";


// Creating reducers object from all our reducers: 
const reducers = combineReducers({ employeesState: employeesReducer});

const store = createStore(reducers);

//or: With Redux-DevTools
// const store = createStore(reducers, composeWithDevTools()); 


export default store;
