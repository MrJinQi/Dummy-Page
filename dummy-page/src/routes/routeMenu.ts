import { ApartmentOutlined, DashboardOutlined, NotificationOutlined, RobotOutlined } from "@ant-design/icons";

import { PATHS } from "./paths";
import React from "react";

export const routeMenu = [
  {
    key: PATHS.HOME,
    icon: React.createElement(DashboardOutlined),
    label: "Dashboard",
  },
  {
    key: PATHS.PROJECTS,
    icon: React.createElement(ApartmentOutlined),
    label: "Projects",
  },
  {
    key: PATHS.MEETINGS,
    icon: React.createElement(NotificationOutlined),
    label: "Meetings",
  },
  {
    key: PATHS.BOTS,
    icon: React.createElement(RobotOutlined),
    label: "Bots",
  },
];
