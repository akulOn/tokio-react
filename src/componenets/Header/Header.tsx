import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  Dropdown,
  DropdownProps,
  Grid,
  Button,
  Transition,
  Icon,
  Flag,
} from "semantic-ui-react";
import { useStore } from "../../stores/store";
import { Language } from "../../types/Enums";
import { countryOptions } from "../data/countryOptions";
import "./header.css";

export default observer(function Header() {
  const { mainStore } = useStore();
  const { selcetedLanguage, setLanguage, headerData } = mainStore;
  const [visible, setVisible] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    try {
      if (!(event.target as HTMLElement).className.includes("popUpMenu")) {
        setVisible(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <Grid>
      <Grid.Row only="computer tablet">
        <Menu fixed="top" widths={7} inverted>
          <Menu.Item></Menu.Item>
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
              onChange={(e: SyntheticEvent, data: DropdownProps) => {
                const { value } = data as { value: number };
                setLanguage(value);
              }}
              value={
                countryOptions.find((x) => x.value === selcetedLanguage)?.value
              }
            />
          </Menu.Item>
          <Menu.Item></Menu.Item>
        </Menu>
      </Grid.Row>
      <Grid.Row only="mobile">
        <Grid.Column>
          <Menu fixed="top" inverted widths={3}>
            <Menu.Item>
              <Button
                inverted
                icon="content"
                onClick={() => setVisible(!visible)}
              />
            </Menu.Item>
            <Menu.Item>Tokio BBQ</Menu.Item>
            <Menu.Item>
              <Icon name="food" /> {/*Logo!*/}
            </Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column>
          <Transition visible={visible} animation="fade right" duration={500}>
            <Menu inverted vertical className="popUpMenu" fixed="left">
              <Menu.Item
                as={NavLink}
                to="/"
                content={headerData![0]}
                header
              ></Menu.Item>
              <Menu.Item as={NavLink} to="/menu" content={headerData![1]} />
              <Menu.Item as={NavLink} to="/gallery" name={headerData![2]} />
              <Menu.Item as={NavLink} to="/about" name={headerData![3]} />
              <Menu.Item onClick={() => setLanguage(Language.Serbian)}>
                <Flag name="rs" />
                Srpski
              </Menu.Item>
              <Menu.Item onClick={() => setLanguage(Language.English)}>
                <Flag name="gb" />
                English
              </Menu.Item>
              <Menu.Item onClick={() => setLanguage(Language.Hungarian)}>
                <Flag name="hu" />
                Magyar
              </Menu.Item>
            </Menu>
          </Transition>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
});
