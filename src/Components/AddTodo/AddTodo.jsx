import { useContext, useState } from "react";
import TodoDispatch from "../../Context/TodoDispatch";
import './AddTodo.css'

function AddTodo() {

    const [inputText,setInputText]=useState('')
    const {dispatch} = useContext(TodoDispatch);

    return(
        <div className="container">
           
            <input 
                className="innerContainer"
                type="text"
                value={inputText}
                placeholder="Add Your Next Todo..."
                onChange={e=>setInputText(e.target.value)}
            />
            
            
            <button className="innerContainer-add" onClick={()=>{
                
                dispatch({type:'add_todo', payload:{todoText: inputText}})
                setInputText('');
                }}>Add</button>
        </div>
    )
    
}
export default AddTodo;