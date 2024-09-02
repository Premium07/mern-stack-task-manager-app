import { scrumBoardOptions } from "@/config/config";
import CommonButton from "../common-button/CommonButton";
import CommonCard from "../common-card/CommonCard";

const TaskItem = ({
  item,
  handleDelete,
  setShowDialog,
  setCurrentEditedId,
  taskFormData,
}) => {
  return (
    <CommonCard
      title={item?.title}
      description={
        scrumBoardOptions.find((boardOption) => boardOption.id === item?.status)
          .label
      }
      footerContent={
        <div className="flex w-full justify-between items-center">
          <CommonButton
            buttonText={"Edit"}
            onClick={() => {
              setShowDialog(true);
              setCurrentEditedId(item?._id);
              taskFormData.setValue("title", item?.title);
              taskFormData.setValue("description", item?.description);
              taskFormData.setValue("status", item?.status);
              taskFormData.setValue("priority", item?.priority);
            }}
          />
          <CommonButton
            buttonText={"Delete"}
            onClick={() => handleDelete(item?._id)}
          />
        </div>
      }
    />
  );
};

export default TaskItem;
