import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TaskType } from './Task'
import { PlusCircle } from 'phosphor-react'
import styles from './NewTask.module.css'

interface NewTaskProps {
  addTask: (newTask: TaskType) => void;
}

export function NewTask({ addTask }: NewTaskProps) {
  const [taskContent, setTaskContent] = useState<string>('');

  function handleTaskContentChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskContent(event.target.value);
  }

  function handleAddTask(event: FormEvent) {
    event.preventDefault();

    const newTask = {
      id: uuidv4(),
      content: taskContent,
      isCompleted: false
    }

    addTask(newTask);
    setTaskContent('');
  }

  return (
    <form onSubmit={handleAddTask} className={styles.form}>
      <input 
        type="text"
        value={taskContent}
        onChange={handleTaskContentChange}
        placeholder="Add a new task"
        required
      />
      <button type="submit">
        Create <PlusCircle size={16} />
      </button>
    </form>
  )
}