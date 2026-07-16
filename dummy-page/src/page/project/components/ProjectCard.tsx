import Card from "antd/es/card/Card";

interface ItemCardProps {
  title: string;
  content: string;
  isLoading? : boolean
}

const ItemCard = ({ title, content, isLoading }: ItemCardProps) => {
  return (
    <>
      <Card hoverable loading={isLoading} title= {title}  variant="borderless">
        {content}
      </Card>
    </>
  );
};

export default ItemCard;
