import { callUserAuthApi } from "@/services";
import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

export const TaskManagertContext = createContext(null);

const TaskManagerProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [taskLists, setTaskLists] = useState([]); // Make sure this is an empty array initially
  const [currentEditedId, setCurrentEditedId] = useState(null);

  const taskFormData = useForm({
    defaultValues: {
      title: "",
      description: "",
      status: "",
      priority: "",
    },
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const verifyUserCookie = async () => {
      const data = await callUserAuthApi();

      if (data?.userInfo) {
        setUser(data?.userInfo);
      }
      return data?.success
        ? navigate(
            location.pathname === "/auth" || location.pathname === "/"
              ? "/tasks/list"
              : `${location.pathname}`
          )
        : navigate("/auth");
    };

    verifyUserCookie();
  }, [navigate, location.pathname]);

  return (
    <TaskManagertContext.Provider
      value={{
        user,
        setUser,
        taskFormData,
        loading,
        setLoading,
        taskLists,
        setTaskLists,
        currentEditedId,
        setCurrentEditedId,
      }}
    >
      {children}
    </TaskManagertContext.Provider>
  );
};

export default TaskManagerProvider;
