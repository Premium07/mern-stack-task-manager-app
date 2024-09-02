import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth/Auth";
import TasksPage from "./pages/taskPage/TasksPage";
import Layout from "./components/Layout";
import ScrumBoard from "./pages/scrum-board/ScrumBoard";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/tasks" element={<Layout />}>
          <Route path="list" element={<TasksPage />} />
          <Route path="scrum-board" element={<ScrumBoard />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
