import { addNewTaskFormControls } from "@/config/config";
import CommonDialog from "../common-dialog/CommonDialog";

const AddNewTasks = ({
  showDialog,
  setShowDialog,
  handleSubmit,
  taskFormData,
  currentEditedId,
  setCurrentEditedId,
}) => {
  return (
    <CommonDialog
      formControls={addNewTaskFormControls}
      showDialog={showDialog}
      onOpenChange={() => {
        setShowDialog(false);
        currentEditedId ? taskFormData.reset() : null;
        setCurrentEditedId(null);
      }}
      title={currentEditedId !== null ? "Edit Task" : "Post New Task"}
      btnText={"Add"}
      handleSubmit={handleSubmit}
      formData={taskFormData}
    />
  );
};

export default AddNewTasks;
