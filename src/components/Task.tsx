import styles from './Task.module.css'
import { Trash } from "phosphor-react"

export interface TaskType {
  id: string;
  content: string;
  isCompleted: boolean;
}

interface TaskProps {
  task: TaskType;
  deleteTask: (id: string) => void;
  completeTask: (id: string) => void;
}

export function Task({ task, deleteTask, completeTask }: TaskProps) {
  function handleDeleteTask() {
    deleteTask(task.id);
  }

  function handleCompleteTask() {
    completeTask(task.id);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.checkWrapper}>
        <input 
          type="checkbox"  
          onChange={handleCompleteTask} 
          className={styles.checkBox} 
          checked={task.isCompleted} 
        />
        {task.content}
      </div>
      <button className={styles.delete} onClick={handleDeleteTask}>
        <Trash size={14} />
      </button>
    </div>
  )
}