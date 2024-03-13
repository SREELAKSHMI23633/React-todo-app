import React, {useState} from 'react';
const PrintTodos = ({todos,deletehandler,edithandler}) => {
    const [editId,setEditId] = useState(null);
    const [editTask,setEditTask] = useState('');

    const handleEditBoolen = (index,task) =>{
        // const newTask = window.prompt("Edit task", todos[index]);
        // if (newTask !== null) {
        //     const updatedTodos = [...todos];
        //     updatedTodos[index] = newTask;
        //     setTodos(updatedTodos);
        // }
        setEditId(index);
        var presentTask =  todos.find((todo) =>(todo.id===index));
        console.log("check",presentTask);
        setEditTask(task);
    }

    const handleChange= (e) =>{
        var editedTodo = e.target.value
        // if(editedTodo){
            setEditTask(editedTodo)
        // }else {
        //     alert("PLS edit the TODO")
        // }
    }
    const handlingEdit=(index) =>{

        if(editTask){
            edithandler(index,editTask);
            setEditId(null);
        }else {
            setEditTask(todos.index)
            alert("PLEASE EDIT THE TODO");
        }


    }

    return (
        <div>
            {todos.map((todo,index)=>
                {
                    return(
                        <div key={index}>
                            {
                                (editId===index)?
                                    (
                                        <div className="todo-item">
                                            <input type="text" value={editTask} onChange={handleChange}/>
                                            <button onClick={() => handlingEdit(index)}>Update</button>

                                        </div>

                                    )
                                    :
                                    (
                                        <div className="todo-item">
                                            <h1 className="todo-title">{todo}</h1>
                                                <button onClick={()=>handleEditBoolen(index,todo)}>EDIT</button>
                                                <button onClick={() => deletehandler(index)}>DELETE</button>
                                        </div>
                                    )
                            }

                        </div>
                    )

                })
            }

        </div>
    );
};

export default PrintTodos;