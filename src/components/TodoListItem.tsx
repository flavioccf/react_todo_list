
export interface TodoListItemType {
  id: string;
  content: string;
  completed: boolean;
}

export function TodoListItem ({id, content, completed}: TodoListItemType) {
  return <>{ id } { content } {completed }</>
}