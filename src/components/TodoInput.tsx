import { PlusCircle } from "@phosphor-icons/react";
import styles from "./TodoInput.module.css";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface TodoInputProps {
  onCreateNewItem: (content: string) => void;
}

export function TodoInput({ onCreateNewItem }: TodoInputProps) {
  const [newItemContent, setNewItemContent] = useState("");
  function handleNewItemChange(e: ChangeEvent<HTMLInputElement>) {
    setNewItemContent(e.target.value);
  }
  function handleNewItemInvalid(e: InvalidEvent<HTMLInputElement>) {
    e.target.setCustomValidity("This is a mandatory field");
  }
  function handleCreateNewItem(e: FormEvent) {
    e.preventDefault();
    onCreateNewItem(newItemContent);
    setNewItemContent("");
  }
  return (
    <form className={styles.todoForm} onSubmit={handleCreateNewItem}>
      <input
        value={newItemContent}
        required
        onChange={handleNewItemChange}
        onInvalid={handleNewItemInvalid}
        placeholder="Add a new task"
      />
      <button type="submit">
        Create <PlusCircle size={16} />
      </button>
    </form>
  );
}
