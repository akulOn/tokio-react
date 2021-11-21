import React from "react";
import { Container, List } from "semantic-ui-react";
import { Menu } from "../../types/Menu";
import "./menuList.css";

interface Props {
  menu: Menu;
}

export default function MenuList({ menu }: Props) {
  return (
    <>
      <h1>{menu.Header}</h1>
      <List selection verticalAlign="middle">
        {menu.Items.length !== 0 &&
          menu.Items.map((item) => (
            <List.Item key={item.Name}>
              <List.Header>
                <Container textAlign="left">
                  {item.Name}
                  <span style={{ float: "right" }}>{item.Price}</span>
                </Container>
              </List.Header>
              <List.List>
                {item.Portion && <List.Item>{item.Portion}</List.Item>}
                {item.Description && <List.Item>{item.Description}</List.Item>}
              </List.List>
            </List.Item>
          ))}
      </List>
    </>
  );
}
