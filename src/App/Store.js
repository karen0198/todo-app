import { createStore } from 'redux';

const store = createStore(function(state,action) {
    if(action.type === 'add-todo') {
        
        return {
            ...state,
            todos: [
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    completed: action.payload.completed,
                },
                ...state.todos
            ]
        }
    }

    if(action.type === 'update-todo') {
        const todoId = action.payload.id;
        const indexItem = state.todos.findIndex(({id}) => id === todoId)
        
        return {
            ...state,
            
            todos: [
                    ...state.todos.slice(0,indexItem),
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                        completed: action.payload.completed,
                    },
                    ...state.todos.slice(indexItem + 1),
                ]
            }
    }

    if(action.type === 'delete-todo') {
        const todoId = action.payload.id;
        const indexItem = state.todos.findIndex(({id}) => id === todoId)
        
        return {
            ...state,
            
            todos: [
                    ...state.todos.slice(0,indexItem),
                    ...state.todos.slice(indexItem + 1),
                ]
            }
    }

    if(action.type === 'delete-completed') {
        const todoId = action.payload.id;

        
        return {
            ...state,
            
            todos: [
                ...state.todos.filter((todo) => !todo.completed)
                ]
            }
    }

    if(action.type === 'delete-all') {
        return {
            todos: [
                
            ]
        }
    }

    return state;
}, {
    todos: [],

});

export default store;