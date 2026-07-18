import Layout, { Header } from "antd/es/layout/layout";
import "./header.scss";
import { Button, Dropdown, Flex, Space, Typography, type MenuProps } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Item 1',
  },
  {
    key: '2',
    label: 'Item 2',
  },
  {
    key: '3',
    label: 'Item 3',
  },
];

const HeaderLayout = () => {
  return (
    <Layout>
      <Header className="mainpage-header">
        <Title level={3} className="header-title">
          MEETMIND AI
        </Title>
        <Flex align="center" gap={30}>
          <Dropdown
            menu={{
              items,
              selectable: true,
            }}
          >
            <Typography.Text className="language-switcher">
              <Space>
                Language
                <DownOutlined />
              </Space>
            </Typography.Text>

          </Dropdown>
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
