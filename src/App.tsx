import { useState } from 'react'
import { NewTask } from './components/NewTask'
import { TaskList } from './components/TaskList'
import { TaskType } from './components/Task'

import styles from './App.module.css'
import todoLogo from './assets/logo.svg'

import './global.css'

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([{
    id: '1',
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    isCompleted: true
  },
  {
    id: '2',
    content: "Fuga alias voluptatem minima dolores, eaque autem cupiditate cum labore",
    isCompleted: false
  }]);

  function addNewTask(newTask: TaskType) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id: string) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function completeTask(id: string) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    const newTaskList = [...tasks];

    newTaskList[taskIndex].isCompleted = !newTaskList[taskIndex].isCompleted;

    setTasks(newTaskList);
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <img src={todoLogo} alt="todo logo" />
      </header>
      <main className={styles.main}>
        <NewTask addTask={addNewTask} />

        <TaskList tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} />
      </main>
    </div>
  )
}
