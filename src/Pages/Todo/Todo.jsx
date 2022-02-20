import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodoAction, changeAction, removeTodoACtion } from ".";
import cl from './Todo.module.css'



const Todo = ({todo,i}) => {

    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)
    const removeTodo = () => {
        dispatch(removeTodoACtion(todo.id))
    }

    

    const checkedd = () =>{
        dispatch(changeAction(i))
        console.log(todos);
        localStorage.clear()
        localStorage.setItem('todos',JSON.stringify(todos))
       const td = {
           id:'x'
       }
       dispatch(addTodoAction(td))
       dispatch(removeTodoACtion('x'))
    }
    

    console.log(todo.checked);
    if(todo.checked == true){
       
    }else{
        
    }

    return(
        <div onClick={checkedd} className={cl.todo}>
            <div style={{display:'flex'}}> 
                <div className={cl.numb}>{i+1}</div>
                {todo.checked == true ?
                  <p className={cl.done} >{todo.value}</p>
                :
                  <p>{todo.value}</p>
                }
                  
                </div>
                    <p onClick={removeTodo} >X</p>
        </div>
    )
}


export default Todo