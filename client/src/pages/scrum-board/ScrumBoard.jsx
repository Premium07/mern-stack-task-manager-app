import CommonCard from "@/components/common-card/CommonCard";
import { scrumBoardOptions } from "@/config/config";
import { TaskManagertContext } from "@/context/TaskManagerContext";
import { getAllTaskApi, updateTaskApi } from "@/services";
import { useContext, useEffect } from "react";

const ScrumBoard = () => {
  const { user, setLoading, taskLists, setTaskLists } =
    useContext(TaskManagertContext);

  const fetchListOfTasks = async () => {
    setLoading(true);
    const res = await getAllTaskApi(user?._id);
    console.log(res);

    if (res?.success) {
      setTaskLists(res?.tasksList);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user !== null) fetchListOfTasks();
  }, [user]);

  const onDragStart = (e, getTaskId) => {
    e.dataTransfer.setData("id", getTaskId);
  };

  const updateTaskByStatus = async (getTask) => {
    await updateTaskApi(getTask);
    await fetchListOfTasks();
  };

  const onDrop = (e, getCurrentStatus) => {
    const getDraggedTaskId = e.dataTransfer.getData("id");

    let findCurrentTask = taskLists.find(
      (item) => item._id.toString() === getDraggedTaskId
    );
    findCurrentTask = {
      ...findCurrentTask,
      status: getCurrentStatus,
    };

    updateTaskByStatus(findCurrentTask);
  };

  const renderTaskByTaskStatus = () => {
    if (!taskLists) return {};

    const taskStatus = {
      todo: [],
      inProgress: [],
      blocked: [],
      review: [],
      done: [],
    };

    taskLists.forEach((taskItem) => {
      taskStatus[taskItem.status]?.push(
        <div
          key={taskItem._id}
          onDragStart={
            taskItem?.status !== "done"
              ? (e) => onDragStart(e, taskItem._id)
              : null
          }
          className="mb-2"
          draggable={taskItem?.status !== "done" ? true : false}
        >
          <CommonCard
            title={taskItem?.title}
            description={
              scrumBoardOptions.find(
                (boardOption) => boardOption.id === taskItem?.status
              ).label
            }
          />
        </div>
      );
    });

    return taskStatus;
  };

  return (
    <section>
      <div className="grid grid-cols-5 gap-2 h-[80vh]">
        {scrumBoardOptions.map((item) => {
          return (
            <div
              onDrop={(e) => onDrop(e, item.id)}
              onDragOver={(e) => e.preventDefault()}
              key={item.id}
              className="border border-[#333] rounded overflow-auto h-full"
            >
              <div className="px-1 py-3 text-center bg-black mb-3">
                <h3 className="text-xl text-white">{item.label}</h3>
              </div>
              <div className="p-3">{renderTaskByTaskStatus()[item.id]}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ScrumBoard;
