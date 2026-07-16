import Col from "antd/es/grid/col";
import Row from "antd/es/grid/row";
import Title from "antd/es/typography/Title";
import "../util/dashboard.scss";
import ItemCard from "../components/ProjectCard";
import mockData from "../mockdata";
import { useEffect, useState } from "react";

const ProjectDashboard = () => {

  const [isLoading, setIsLoading] = useState(Boolean);

  useEffect(()=>{
    
  },[])

  return (
    <>
      <Title level={3} className="project-header">
        Project Dashboard
      </Title>
      <Row gutter={16}>
        {mockData.map((item, index) => (
          <Col span={8} key={index}>
            <ItemCard title={item.title} content={item.content} isLoading={isLoading} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProjectDashboard;
