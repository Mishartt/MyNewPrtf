import react, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addManyTodosAction, addTodoAction, useInpAction } from ".";
import cl from './Todo.module.css'
import TodoList from "./TodoList";


const TodoApp = () => {

    const [value,setValue] = useState('')
    // ¯\_(ツ)_/¯
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)
    const addTodo = () => {
        if(value == ''){
            return
        }

      

        const newTodo = {
            value,
            id:Date.now(),
            checked:false
        }
        dispatch(addTodoAction(newTodo))
        setValue('')
    }
    
    useEffect(() => {
        const myTodos = JSON.parse(localStorage.getItem('todos'))
       
        if(myTodos){
            console.log(myTodos);
            dispatch(addManyTodosAction(myTodos))
        }
       
    },[])

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos))
        console.log('x');
    },[todos])
    

    

    return(
        <div className={cl.container}>
            <div className={cl.todoBox}>
                <div className={cl.inp}>
               <input value={value} onChange={e => setValue(e.target.value)} className={cl.inpt} type='text' placeholder="What needs to be done?"/>
               <div className={cl.addBtn} onClick={addTodo}>+</div>
                </div>

                {todos.length > 0 ? 
                 <TodoList/>
                 :
                <div className={cl.nth}>¯\_(ツ)_/¯</div>
                }

            </div>
        </div>
    )
}


export default TodoApp 