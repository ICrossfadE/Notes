import { store } from "./index";

const reducer = (state = store.taskList, actions) => {
  switch (actions.type) {
    case "CREATE":
      return state;
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
