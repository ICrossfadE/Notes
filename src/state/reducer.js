import { store } from "./index";

const reducer = (state = store, actions) => {
  switch (actions.type) {
    case "ADD":
      return {
        ...state,
        taskList: [actions.payload, ...state.taskList],
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
