import Layout, { Content } from "antd/es/layout/layout";
import Breadcrumb from "antd/es/breadcrumb/Breadcrumb";
import "./content.scss";

const ContentLayout = () => {
  return (
    <Layout className="content-wrapper">
          <Breadcrumb
            items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
            className="content-breadcrumb"
          />
          <Content className="Mainpage-content">
            <p>Content</p>
          </Content>
    </Layout>
  );
};

export default ContentLayout;
