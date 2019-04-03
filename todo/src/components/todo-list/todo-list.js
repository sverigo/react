import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {
    
    const listItems = todos.map((item) => {
        const { id, ...listProps } = item;

        return (
            <li className="list-group-item" key={id}>
                <TodoListItem { ...listProps } onDeleted={() => onDeleted(id)}
                    onToggleDone={() => onToggleDone(id)} 
                    onToggleImportant={() => onToggleImportant(id)} />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            { listItems }
        </ul>
    );
};

export default TodoList;