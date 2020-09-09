import { Header, Button, Card, List } from "semantic-ui-react";

import Layout from "../components/Layout";
export default function Home() {
  return (
    <Layout>
      <Header as="h2">Power to the people</Header>
      <p>A fairer place for both trader and liquidity provider</p>
      <Button>Swap(coming soon)</Button>
      <div className="separator" />
      <Button>Learn more about how Wasabi is superior</Button>
      <div className="separator" />
      <div className="separator" />
      <p>Stake liquidity today to earn WAS governance token</p>
      <Card.Group itemsPerRow={3}>
        <Card>
          <Card.Content textAlign="center">
            <Card.Header>Your WAS Balance</Card.Header>
            <Card.Meta>
              <span>10,000</span>
            </Card.Meta>
            <Card.Description>Withdrawable Balance: 100,000</Card.Description>
          </Card.Content>
          <Card.Content textAlign="center">
            <List>
              <List.Item>
                <Button>Withdraw</Button>
              </List.Item>
              <List.Item>
                <Button>Tutorial</Button>
              </List.Item>
            </List>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content textAlign="center">
            <Card.Header>Highest APY</Card.Header>
            <Card.Meta>
              <span>200%</span>
            </Card.Meta>
            <Card.Description>Pool: xxx pool</Card.Description>
          </Card.Content>
          <Card.Content textAlign="center">
            <List>
              <List.Item>
                <Button>See Pools</Button>
              </List.Item>
              <List.Item>
                <Button>Tutorial</Button>
              </List.Item>
            </List>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content textAlign="center">
            <Card.Header>Token price</Card.Header>
            <Card.Meta>
              <span>1,000,000</span>
            </Card.Meta>
            <Card.Description>Total supply: 1,000</Card.Description>
          </Card.Content>
          <Card.Content textAlign="center">
            <List>
              <List.Item>
                <Button>Buy/Sell</Button>
              </List.Item>
              <List.Item>
                <Button>Tutorial</Button>
              </List.Item>
            </List>
          </Card.Content>
        </Card>
      </Card.Group>
    </Layout>
  );
}
