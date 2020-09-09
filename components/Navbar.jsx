import Link from "next/link";
import { Menu, Header, Button, Dropdown } from "semantic-ui-react";

const Navbar = () => {
  return (
    <Menu secondary style={{ margin: "10px 20px" }}>
      <Menu.Item name="title">
        <Link href="/">
          <a>
            <Header as="h1">WasabiSwap</Header>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item name="home">
          <Link href="/">Home</Link>
        </Menu.Item>
        <Dropdown text="Tutorial" className="link item">
          <Dropdown.Menu>
            <Dropdown.Item>Learn</Dropdown.Item>
            <Dropdown.Item>Technology</Dropdown.Item>
            <Dropdown.Item>Whitepaper</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown text="Pools" className="link item">
          <Dropdown.Menu>
            <Dropdown.Item>Developers/Testnet Portal</Dropdown.Item>
            <Dropdown.Item>Documentation</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown text="About" className="link item">
          <Dropdown.Menu>
            <Dropdown.Item>About</Dropdown.Item>
            <Dropdown.Item>Career</Dropdown.Item>
            <Dropdown.Item>Blog+News</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
      <Menu.Menu>
        <Menu.Item>
          <Button>Connect Wallet</Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
