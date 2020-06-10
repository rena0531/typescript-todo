import React from "react";
import "./App.css";

const todos = [
  {
    id: 1,
    text: "Do laundry",
    done: false,
    place: "home",
  },
  {
    id: 2,
    text: "Email boss",
    done: false,
    place: "work",
  },
  {
    id: 3,
    text: "Go to gym",
    done: false,
    place: { custom: "Gym" },
  },
  {
    id: 4,
    text: "Buy milk",
    done: false,
    place: { custom: "Supermarket" },
  },
  { id: 5, text: "Read a book", done: false },
];

type Place = "home" | "work" | { custom: string };

type Todo = Readonly<{
  id: number;
  text: string;
  done: boolean;
  place?: Place;
}>;

type CompletedTodo = Todo & {
  readonly done: true;
};

function toggleTodo(todo: Todo): Todo {
  console.log(todo);
  return {
    id: todo.id,
    text: todo.text,
    done: !todo.done,
    place: todo.place,
  };
}

function completeAll(todos: readonly Todo[]): CompletedTodo[] {
  console.log("completed");
  return todos.map((todo) => ({
    ...todo,
    done: true,
  }));
}

function placeToString(place: Place): string {
  if (place === "home") {
    return "🏠Home";
  } else if (place === "work") {
    return " 👜Work";
  } else {
    return "❗️" + place.custom;
  }
}
placeToString({ custom: "Gym" });

function App() {
  return (
    <div className="App">
      {todos.map((todo, index) => (
        <div key={index}>
          <span role="button" onClick={() => toggleTodo}>
            check
          </span>
          <div>{todo.text}</div>
          {todo.place && <div>{}</div>}
        </div>
      ))}
      <span role="button" onClick={() => completeAll}>
        check All
      </span>
    </div>
  );
}

export default App;
