import 'normalize.css'
import './global.css'
import { v4 as uuidv4 } from 'uuid'
import { Header } from './components/Header'
import { TodoInput } from './components/TodoInput'
import { TodoListItem, TodoListItemType } from './components/TodoListItem'
import { useState } from 'react'

function App() {
  const [todoList, setTodoList] = useState<TodoListItemType[]>([]);

  function handleAddNewTodoListItem (content: string) {
    setTodoList([
      ...todoList,
      {
        id: uuidv4(),
        content,
        completed: false
      }
    ])
  }
  return (
    <>
      <Header/>
      <main>
        <TodoInput/>
        {
          todoList.length > 0 && todoList.map((listItem) => <TodoListItem {...listItem}/>) 
        }
        {
          todoList.length <= 0 && 'Empty'
        }
      </main>
    </>
  )
}

export default App
