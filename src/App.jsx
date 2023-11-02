import { useContext, useReducer, useState } from 'react'

import './App.css'
import TodoList from './Components/TodoList/TodoList'
import AddTodo from './Components/AddTodo/AddTodo'
import TodoContext from './Context/TodoContext'
import TodoReducer from './Reducer/TodoReducer'
import TodoDispatch from './Context/TodoDispatch'

function App() {
  // const [list,setList]=useState([
  //   {
  //       id:1,
  //       todoData:'todo 1',
  //       finished: false
  //   },
  //   {
  //       id:2,
  //       todoData:'todo 2',
  //       finished: true
  //   }
  // ]);

  const [list,dispatch] = useReducer(TodoReducer,[])
 
  

  return (
    <TodoContext.Provider value={{list}}>
      <TodoDispatch.Provider value={{dispatch}}>
    <AddTodo/>
    <TodoList />
    </TodoDispatch.Provider>
    </TodoContext.Provider>
  )
}

export default App
