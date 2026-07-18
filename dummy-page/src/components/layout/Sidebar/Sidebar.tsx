import "./sider.scss";
import Sider from "antd/es/layout/Sider";
import Menu, { type MenuProps } from "antd/es/menu/menu";

import { useAppNavigation } from "../../../hooks/useAppNavigation";
import { routeMenu } from "../../../routes/routeMenu";

const SidebarLayout = () => {
  const { push } = useAppNavigation();

  const handleOnClick: MenuProps["onClick"] = ({ key }) => {
    push(key as string);
  };

  return (
    <Sider className="mainpage-sider">
      <Menu
        theme="light"
        mode="inline"
        style={{ height: "100%", borderInlineEnd: 0 }}
        className="mainpage-menu"
        items={routeMenu}
        onClick={handleOnClick}
      ></Menu>
    </Sider>
  );
};

export default SidebarLayout;
