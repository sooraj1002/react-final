import {useState,useEffect} from 'react';
import "./styles.css";    
import NewTodoForm from "./assets/NewTodoForm";
import TodoList from './assets/TodoList';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(title: string){
    setTodos((currentTodos)=>{
        return [
            ...currentTodos,
        {id:crypto.randomUUID(),title:title,completed:false},
        ]
    })
  }

  function toggleTodo(id :string, completed : boolean){
    setTodos(currentTodos=>{
      return currentTodos.map(todo =>{
        if(todo.id===id){
          return {...todo,completed};
        }
        return todo;
      })
    })
  }

  function deleteTodo(id: string){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    });
  }


  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>
      {todos.length===0 && "NO Todos"}
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App
