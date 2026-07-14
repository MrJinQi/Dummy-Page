import HeaderLayout from "../../components/layout/Header/Header";
import "../../components/layout/Sidebar/sider.scss";
import SidebarLayout from "../../components/layout/Sidebar/Sidebar";
import ContentLayout from "../../components/layout/ContentLayout/Content";
import { Layout } from "antd";
import "./mainpage.scss";
const Mainpage = () => {
  return (
    <Layout>
      <HeaderLayout />
      <Layout className="mainpage-layout">
        <SidebarLayout />
        <ContentLayout />
      </Layout>
    </Layout>
  );
};

export default Mainpage;
