import CommonForm from "../common-form/CommonForm";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";

function CommonDialog({
  showDialog,
  onOpenChange,
  title,
  formControls,
  btnText,
  handleSubmit,
  formData,
}) {
  return (
    <Dialog open={showDialog} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-screen h-[450px]">
        <DialogTitle>{title}</DialogTitle>
        <div>
          <CommonForm
            formControls={formControls}
            form={formData}
            handleSubmit={handleSubmit}
            btnText={btnText}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CommonDialog;
