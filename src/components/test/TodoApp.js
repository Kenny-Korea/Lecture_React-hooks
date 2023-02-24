import React, { useEffect, useRef, useState, useTransition } from "react";

const TodoApp = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "abc",
      checked: false,
    },
    {
      id: 2,
      title: "abc",
      checked: false,
    },
    {
      id: 3,
      title: "abc",
      checked: false,
    },
  ]);
  const [todo, setTodo] = useState("");
  const [value, setValue] = useState("");
  console.log(value);
  const inputRef = useRef();
  let idGenerator = todoList.map((a, i) => {
    return a.id;
  });
  const onInsert = (text) => {
    const todo = {
      id: Math.max(...idGenerator) + 1,
      title: text,
      checked: false,
    };
    setTodoList(todoList.concat(todo));
  };

  const onRemove = (id) => {
    setTodoList(
      todoList.filter((a) => {
        return a.id !== id;
      })
    );
  };

  const onChecked = (id) => {
    setTodoList(
      todoList.map((a, i) => {
        return a.id === id ? { ...a, checked: !a.checked } : a;
      })
    );
  };

  useEffect(() => {
    inputRef.current = "";
    // inputRef.current.focus();
  }, [todoList]);
  return (
    <>
      <h1>Todo App</h1>
      <input
        type="text"
        value={todo.title}
        ref={inputRef}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          return onInsert(value);
        }}
      >
        submit
      </button>
      <button
        onClick={() => {
          console.log(todoList);
        }}
      >
        Print Object
      </button>
      <hr />
      {todoList.map((a, i) => {
        return (
          <div
            key={a.id}
            style={{ backgroundColor: "pink" }}
            onClick={() => {
              onChecked(a.id);
              localStorage.setItem("id", a.id);
            }}
          >
            <h4 style={{ textDecoration: a.checked ? "lineThrough" : "none" }}>
              {a.title}
            </h4>
            <button
              onClick={() => {
                // ⭐️⭐️⭐️ 이걸 계속 todo.id 로 넘겨줘서 안됐음 ㅠㅠㅠ ⭐️⭐️⭐️
                onRemove(a.id);
              }}
            >
              delete
            </button>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default TodoApp;
