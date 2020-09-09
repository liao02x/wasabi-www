import { Card, Image, Button } from "semantic-ui-react";

const TradeCard = ({ title, price }) => {
  return (
    <Card>
      <Image
        src="https://react.semantic-ui.com/images/wireframe/image.png"
        size="small"
      />
      <Card.Content textAlign="center">
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span>APY {price}</span>
        </Card.Meta>
        <Button>Farm</Button>
        <Button>Trade</Button>
      </Card.Content>
    </Card>
  );
};

export default TradeCard;
