import Col from "antd/es/grid/col";
import Row from "antd/es/grid/row";
import Title from "antd/es/typography/Title";
import "../utils/dashboard.scss";
import ItemCard from "../components/ProjectCard";
import mockData from "../mockdata";
import { useEffect, useState } from "react";
import Flex from "antd/es/flex";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const ProjectDashboard = () => {
  const [isLoading, setIsLoading] = useState(Boolean);

  
  useEffect(() => {}, []);

  return (
    <>
      <Flex align="center" justify="space-between">
        <Title level={3} className="project-header">
          Project Dashboard
        </Title>
          <Button type="primary" shape="round" icon={<PlusCircleOutlined />} size={"middle"}>
              Create
          </Button>
      </Flex>

      <Row gutter={16}>
        {mockData.map((item, index) => (
          <Col span={8} key={index}>
            <ItemCard
              projectId = {item.id}
              title={item.title}
              content={item.content}
              isLoading={isLoading}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProjectDashboard;
