import {
  Card,
  Image,
  Button,
  Grid,
  Divider,
  GridColumn,
} from "semantic-ui-react";

const PoolCard = () => {
  return (
    <Card style={{ minWidth: 600 }}>
      <Image
        src="https://react.semantic-ui.com/images/wireframe/image.png"
        size="medium"
      />
      <Card.Content textAlign="center">
        <Card.Header>KIMCHI CLAIM</Card.Header>
        <Card.Meta>
          <span>0.000</span>
        </Card.Meta>
        <Button>CLAIM</Button>
      </Card.Content>
      <Grid columns={2}>
        <Grid.Column>
          <Card.Content textAlign="center">
            <Card.Header>Your wallet</Card.Header>
            <Card.Meta>
              <span>0.0000000</span>
            </Card.Meta>
            <Button>APPROVE SPEND</Button>
          </Card.Content>
        </Grid.Column>
        <Grid.Column>
          <Card.Content textAlign="center">
            <Card.Header>Staked token</Card.Header>
            <Card.Meta>
              <span>0.0000000</span>
            </Card.Meta>
            <Button>-</Button>
          </Card.Content>
        </Grid.Column>
      </Grid>
      <div className="separator" />
      <Card.Content textAlign="center">
        <div className="separator" />
        <Button>Get LP Token To Stake</Button>
      </Card.Content>
    </Card>
  );
};

export default PoolCard;
