import Layout, { Content } from "antd/es/layout/layout";
import Breadcrumb from "antd/es/breadcrumb/Breadcrumb";
import "./content.scss";
import { Outlet } from "react-router-dom";

const ContentLayout = () => {
  return (
    <Layout className="content-wrapper">
          <Breadcrumb
            items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
            className="content-breadcrumb"
          />
          <Content className="Mainpage-content">
            <Outlet/>
          </Content>
    </Layout>
  );
};

export default ContentLayout;
