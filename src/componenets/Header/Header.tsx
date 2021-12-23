import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  Dropdown,
  DropdownProps,
  Grid,
  Button,
  Transition,
} from "semantic-ui-react";
import { useStore } from "../../stores/store";
import { countryOptions } from "../data/countryOptions";
import "./header.css";

export default observer(function Header() {
  const { mainStore } = useStore();
  const { selcetedLanguage, setLanguage, headerData } = mainStore;
  const [visible, setVisible] = useState(false);

  return (
    <Grid>
      <Grid.Row only="computer tablet">
        <Menu fixed="top" widths={5} inverted>
          <Menu.Item
            as={NavLink}
            to="/"
            content={headerData![0]}
            header
          ></Menu.Item>
          <Menu.Item as={NavLink} to="/menu" content={headerData![1]} />
          <Menu.Item as={NavLink} to="/gallery" name={headerData![2]} />
          <Menu.Item as={NavLink} to="/about" name={headerData![3]} />
          <Menu.Item>
            <Dropdown
              inline
              options={countryOptions}
              defaultValue={
                countryOptions.find((x) => x.value === selcetedLanguage)?.value
              }
              onChange={(e: SyntheticEvent, data: DropdownProps) => {
                const { value } = data as { value: number };
                setLanguage(value);
              }}
            />
          </Menu.Item>
        </Menu>
      </Grid.Row>
      <Grid.Row only="mobile">
        <Grid.Column>
          <Menu fixed="top" inverted>
            <Menu.Item>
              <Button
                inverted
                icon="content"
                onClick={() => setVisible(!visible)}
              />
            </Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column>
          <Transition visible={visible} animation="fade right" duration={500}>
            <Menu inverted vertical className="popUpMenu">
              <Menu.Item
                as={NavLink}
                to="/"
                content={headerData![0]}
                header
                onClick={() => setVisible(!visible)}
              ></Menu.Item>
              <Menu.Item
                as={NavLink}
                to="/menu"
                content={headerData![1]}
                onClick={() => setVisible(!visible)}
              />
              <Menu.Item
                as={NavLink}
                to="/gallery"
                name={headerData![2]}
                onClick={() => setVisible(!visible)}
              />
              <Menu.Item
                as={NavLink}
                to="/about"
                name={headerData![3]}
                onClick={() => setVisible(!visible)}
              />
              <Menu.Item>
                <Dropdown
                  inline
                  options={countryOptions}
                  defaultValue={
                    countryOptions.find((x) => x.value === selcetedLanguage)
                      ?.value
                  }
                  onChange={(e: SyntheticEvent, data: DropdownProps) => {
                    const { value } = data as { value: number };
                    setLanguage(value);
                    setVisible(!visible);
                  }}
                />
              </Menu.Item>
            </Menu>
          </Transition>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
});
