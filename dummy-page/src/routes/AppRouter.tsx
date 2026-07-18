import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainpage from "../page/Mainpage/Mainpage";
import DashBoard from "../page/dashboard/dashBoard";
import ProjectDashboard from "../page/project/pages/ProjectDashBoard";
import MeetingDashboard from "../page/meeting/MeetingDashBoard";
import BotManager from "../page/bot/BotManager";
import ProjectDetail from "../page/project/pages/ProjectDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,

    children: [
      {
        index: true,
        Component: DashBoard,
      },
      {
        path: "projects",
        children: [
          {
            index: true,
            Component: ProjectDashboard,
          },
          {
            path: ":projectId",
            Component: ProjectDetail,
          },
        ],
      },
      {
        path: "meetings",
        Component: MeetingDashboard,
      },
      {
        path: "bots",
        Component: BotManager,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
