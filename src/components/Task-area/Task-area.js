import TaskItem from "../Task-item/Task-tem";
import { state } from "../../state";

const TaskArea = () => {
  return (
    <div className="p-14">
      <h1 className="m-2 text-7xl">Notes</h1>
      <Tasks />
    </div>
  );
};

const Tasks = () => {
  const tasks = state.taskList.map((task) => {
    return <TaskItem key={task.id} task={task} />;
  });

  return <div className="flex">{tasks}</div>;
};

export default TaskArea;
