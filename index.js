const redux = require('redux')
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

const incrementAction = (value)=>{return {type: 'INCREMENT', payload:value || 1}} 
const decrementAction = (value)=>{return {type: 'DECREMENT', payload:value || 1}}

function counterReducer(state = 6, action){

    switch (action.type) {
        case 'INCREMENT':
                return state  + action.payload;
        case 'DECREMENT':
            return state  - action.payload;
        default:
            return state;
    }

}
//---------------------------

const addItemAction = (item)=>{return {type:"ADD_ITEM", payload:item}}

const listReducer = (state = ['Um item padrão'], action)=>{

    console.log(action.type)
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload]
        
        default:
            return state
    }
}

const allReducer = combineReducer({
    counter: counterReducer,
    list: listReducer
})
const store = createStore(allReducer)
console.log(store.getState())

store.subscribe(()=>{console.log(store.getState())})
store.dispatch(addItemAction('Um novo Item'))
store.dispatch(incrementAction())
store.dispatch(incrementAction(1))
store.dispatch(incrementAction(5))