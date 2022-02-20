import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";



const defaultState = {
    todos:[],
    inp:''
}

const addTodo = 'addTodo'
const removeTodo = 'removeTodo'
const addManyTodos = 'addManyTodos'
const change = 'change'

const reducer = (state = defaultState,action) =>{
    switch(action.type){
        case addTodo:
        return {...state,todos:[...state.todos,action.payload]}
        case removeTodo:
        return {...state,todos:state.todos.filter(todo => todo.id !== action.payload)}
        case addManyTodos:
        return {...state,todos:[...state.todos,...action.payload]}
        case change :  
        const newState = state;
        if(newState.todos[action.payload].checked !== true){
            newState.todos[action.payload].checked = true
        }else{
            newState.todos[action.payload].checked = false
        }
        return newState

       

        

        default:
            return state
    }
}

export const addTodoAction = (payload) =>({type:addTodo,payload}) 
export const removeTodoACtion = payload => ({type:removeTodo,payload})
export const addManyTodosAction = (payload) =>({type:addManyTodos,payload}) 
export const changeAction = (payload) =>({type:change,payload}) 







export const store = createStore(reducer,composeWithDevTools())