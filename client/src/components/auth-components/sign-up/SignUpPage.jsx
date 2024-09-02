import CommonForm from "@/components/common-form/CommonForm";
import { useToast } from "@/components/ui/use-toast";
import { signUpFormControls } from "@/config/config";
import { callRegisterUserApi } from "@/services/index";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const formData = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (getData) => {
    const data = await callRegisterUserApi(getData);
    console.log(data, "register data");

    if (data?.success) {
      toast({
        title: "User Registration Successfull.",
        description: "Welcome",
      });

      navigate("/tasks/list");
    } else {
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    }
  };

  return (
    <div>
      <CommonForm
        form={formData}
        handleSubmit={handleSubmit}
        formControls={signUpFormControls}
        buttonText={"Sign Up"}
      />
    </div>
  );
};

export default SignUpPage;
