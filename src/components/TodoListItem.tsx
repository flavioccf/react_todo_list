import { Check, Trash } from "@phosphor-icons/react";
import styles from "./TodoListItem.module.css";
import { ChangeEvent } from "react";

export interface TodoListItemType {
  id: string;
  content: string;
  completed: boolean;
}

interface TodoListItemProps {
  listItem: TodoListItemType;
  onDeleteItem: (itemId: string) => void;
  onCompleteItem: (itemId: string, completedStatus: boolean) => void;
}

export function TodoListItem({
  listItem,
  onDeleteItem,
  onCompleteItem,
}: TodoListItemProps) {
  function handleDeleteItem() {
    onDeleteItem(listItem.id);
  }

  function handleCompleteItem(e: ChangeEvent<HTMLInputElement>) {
    onCompleteItem(listItem.id, e.target.checked);
  }

  return (
    <div className={styles.todoItem}>
      <input
        id={`input-${listItem.id}`}
        type="checkbox"
        checked={listItem.completed}
        onChange={handleCompleteItem}
      />
      <label htmlFor={`input-${listItem.id}`}>
        <Check size={14} />
      </label>
      <p>{listItem.content}</p>
      <span onClick={handleDeleteItem}>
        <Trash size={24} />
      </span>
    </div>
  );
}
