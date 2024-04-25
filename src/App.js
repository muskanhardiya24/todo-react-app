import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
var count = 0
function App() 
{
  const [todoList, setTodoList] = useState([
    {
    id: count++,
    todo: "Need to complete homework",
    completed: true
    },
    {
      id: count++,
      todo: "buy groceries",
      completed: true
      },
      {
        id: count++,
        todo: "have to fix",
        completed: false
        },
        {
          id: count++,
          todo: " complete poject",
          completed: false
          }
    
  ])

  const addTodo = () =>
  {
    // console.log("Add Todo");
    // console.log("Text readed: ", document.getElementById("input").value);
    // todoList.push(document.getElementById("input").value)
  
    // console.log("todoList: ", todoList);
    const text = document.getElementById("input").value
    const todoObject = {
      id: count++,
      todo: text,
      completed: false
    }
    setTodoList([...todoList, todoObject])
  }
  const deleteTodo = (id) =>
  {
    console.log("deletTodo: ", id);
    var tempTodoList = todoList.filter(iterator =>
    {
      return id != iterator.id
      // if(id === iterator.id)
      // {
      //   return false
      // }
      // else
      // {
      //   return true
      // }
    }) 
    setTodoList([...tempTodoList])
  }
const completedTodo =(id) =>
{
  console.log("completedTodo:, ", id);
   
    var tempTodoList = todoList.map(iterator =>
      {
        if(id === iterator.id)
        {
          iterator.completed = !iterator.completed
          return iterator
        }
        else
        {
          return iterator
        }
      }
  
  )
  setTodoList([...tempTodoList])
}


  return (
    <div>
      <h1>Todo Applicatiion</h1>
      <h4>(By Muskan Hardiya)</h4>

      <input type="text" id='input' placeholder='Enter todo here'/>
      <button onClick={addTodo}>Add Todo</button>

       <div>
        <ul>
          {
          todoList.map(iterator =>
           {
            //  console.log("iterator", iterator);
             return <li key={iterator.id}>
              { iterator.completed == true ?
              <>
             <input type='checkbox' onChange={()=>completedTodo(iterator.id)} checked/>
             <s>{iterator.todo}</s>
             </> :
             <>
             <input type='checkbox' onChange={()=>completedTodo(iterator.id)}/>
             {iterator.todo}
             </>
              }
             
              <button onClick={()=>deleteTodo(iterator.id)}>Delete</button>
              </li>
           })
           }
        </ul>
       </div> 
       
    </div>
  );
}

export default App;
