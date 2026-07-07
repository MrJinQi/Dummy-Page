import { Layout } from "antd";
import HeaderLayout from "../../components/layout/Header/Header";
import FooterLayout from "../../components/layout/Footer/Footer";
import Sider from "antd/es/layout/Sider";

const Mainpage = () => {
  return (
    <div className="Mainpage-wrapper">
      <Layout hasSider className="Mainpage-layout">
        <Sider></Sider>
      </Layout>
      <HeaderLayout />
      <Layout className="Mainpage-content">Content</Layout>
      <FooterLayout />
    </div>
  );
};

export default Mainpage;
