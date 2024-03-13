import React, {useEffect, useState} from 'react';
import * as PropTypes from "prop-types";
import PrintTodos from "./PrintTodos";
const CreateTodo = () => {

    const [todo,setTodo]=useState("");
    const [todoList,setTodoList]=useState([]);

    useEffect(() => {
        let arr= localStorage.getItem("todos");

        if(arr){
            let todoList= JSON.parse(arr);
            setTodoList(todoList);
        }
    }, []);

    const handleSubmit =(e) =>{
        e.preventDefault();
        var taskList = [...todoList,todo];
        setTodoList(taskList);
        localStorage.setItem("todos",JSON.stringify(taskList));
        console.log("Todo",todo);
        setTodo("");
    }
    const  handleCreateTodo =(e) =>{
        var task = e.target.value;
        setTodo(task);
    }
    const handleDelete =(id)=>{
        console.log("Delete");
       const lists = todoList.filter((todo,index) => index!=id);
       localStorage.setItem("todos",JSON.stringify(lists));
        setTodoList(lists);
        window.location.reload();
    }

    const handleEdit =(id,changedtask) =>{
             const lists = todoList.map((todo,index) => index==id?changedtask:todo);
             setTodoList(lists);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todoSpace" placeholder="Enter your Task" value={todo}  required onChange={handleCreateTodo}/>&nbsp;<button type="submit">CREATE</button>
           </form>
            <PrintTodos todos={todoList} deletehandler={handleDelete} edithandler={handleEdit}/>
        </>
    );
};

export default CreateTodo;
