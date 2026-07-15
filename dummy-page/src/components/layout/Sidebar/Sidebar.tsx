import "./sider.scss";
import Sider from "antd/es/layout/Sider";
import Menu from "antd/es/menu/menu";

import { useAppNavigation } from "../../../hooks/useAppNavigation";
import { routeMenu } from "../../../routes/routeMenu";

const SidebarLayout = () => {
  const { push } = useAppNavigation();

  return (
    <Sider className="mainpage-sider">
      <Menu
        theme="light"
        mode="inline"
        style={{ height: "100%", borderInlineEnd: 0 }}
        className="mainpage-menu"
        items={routeMenu}
        onClick={({ key }) => push(key)}
      ></Menu>
    </Sider>
  );
};

export default SidebarLayout;
