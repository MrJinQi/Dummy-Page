import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainpage from "../page/Mainpage/Mainpage";
import DashBoard from "../page/dashboard/dashBoard";
import ProjectDashboard from "../page/project/PorjectDashBoard";
import MeetingDashboard from "../page/meeting/MeetingDashBoard";
import BotManager from "../page/bot/BotManager";

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
        Component: ProjectDashboard,
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
