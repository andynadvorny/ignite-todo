import styles from './NoMatchesFound.module.css'
import clipboardIcon from '../assets/clipboard.svg'

export function NoMatchesFound() {
  return (
    <div className={styles.wrapper}>
      <img src={clipboardIcon} alt="clipboard icon" />
      <strong>You don't have any taks yet</strong>
      <span>Create tasks to organize your to dos</span>
    </div>
  )
}