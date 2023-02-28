import { useDispatch, useSelector } from "react-redux";

const ButtonCreateItem = ({ item }) => {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.taskList);

  const style = {
    backgroundColor: item.color,
  };

  const createNewTask = (categoryId) => {
    const newTask = {
      id: taskList.length
        ? Math.max(...taskList.map((task) => task.id)) + 1
        : 1,
      categoryId: categoryId,
      textContent: "some text",
    };

    dispatch({
      type: "ADD",
      payload: newTask,
    });
  };

  console.log(taskList);

  return (
    <button
      id={item.id}
      style={style}
      className="h-4 w-4 my-2 rounded-full"
      onClick={() => createNewTask(item.id)}
    ></button>
  );
};

export default ButtonCreateItem;
