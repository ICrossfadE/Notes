import { store } from "./index";

const reducer = (state = store, actions) => {
  switch (actions.type) {
    case "CREATE":
      return {
        ...state,
        taskList: [...state.taskList, actions.payload],
      };
    case "DELETE":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;

// addNewItem = () => {
//   const { taskItem, categoryItem } = this.state;
//   const newItem = {
//     id: taskItem.length + 1,
//     categoryId: categoryItem.id,
//     textContent: "some text",
//   };

//   return newItem
// };
