import { useState } from "react";
import "./TodoApp.css";
// DESAFIOS
// Salvar itens localStorage
// Carregar eles com useEffect
// Deletar itens com uma função e evento

const TodoApp = () => {
  // Lista de tarefas
  const [todos, setTodos] = useState([]);

  // Estado de texto da tarefa
  const [inputValue, setInputValue] = useState("");

  // Adicionar tarefa
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);

      setInputValue("");
    }
  };

  // Função para deletar tarefa
  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1 className="title">Lista de tarefas</h1>
      {/*  Form para adicionar tarefas */}
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Adicione uma tarefa..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="ad-button">
          Adicionar
        </button>
      </form>

      {/*  Lista de tarefas */}
      {todos.length === 0 && <p className="empty">Não há tarefas.</p>}

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.text}
            <button
            onClick={() => handleDeleteTodo(todo.id)}
             className="delete-button">Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
