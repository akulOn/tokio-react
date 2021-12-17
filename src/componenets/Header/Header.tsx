import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Image, Container, Dropdown } from "semantic-ui-react";
import "./header.css";

export default function Header() {
  const countryOptions = [
    { key: "rs", value: "rs", flag: "rs", text: "Serbia" },
    { key: "gb", value: "gb", flag: "gb", text: "United Kingdom" },
    { key: "hu", value: "hu", flag: "hu", text: "Hungary" },
  ];

  return (
    <Menu fixed="top" widths={5} inverted>
      <Container>
        <Menu.Item as={NavLink} to="/" header>
          <Image
            src={`${process.env.PUBLIC_URL}/assets/logo.png`}
            size="small"
          />
        </Menu.Item>
        <Menu.Item as={NavLink} to="/menu" content="Menu" />
        <Menu.Item as={NavLink} to="/gallery" name="Gallery" />
        <Menu.Item as={NavLink} to="/about" name="About" />
        <Menu.Item>
          <Dropdown
            placeholder="Select Country"
            selection
            fluid
            options={countryOptions}
            defaultValue={countryOptions[0].value}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
