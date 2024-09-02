import CommonButton from "@/components/common-button/CommonButton";
import AddNewTasks from "@/components/tasks/AddNewTasks";
import TaskItem from "@/components/tasks/TaskItem";
import { Skeleton } from "@/components/ui/skeleton";
import { TaskManagertContext } from "@/context/TaskManagerContext";
import {
  addNewTaskApi,
  deleteTaskApi,
  getAllTaskApi,
  updateTaskApi,
} from "@/services";
import { useContext, useEffect, useState } from "react";

const TasksPage = () => {
  const [showDialog, setShowDialog] = useState(false);
  const {
    taskFormData,
    loading,
    setLoading,
    taskLists,
    setTaskLists,
    user,
    currentEditedId,
    setCurrentEditedId,
  } = useContext(TaskManagertContext);

  const fetchListOfTasks = async () => {
    setLoading(true);
    const res = await getAllTaskApi(user?._id);
    console.log(res);

    if (res?.success) {
      setTaskLists(res?.tasksList);
      setLoading(false);
    }
  };

  const handleSubmit = async (getData) => {
    const res =
      currentEditedId !== null
        ? await updateTaskApi({
            ...getData,
            _id: currentEditedId,
            userId: user?._id,
          })
        : await addNewTaskApi({
            ...getData,
            userId: user?._id,
          });

    if (res) {
      fetchListOfTasks();
      setShowDialog(false);
      taskFormData.reset();
      setCurrentEditedId(null);
    }

    // console.log(res, getData, user);
  };

  const handleDelete = async (getTaskId) => {
    // console.log(getTaskId);
    const res = await deleteTaskApi(getTaskId);

    if (res?.success) {
      fetchListOfTasks();
    }
  };

  // const handleUpdate = async () => {};

  useEffect(() => {
    if (user !== null) fetchListOfTasks();
  }, [user]);

  // console.log(taskLists);

  if (loading)
    // return <div className="size-20 rounded-full border-4 border-t-black"></div>;
    return (
      <Skeleton className={"w-full h-[550px] rounded bg-black opacity-50"} />
    );

  return (
    <section>
      <div className="mb-5">
        <CommonButton
          onClick={() => setShowDialog(true)}
          buttonText={"Add New Task"}
        />
      </div>
      <div className="mt-5 flex flex-col ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {taskLists?.length > 0 ? (
            taskLists.map((task) => {
              return (
                <TaskItem
                  item={task}
                  key={task._id}
                  setShowDialog={setShowDialog}
                  handleDelete={handleDelete}
                  setCurrentEditedId={setCurrentEditedId}
                  taskFormData={taskFormData}
                />
              );
            })
          ) : (
            <h2>No Taks Yet. Please add one</h2>
          )}
        </div>
      </div>
      <AddNewTasks
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        handleSubmit={handleSubmit}
        taskFormData={taskFormData}
        currentEditedId={currentEditedId}
        setCurrentEditedId={setCurrentEditedId}
      />
    </section>
  );
};

export default TasksPage;
