import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


var count = 0
const COMPLETED = "COMPLETED"
const INCOMPLETED = "INCOMPLETED"
const ALL = "ALL"

function App() 
{
  const [editingFlag, setEditingFlag] = useState(-1)
  const [filter, setFilter] = useState(INCOMPLETED)
  const [todoList, setTodoList] = useState([
    {
    id: count++,
    todo: "Need to complete homework",
    completed: false
    },
    {
      id: count++,
      todo: "buy groceries",
      completed: true
      },
      {
        id: count++,
        todo: "have to fix",
        completed:false
        },
        {
          id: count++,
          todo: " complete poject",
          completed: true
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


const editTodo = (id) =>
{
  console.log("editTodo: ", id);
  setEditingFlag(id)
}

  const saveEditedTodo = () =>
{
  console.log("saveEditedTodo: ");
  const updatedTodoText = document.getElementById("editingTodo").value
  console.log("updateTodoText: ", updatedTodoText);
  var tempTodoList = todoList.map(iterator =>
  {
    if(editingFlag == iterator.id)
    {
      iterator.todo = updatedTodoText
      return iterator
    }
    else
    {
      return iterator
    }


  })
                                  
    setTodoList(tempTodoList)
    setEditingFlag(-1)
  
}
 const filterTodo = (action) =>
{
  console.log("filterTodo: ", action);
  switch (action)
  {
    case INCOMPLETED:
      setFilter(INCOMPLETED)
      break;
    case COMPLETED:
      setFilter(COMPLETED)
      break;
    case ALL:
      setFilter(ALL)
      break;
    default:
      break;    
  }
}

  return (
    <div>
      <h1>Todo Applicatiion</h1>
      <h4>(By Muskan Hardiya)</h4>


      <div>
        <label onClick={()=>filterTodo(INCOMPLETED)}>Incomplete</label>&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;
        <label onClick={()=>filterTodo(COMPLETED)}>complete</label>&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;
        <label onClick={()=>filterTodo(ALL)}>ALL</label>
      </div>

      <input type="text" id='input' placeholder='Enter todo here'/>
      <button onClick={addTodo}>Add Todo</button>

       <div>
        <ul>
          {
          todoList.map(iterator =>
           {

            switch(filter)
            {
              case INCOMPLETED:
                {
                  if(!iterator.completed)
                  {
                    return <li key={iterator.id}>
                      {iterator.completed == true ?
                      <>
                        <input type='checkbox' onChange={()=>completedTodo(iterator.id)} checked/>
                        <s>{iterator.todo}</s>
                      </> :
                      <>
                        {
                          editingFlag === iterator.id ?
                        <>
                          <input type='checkbox' onChange={()=>completedTodo(iterator.id)}/>
                          <input type='text' id="editingTodo" defaultValue={iterator.todo}/>
                          <button onClick={()=>deleteTodo(iterator.id)}>Delete</button>
                          <button onClick={saveEditedTodo}>Save</button>
                        </> :
                        <>
                          <input type='checkbox' onChange={()=>completedTodo(iterator.id)}/>
                          {iterator.todo}
                          <button onClick={()=>deleteTodo(iterator.id)}>Delete</button>
                          <button onClick={()=>editTodo(iterator.id)}>Edit</button>
                        </>}
                     </>
                      }
                        </li>
                  }
                  break;
                }
              case COMPLETED:
                {
                  if(iterator.completed)
                  {
                    return <li key={iterator.id}>
                      {iterator.completed == true ?
                      <>
                        <input type='checkbox' onChange={()=>completedTodo(iterator.id)} checked/>
                        <s>{iterator.todo}</s>
                      </> :
                      <>
                        {
                          editingFlag === iterator.id ?
                        <>
                          <input type='checkbox' onChange={()=>completedTodo(iterator.id)}/>
                          <input type='text' id="editingTodo" defaultValue={iterator.todo}/>
                          <button onClick={()=>deleteTodo(iterator.id)}>Delete</button>
                          <button onClick={saveEditedTodo}>Save</button>
                        </> :
                        <>
                          <input type='checkbox' onChange={()=>completedTodo(iterator.id)}/>
                          {iterator.todo}
                          <button onClick={()=>deleteTodo(iterator.id)}>Delete</button>
                          <button onClick={()=>editTodo(iterator.id)}>Edit</button>
                        </>}
                     </>
                      }
                        </li>
                  }
                }
              case ALL:
                {
                  return <li key={iterator.id}>
                      {iterator.completed == true ?
                      <>
                        <input type='checkbox' onChange={()=>completedTodo(iterator.id)} checked/>
                        <s>{iterator.todo}</s>
                      </> :
                      <>
                        {
                          editingFlag === iterator.id ?
                        <>
                          <input type='checkbox' onChange={()=>completedTodo(iterator.id)}/>
                          <input type='text' id="editingTodo" defaultValue={iterator.todo}/>
                          <button onClick={()=>deleteTodo(iterator.id)}>Delete</button>
                          <button onClick={saveEditedTodo}>Save</button>
                        </> :
                        <>
                          <input type='checkbox' onChange={()=>completedTodo(iterator.id)}/>
                          {iterator.todo}
                          <button onClick={()=>deleteTodo(iterator.id)}>Delete</button>
                          <button onClick={()=>editTodo(iterator.id)}>Edit</button>
                        </>}
                     </>
                      }
                        </li>
                  break;
                }
              default:  
            }
            //  console.log("iterator", iterator);
             
           })
           }
        </ul>
       </div> 
       
    </div>
  );
}

export default App;
