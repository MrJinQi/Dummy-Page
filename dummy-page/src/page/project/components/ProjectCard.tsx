import Card from "antd/es/card/Card";
import type { ProjectContents } from "../utils/CardContent";
import Text from "antd/es/typography/Text";
import { Flex } from "antd";
import { useAppNavigation } from "../../../hooks/useAppNavigation";

interface ItemCardProps {
  projectId : string;
  title: string;
  content: ProjectContents;
  isLoading?: boolean;
}

const ItemCard = ({ title, content, isLoading,projectId }: ItemCardProps) => {
  const { goProjectDetail } = useAppNavigation();
  const handleOnclick = () => {
    goProjectDetail(projectId)
  };

  return (
    <>
      <Card
        onClick={handleOnclick}
        hoverable
        loading={isLoading}
        title={title}
        variant="borderless"
      >
        <Flex vertical gap={8}>
          <Text>Last Meeting: {content.lastMeetingTime}</Text>
          <Text>Total Meetings: {content.totalMeetings}</Text>
          <Text>Members: {content.memberCount}</Text>
          <Text>Open Tasks: {content.openTasks}</Text>
          <Text>Created By: {content.createdBy}</Text>
        </Flex>
      </Card>
    </>
  );
};

export default ItemCard;


