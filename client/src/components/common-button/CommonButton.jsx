import { Button } from "../ui/button";

const CommonButton = ({ onClick, buttonText, type, disabled }) => {
  return (
    <Button
      type={type || "submit"}
      onClick={onClick || null}
      disabled={disabled || false}
      className="flex h-10 justify-center items-center px-5 bg-black font-bold text-white rounded  hover:bg-black hover:text-white tracking-wider text-sm"
    >
      {buttonText || "Submit"}
    </Button>
  );
};

export default CommonButton;
