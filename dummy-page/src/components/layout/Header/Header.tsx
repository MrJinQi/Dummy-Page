import Layout, { Header } from "antd/es/layout/layout";
import "./header.scss";
import { Button, Flex, } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import LanguageDropDown from "../../LanguageDropDown/LanguageDropDown";



const HeaderLayout = () => {
  return (
    <Layout>
      <Header className="mainpage-header">
        <Title level={3} className="header-title">
          MEETMIND AI
        </Title>
        <Flex align="center" gap={30}>
          <LanguageDropDown />
          <Button
            className="header-user-button"
            shape="circle"
            icon={<UserOutlined />}
          />
        </Flex>
      </Header>
    </Layout>
  );
};

export default HeaderLayout;
