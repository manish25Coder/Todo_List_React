import { useState } from "react";
import './Todo.css'
function Todo({todoData,isFinished,changeFinished,onDelete,onEdit}) {
    const [finished,setFinished]=useState(isFinished)
    const [isEditting,setIsEditting]=useState(false)
    const [editText,setEditText]=useState(todoData)
    return(
        <div className="inside-container">
            <input className="check" type="checkbox" checked={finished}  onChange={(e) => {
                setFinished(e.target.checked);
                changeFinished(e.target.checked)
                }}/>
            {(isEditting)? <input  type="text" value={editText} onChange={e=>setEditText(e.target.value)}/> :<span>{todoData}</span>}
            <button className="edit" onClick={()=>{
                setIsEditting(!isEditting)
                onEdit(editText)
            }}>{(!isEditting)? 'Edit' :'save'}</button>
            <button className="delete" onClick={onDelete}>Delete</button>
        </div>
    )
    
}
export default Todo;