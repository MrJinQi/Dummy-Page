import {
  DashboardOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

import { PATHS } from "./paths";
import React from "react";

export const routeMenu = [
  {
    key: PATHS.HOME,
    icon: React.createElement(DashboardOutlined),
    label: "Dashboard",
  },
  {
    key: PATHS.INFO,
    icon: React.createElement(NotificationOutlined),
    label: "Info",
  },

];