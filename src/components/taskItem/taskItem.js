import "./taskItem.css";
import { state } from "../../state";

const TaskItem = ({ task }) => {
  const category = state.categoryList.find((category) => {
    return category.id === task.categoryId;
  });

  const style = {
    backgroundColor: category.color,
  };

  console.log("task", task, category);
  return (
    <div
      style={style}
      className="flex flex-col justify-between w-60 h-60 m-2.5 p-4 rounded-3xl bg-amber-500"
    >
      <div className="flex justify-between">
        <div className="w-9/12 h-9/12" maxLength="120" type="text">
          {task.textContent}
        </div>
        <button className="flex items-center justify-center w-8 h-8  rounded-full bg-zinc-900">
          <span class="pb-0.5 material-symbols-outlined text-amber-400">
            star
          </span>
        </button>
      </div>

      <div className="flex justify-between">
        <span>May 10.02.23</span>
        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900">
          <span class="text-base material-symbols-outlined text-amber-400">
            edit
          </span>
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
