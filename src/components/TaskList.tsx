import { Task, TaskType } from './Task'
import { NoMatchesFound } from './NoMatchesFound'

import styles from './TaskList.module.css'

interface TaskListProps {
  tasks: TaskType[];
  deleteTask: (id: string) => void;
  completeTask: (id: string) => void;
}

export function TaskList({ tasks, deleteTask, completeTask }: TaskListProps) {
  const tasksCompleted = tasks.reduce((counter, task) => {
    if (task.isCompleted === true) counter += 1;
    return counter;
  }, 0);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.counter}>
          <strong className={styles.tasksCreated}>Tasks created</strong> 
          <span>{tasks.length}</span>
        </div>

        <div className={styles.counter}>
          <strong className={styles.tasksCompleted}>Completed</strong> 
          <span>{tasksCompleted} of {tasks.length}</span>
        </div>
      </header>
      <div className={styles.tasksWrapper}>
        {tasks.length > 0 ? (
          tasks.map(task => (
            <Task task={task} key={task.id} deleteTask={deleteTask} completeTask={completeTask} />
          ))
        ) : (
          <NoMatchesFound />
        )}
      </div>
    </div>
  )
}