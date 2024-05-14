import styles from './TodoEmpty.module.css';
import { ClipboardText } from "@phosphor-icons/react";

export function TodoEmpty () {
  return <div className={styles.todoEmptyWrapper}>
    <ClipboardText size={56} />
    <p>
      You haven't created any tasks yet<br></br>
      <strong>Create tasks and organize your to do items</strong>
    </p>
  </div>
}