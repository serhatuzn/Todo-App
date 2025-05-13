import { useState, useEffect } from 'react';

const TodoApp = () => {
  // State tanımlamaları
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Başlangıçta varsayılan todo'ları yükle
  useEffect(() => {
    const initialData = [
      { id: 1, text: "Taste JavaScript", done: true },
      { id: 2, text: "Code furiously", done: true },
      { id: 3, text: "Promote Mavo", done: false },
      { id: 4, text: "Give talks", done: false },
      { id: 5, text: "Write tutorials", done: true },
      { id: 6, text: "Have a life!", done: false }
    ];
    
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    } else {
      setTodos(initialData);
    }
  }, []);
  
  // Todo'ları localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  // Filtrelenmiş todo'ları al
  const filteredTodos = todos.filter(todo => {
    if (activeFilter === 'active') return !todo.done;
    if (activeFilter === 'completed') return todo.done;
    return true; // 'all' için tüm todo'ları göster
  });
  
  // Tamamlanmamış todo sayısı
  const todoLeft = todos.filter(todo => !todo.done).length;
  
  // Tamamlanmış todo sayısı
  const todoDone = todos.filter(todo => todo.done).length;
  
  // Tüm todoları işaretle/kaldır
  const toggleAll = () => {
    const allDone = todoLeft === 0;
    setTodos(todos.map(todo => ({
      ...todo,
      done: !allDone
    })));
  };
  
  // Yeni todo ekle
  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: newTodo.trim(),
        done: false
      }
    ]);
    setNewTodo('');
  };
  
  // Todo'yu sil
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  // Todo'nun durumunu değiştir
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };
  
  // Todo'yu düzenle
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  
  const startEditing = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };
  
  const saveEdit = (id) => {
    if (editText.trim() === '') {
      deleteTodo(id);
    } else {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, text: editText.trim() } : todo
      ));
    }
    setEditingId(null);
  };
  
  // Tamamlanmış tüm todo'ları temizle
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.done));
  };
  
  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={addTodo}>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              autoFocus
            />
          </form>
        </header>
        
        {todos.length > 0 && (
          <section className="main">
            <input
              id="toggle-all"
              className="toggle-all"
              type="checkbox"
              checked={todoLeft === 0}
              onChange={toggleAll}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
            
            <ul className="todo-list">
              {filteredTodos.map(todo => (
                <li
                  key={todo.id}
                  className={`${todo.done ? 'completed' : ''} ${todo.id === editingId ? 'editing' : ''}`}
                >
                  <div className="view">
                    <input
                      className="toggle"
                      type="checkbox"
                      checked={todo.done}
                      onChange={() => toggleTodo(todo.id)}
                    />
                    <label onDoubleClick={() => startEditing(todo.id, todo.text)}>
                      {todo.text}
                    </label>
                    <button
                      className="destroy"
                      onClick={() => deleteTodo(todo.id)}
                    ></button>
                  </div>
                  {todo.id === editingId && (
                    <input
                      className="edit"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      onBlur={() => saveEdit(todo.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') saveEdit(todo.id);
                        if (e.key === 'Escape') setEditingId(null);
                      }}
                      autoFocus
                    />
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}
        
        {todos.length > 0 && (
          <footer className="footer">
            <span className="todo-count">
              <strong>{todoLeft}</strong> {todoLeft === 1 ? 'item' : 'items'} left
            </span>
            
            <ul className="filters">
              <li>
                <a
                  href="#/"
                  className={activeFilter === 'all' ? 'selected' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveFilter('all');
                  }}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  href="#/active"
                  className={activeFilter === 'active' ? 'selected' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveFilter('active');
                  }}
                >
                  Active
                </a>
              </li>
              <li>
                <a
                  href="#/completed"
                  className={activeFilter === 'completed' ? 'selected' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveFilter('completed');
                  }}
                >
                  Completed
                </a>
              </li>
            </ul>
            
            {todoDone > 0 && (
              <button
                className="clear-completed"
                onClick={clearCompleted}
              >
                Clear completed
              </button>
            )}
          </footer>
        )}
      </section>
      
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a> (Original) - React version by you</p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </div>
  );
};

export default TodoApp;