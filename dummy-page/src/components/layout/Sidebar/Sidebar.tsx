import "./sider.scss";
import Sider from "antd/es/layout/Sider";
import Menu, { type MenuProps } from "antd/es/menu/menu";
import React from "react";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

// interface SidebarLayoutProps {
//   collapsed: boolean;
// }



const item: MenuProps['items'] = [
  {
    key: '1',
    icon: React.createElement(UserOutlined),
    label: 'user',
  },
    {
    key: '2',
    icon: React.createElement(NotificationOutlined),
    label: 'notification',  
  },
    {   
    key: '3',
    icon: React.createElement(LaptopOutlined),  
    label: 'laptop'
  }
]




const SidebarLayout = () => {
  return (
      <Sider className="mainpage-sider" >
        <Menu
          theme="light"
          mode="inline"
          style={{ height: "100%", borderInlineEnd: 0 }}
          className="mainpage-menu"
          items={item}
        ></Menu>
      </Sider>
  );
};

export default SidebarLayout;
