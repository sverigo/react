import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

    maxId = 0;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ],
        term: '',
        filter: 'all' // all, active, done
    };

    createTodoItem(text) {
        return {
            label: text,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    addItem = (text) => {
        const newItem = this.createTodoItem(text);
        this.setState(({todoData}) => {
            const editedData = [...todoData];
            editedData.push(newItem);
            return {
                todoData: editedData
            };
        });
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const index = todoData.findIndex((e) => e.id === id);
            const editedData = [...todoData];
            editedData.splice(index, 1);
            return {
                todoData: editedData
            };
        });
    };

    setItemDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProrerty(todoData, id, 'done')
            }
        });
    };

    setItemImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProrerty(todoData, id, 'important')
            }
        });
    };

    toggleProrerty = (arr, id, propName) => {
        const index = arr.findIndex((e) => e.id === id);
        const editedItem = arr[index];
        const newItem = {...editedItem, [propName]: !editedItem[propName]};
        const editedData = [...arr];
        editedData.splice(index, 1, newItem);
        return editedData;
    };

    search(items, term) {
        if (term.length === 0) return items;
        return items.filter((e) => {
            return e.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    searchChange = (term) => {
        this.setState({ term });
    };

    filter(items, filter) {
        switch(filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((e) => !e.done);
            case 'done':
                return items.filter((e) => e.done);
            default:
                return items;
        }
    }

    filterChange = (filter) => {
        this.setState({ filter });
    }

    render() {
        const { todoData, term, filter } = this.state;
        const visibleItems = this.filter(this.search(todoData, term), filter);
        const doneCount = todoData.filter((e) => e.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange={this.searchChange} />
                    <ItemStatusFilter onFilterChange={this.filterChange} filter={filter} />
                </div>
                <TodoList todos={visibleItems} onDeleted={this.deleteItem}
                    onToggleDone={this.setItemDone} onToggleImportant={this.setItemImportant} />
                <ItemAddForm onAdded={this.addItem} />
            </div>
        );
    }
}