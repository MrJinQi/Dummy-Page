import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../page/Home/Home";
import InfoPage from "../page/Info/Info";
import Mainpage from "../page/Mainpage/Mainpage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainpage />,

        children: [
            {
                index: true,
                Component: HomePage,
            },
            {   
                path: "Info",
                Component: InfoPage,
            }
        ],
    },
]);
    
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;