const todoReducer = (initialSate, action) => {
  switch (action.type) {
    case "Add todo":
      return [...initialSate, action.payload];

    case "Remove Todo":
      return initialSate.filter((todo) => todo.id !== action.payload);

    case "Toggle Todo":
      return initialSate.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }

        return todo;
      });
    default:
      return initialSate;
  }
};

export default todoReducer;
