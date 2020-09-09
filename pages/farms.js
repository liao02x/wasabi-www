import { Header, Button, Card } from "semantic-ui-react";
import TradeCard from "../components/TradeCard";

import Layout from "../components/Layout";

const data = [
  { title: "UNISWAP KIMCHI/ETH", price: "15,281%" },
  { title: "KIMCHI with SUSHI", price: "14,835%" },
  { title: "KIMCHI with TEND", price: "26,085%" },
  { title: "UNISWAP ETH/USDT", price: "993%" },
];

export default function Farms() {
  return (
    <Layout>
      <Header as="h2">Earn</Header>
      <p>Stake liquidity today to earn WAS governance token</p>
      <Button>Tutorial</Button>
      <div className="separator" />
      <Card.Group itemsPerRow={2}>
        {data.map(({ title, price }) => (
          <TradeCard title={title} price={price} />
        ))}
      </Card.Group>
    </Layout>
  );
}
