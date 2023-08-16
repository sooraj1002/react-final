import { useState ,useEffect} from 'react'

function App() {
  const [resource, setResource] = useState('posts')
  console.log("new renderr");
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))
  },[resource]);

  return (
    <>
      <div>
        <button onClick={()=>{
          setResource('posts')
        }}>Posts</button>
        <button onClick={()=>{
          setResource('users')
        }}>Users</button>
        <button onClick={()=>{
          setResource('comments')
        }}>Comments</button>
      </div>
      <h1>
        {resource}
      </h1>
    </>
  )
}

export default App
