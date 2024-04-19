import { PlusCircle } from '@phosphor-icons/react';
import styles from './TodoInput.module.css';

export function TodoInput () {
  return <form className={styles.todoForm}>
    <input placeholder='Add a new task'/>
    <button type='submit'>Create <PlusCircle size={16}/></button>
  </form>
}