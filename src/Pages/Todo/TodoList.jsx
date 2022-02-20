import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import cl from './Todo.module.css'
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';


const TodoList = () => {

    const todos = useSelector(state => state.todos)


    return(
        <div>
            <TransitionGroup>
           {
            todos.map((todo,i) => 
            <CSSTransition
              key={todo.id}
              timeout={500}
              classNames="item"
            >
                <Todo  i={i} todo={todo}/>
            </CSSTransition>
                ) 
            
           
        }
             </TransitionGroup>
        </div>
    )
}

export default TodoList