import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoListItem from './TodoListItem';
import MyHeader from './MyHeader';
// import MyHeader from '../MyHeader';


var count = 0
const COMPLETED = "COMPLETED"
const INCOMPLETED = "INCOMPLETED"
const ALL = "ALL"
var countOfTodos = 0

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
     <MyHeader/>
      <h4 className='subHeading'>(By Muskan Hardiya)</h4>


      <div className='filterContainer'>
        <label onClick={()=>filterTodo(INCOMPLETED)}>Incomplete</label>&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;
        <label onClick={()=>filterTodo(COMPLETED)}>complete</label>&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;
        <label onClick={()=>filterTodo(ALL)}>ALL</label>
      </div>

      <input type="text" id='input' placeholder='Enter todo here'/>
      <button onClick={addTodo}>Add Todo</button>

       <div>
        <ul className='listStyle'>
          {

          todoList.map(iterator =>
           {
              
            if(todoList[0].id === iterator.id)
            countOfTodos = 0
            switch(filter)
            {
              case INCOMPLETED:
                {
                  if(!iterator.completed)
                  {
                    countOfTodos += 1
                    return <TodoListItem 
                    iterator={iterator}
                    completedTodo={completedTodo}
                    editingFlag={editingFlag}
                    deleteTodo={deleteTodo}
                    saveEditedTodo={saveEditedTodo}
                    editTodo={editTodo}/>            
                  
                  }
                  break;
                }
              case COMPLETED:
                {
                  if(iterator.completed)
                  {
                    countOfTodos += 1
                    return <TodoListItem
                          
                          iterator={iterator}
                          completedTodo={completedTodo}
                          editingFlag={editingFlag}
                          deleteTodo={deleteTodo}
                          saveEditedTodo={saveEditedTodo}
                          editTodo={editTodo}/>
                  }
                  break;
                }
              case ALL:
                {
                  countOfTodos += 1
                  return <TodoListItem
                   
                          iterator={iterator}
                          completedTodo={completedTodo}
                          editingFlag={editingFlag}
                          deleteTodo={deleteTodo}
                          saveEditedTodo={saveEditedTodo}
                          editTodo={editTodo}/>
                          
                  break;
                }
              default:  
            }
            //  console.log("iterator", iterator);
             
           })
           }
        </ul>
       </div> 
            <div>
              Count: {countOfTodos}
            </div>
       
    </div>
  );
}


export default App;
