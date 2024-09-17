import React from "react";
import Add_icon from "../assets/todo-add-svgrepo-com.svg";
import ItemsTodo from "./ItemsTodo";

const Todo = () => {
  const [todoList, setTodoList] = React.useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const inputRef = React.useRef();
  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const toggle = (id) => {
    setTodoList((prvTodos) => {
      return prvTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  const deleteTodo = (id) => {
    setTodoList((prvTodos) => {
      return prvTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* ------ This is title ------ */}
      <div className="flex items-center mt-7 gap-2">
        <img className="w-9" src={Add_icon} alt="add_icon" />
        <h1 className="text-3xl font-semibold pl-2">To-Do List</h1>
      </div>

      {/* ------ This is input box ------ */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full ">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-3 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task..."
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-green-800 w-32 h-14 text-white text-lg font-medium"
        >
          ADD +
        </button>
      </div>

      {/* ------ This is todo list ------ */}
      <div>
        {todoList.map((item, index) => {
          return (
            <ItemsTodo
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
