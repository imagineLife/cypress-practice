import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

const TodoItem = ({deleteTodo, editTodo, todo}) => {
  const [editing, setEditing] = useState(false)

  const handleSave = (todo, text) => {
    if (text.length === 0) {
      deleteTodo(todo.id)
    } else {
      editTodo(todo.id, { ...todo, text: text })
    }
    setEditing(false)
  }

  let element;
  if (editing) {
    element = (
      <TodoTextInput text={todo.text}
                     editing={editing}
                     onSave={(text) => handleSave(todo, text)} />
    )
  } else {
    element = (
      <div className="view">
        <input className="toggle"
               type="checkbox"
               checked={todo.completed}
               onChange={() => {
                 editTodo(todo.id, { ...todo, completed: !todo.completed })
               }
                } />
        <label onDoubleClick={() => setEditing(true)}>
          {todo.text}
        </label>
        <button className="destroy"
                onClick={() => deleteTodo(todo.id)} />
      </div>
    )
  }

  return (
    <li data-cy={`todo-item-${todo.id}`} className={classnames({
      completed: todo.completed,
      editing
    })}>
      {element}
    </li>
  )
}

export default TodoItem;