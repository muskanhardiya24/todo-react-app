const todoListItem = (props) =>
{
 const iterator = props.iterator
 console.log("iterator: " ,iterator)
return <li key={iterator.id} className='listItemStyle'>
            {iterator.completed == true ?
            <>
            <input type='checkbox' onChange={()=>props.completedTodo(iterator.id)} checked/>
            <s>{iterator.todo}</s>
            </> :
            <>
            {
                props.editingFlag === iterator.id ?
            <>
                <input type='checkbox' onChange={()=>props.completedTodo(iterator.id)}/>
                <input type='text' id="editingTodo" defaultValue={iterator.todo}/>
                <button onClick={()=>props.deleteTodo(iterator.id)}>Delete</button>
                <button onClick={props.saveEditedTodo}>Save</button>
            </> :
            <>
                <input type='checkbox' onChange={()=>props.completedTodo(iterator.id)}/>
                {iterator.todo}
                <button onClick={()=>props.deleteTodo(iterator.id)}>Delete</button>
                <button onClick={()=>props.editTodo(iterator.id)}>Edit</button>
            </>}
            </>
            }
            </li>
    //   return <div>List Item</div>                   
}
export default todoListItem