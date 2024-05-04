import React from 'react'
import { useState, useEffect } from 'react';
import './task.css'
import Scroll from '../Scroll/Scroll';


export const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((ress) => {
        return ress.json();
      })
      .then((data) => {
        setTasks(data);
      });
  }, []);
 
  const handleDelete = () =>{
    if(!selectedTask) return;
  fetch(`https://jsonplaceholder.typicode.com/todos/${selectedTask.id}`, {method: 'DELETE',
})
.then((ress) => {
  if(ress.ok){
    setTasks((prevTasks) => 
      prevTasks.filter((task) => task.id !== selectedTask.id) 
    )
    selectedTask(null)
  }
})
  .catch((error)=> console.error("Error deleteting task: ", error))
}
const handleCompleted= () => {
  if(!selectedTask) return;
  fetch(`https://jsonplaceholder.typicode.com/todos/${selectedTask.id}`, {method: 'PATCH',
      body: JSON.stringify({completed: true}),
      headers: {
      'Content-type': 'application/json; charset=UTF-8',
      },
})
    .then((ress)=>{
      if(ress.ok){
        setTasks((prevTasks) => 
        prevTasks.map((task) =>
          task.id === selectedTask.id ? {...task, completed: true} : task
            )
          )
            setSelectedTask((prevTask) => ({...prevTask, completed : true }))
          }
        })
        .catch((error) =>console.error('Error completing task: ', error))
    }
  return (
    <div className="container">
     <Scroll>
        <ul className='tasks'>
          {tasks.map((task)=>(
            <div>
              <li 
               key={task.title}
               alt={task.id}
               onClick={() => setSelectedTask(task)}
               className={task.id === selectedTask?.id ? 'selected' : ''}
               style = {{color: task.completed ? 'green' : 'none' }} 
              //  this is extra design for completed tasks
                >
              {task.title}
              </li>
            </div>
          ))}
        </ul>
        </Scroll>
        <div className='details'>
          <ul>
            <li>Title : <span>{selectedTask ? selectedTask.title : 'Title of your task'} </span></li>
            <li>User Id : <span>{selectedTask ? selectedTask.userId : 'Your User Id'}</span>  </li>
          <div className='buttons'>
            <button className='button delete' onClick={handleDelete}>Delete</button>
            <button className='button completed' onClick={handleCompleted}>Completed</button>
          </div>
          </ul>
        </div>
    </div>    
  )
}
