import { Dropdown, Space, Typography, type MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Item 1",
  },
  {
    key: "2",
    label: "Item 2",
  },
  {
    key: "3",
    label: "Item 3",
  },
];

const LanguageDropDown = () => {
  return (
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
  );
};

export default LanguageDropDown;
