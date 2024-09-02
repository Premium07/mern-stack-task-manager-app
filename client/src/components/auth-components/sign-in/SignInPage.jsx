import CommonForm from "@/components/common-form/CommonForm";
import { useToast } from "@/components/ui/use-toast";
import { signInFormControls } from "@/config/config";
import { callLoginUserApi } from "@/services";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const formData = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (getData) => {
    const data = await callLoginUserApi(getData);
    // console.log(data);

    if (data?.success) {
      toast({
        title: "User Login Successfull.",
        description: "Welcome back",
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
        buttonText={"Sign In"}
        handleSubmit={handleSubmit}
        formControls={signInFormControls}
        form={formData}
      />
    </div>
  );
};

export default SignInPage;
