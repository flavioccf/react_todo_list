import "normalize.css";
import "./global.css";
import { v4 as uuidv4 } from "uuid";
import { Header } from "./components/Header";
import { TodoInput } from "./components/TodoInput";
import { TodoListItem, TodoListItemType } from "./components/TodoListItem";
import { useState } from "react";
import { TodoSummary } from "./components/TodoSummary";
import { TodoEmpty } from "./components/TodoEmpty";

function App() {
  const [todoList, setTodoList] = useState<TodoListItemType[]>([
    {
      id: uuidv4(),
      content:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      completed: false,
    },
    {
      id: uuidv4(),
      content:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      completed: true,
    },
  ]);

  function createNewItem(content: string) {
    setTodoList([
      ...todoList,
      {
        id: uuidv4(),
        content,
        completed: false,
      },
    ]);
  }

  function deleteItem(itemId: string) {
    console.log("deleteItem", itemId);
    const filteredList = todoList.filter((item) => item.id !== itemId);

    setTodoList([...filteredList]);
  }

  function completeItem(itemId: string, completeStatus: boolean) {
    console.log(itemId, completeStatus);
    const nextTodoList = todoList.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          completed: completeStatus,
        };
      }
      return item;
    });
    setTodoList(nextTodoList);
  }

  return (
    <>
      <Header />
      <main>
        <TodoInput onCreateNewItem={createNewItem} />
        <TodoSummary
          totalTasks={todoList.length}
          concludedTasks={todoList.filter((item) => item.completed).length}
        />
        {todoList.length > 0 &&
          todoList.map((listItem) => (
            <TodoListItem
              key={listItem.id}
              onCompleteItem={completeItem}
              onDeleteItem={deleteItem}
              listItem={listItem}
            />
          ))}
        {todoList.length <= 0 && <TodoEmpty />}
      </main>
    </>
  );
}

export default App;
