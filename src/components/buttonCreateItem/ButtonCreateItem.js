import { useDispatch, useSelector } from "react-redux";

const ButtonCreateItem = ({ item }) => {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.taskList);

  const style = {
    backgroundColor: item.color,
  };

  const createNewTask = (typeId) => {
    const newTask = {
      id: taskList.length + 1,
      categoryId: typeId,
      textContent: "some text",
    };

    dispatch({
      type: "CREATE",
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
