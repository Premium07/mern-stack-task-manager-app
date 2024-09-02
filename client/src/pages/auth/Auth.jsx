import SignInPage from "@/components/auth-components/sign-in/SignInPage";
import SignUpPage from "@/components/auth-components/sign-up/SignUpPage";
import CommonButton from "@/components/common-button/CommonButton";
import { useState } from "react";

const AuthPage = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <section className="flex flex-auto flex-col min-h-screen h-full p-10">
      <div className="flex h-full flex-col justify-center items-center bg-white p-5">
     
        <div className="mt-4">
          {isLoginView ? <SignInPage /> : <SignUpPage />}
          <div className="mt-5">
            <CommonButton
              type="button"
              onClick={() => setIsLoginView(!isLoginView)}
              buttonText={
                isLoginView ? "Switch to Sign Up" : "Switch to Sign In"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
