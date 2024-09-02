import { TaskManagertContext } from "@/context/TaskManagerContext";
import { callLogoutUser } from "@/services";
import { LogOut } from "lucide-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { setUser } = useContext(TaskManagertContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const res = await callLogoutUser();

    if (res?.success) {
      setUser(null);
      navigate("/auth");
    }
  };

  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto h-16 ">
        <div className="flex h-full items-center w-full justify-between">
          <div className="w-auto">
            <h1 className="text-2xl font-semibold tracking-wider">TaskManager</h1>
          </div>
          <div className="flex gap-4">
            <Link className="text-xl text-black font-bold" to="/tasks/list">
              Tasks
            </Link>
            <Link
              className="text-xl text-black font-bold"
              to="/tasks/scrum-board"
            >
              Scrum Board
            </Link>
          </div>
          <div
            className="border p-2 shadow-inner rounded-full hover:shadow-xl hover:border-black duration-300 cursor-pointer"
            title="logout"
            onClick={handleLogout}
          >
            <LogOut color="black" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
