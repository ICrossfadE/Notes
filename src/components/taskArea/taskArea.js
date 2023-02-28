import { useSelector } from "react-redux";

import TaskItem from "../taskItem/taskItem";

const TaskArea = () => {
  return (
    <div className="p-14 w-full">
      <h1 className="m-2 text-7xl">Notes</h1>
      <Tasks />
    </div>
  );
};

const Tasks = () => {
  const taskList = useSelector((state) => state.taskList);

  const tasks = taskList.map((task) => {
    return <TaskItem key={task.id} task={task} />;
  });

  return <div className="flex flex-wrap">{tasks}</div>;
};

export default TaskArea;
