import React, {useState, useEffect} from 'react'
import { connection } from '../conexion';

export function TodoList() {

  const [todo, setTodo] = useState([]);
    useEffect(() => {
        connection.query('SELECT * FROM todo',
        (error, result) => {
            if(error){
                console.error('error', error);
                return
            }

            setTodo(result);
        })
    }, []);

  return (
    <div>
       <h2>TO-DOs</h2>
       <ul>
            {todo.map(todo => (
                <li id={todo.id}>{todo.name}</li>
            ))}
       </ul>
    </div>
  )
}

