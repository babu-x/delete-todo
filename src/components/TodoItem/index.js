// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, onDeleteTodo} = props
  const {title, id} = todoItem

  const onDelete = () => {
    onDeleteTodo(id)
  }

  return (
    <div className="item-container">
      <p className="title">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  )
}
export default TodoItem
