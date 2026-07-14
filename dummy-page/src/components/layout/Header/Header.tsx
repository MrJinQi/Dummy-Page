import Layout, { Header } from "antd/es/layout/layout";
import "./header.scss";
import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";

const HeaderLayout = () => {
  return (
    <Layout>
      <Header className="Mainpage-header">
          <Title level={3} className="header-title">
            MEETMIND AI
          </Title>
          <>
            <Button className="header-user-button" shape="circle" icon={<UserOutlined />} />
          </>
      </Header>
    </Layout>
  );
};

export default HeaderLayout;
