import TaskItem from "../Task-item/Task-tem";

const TaskArea = () => {
  return (
    <div className="p-14">
      <h1 className="m-2 text-7xl">Notes</h1>
      <div className=" flex">
        <TaskItem />
      </div>
    </div>
  );
};

export default TaskArea;
