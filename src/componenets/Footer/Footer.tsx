import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import { useStore } from "../../stores/store";
import "./footer.css";

export default function Footer() {
  const { mainStore } = useStore();
  const { selcetedLanguage, getHeaderData } = mainStore;

  return (
    <>
      <Menu inverted icon="labeled" widths={9} stackable>
        <Menu.Item as="h3" header>
          RADNO VREME
        </Menu.Item>
        <Menu.Item>Svakog dana 07:00 – 23:00</Menu.Item>
        <Menu.Item as="h3" header>
          Kontakt:
        </Menu.Item>
        <Menu.Item
          as="a"
          name="map"
          href="https://goo.gl/maps/9TDGunFVvvNJZNmq8"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon name="map" />
          Maksima Gorkog 9-11, 24000 Subotica
        </Menu.Item>
        <Menu.Item as="a" name="phone" href="tel:+38124600610">
          <Icon name="phone" />
          (+381) 24 600 610
        </Menu.Item>
        <Menu.Item as="a" name="phone" href="tel:+381666600610">
          <Icon name="phone" />
          (+381) 66 660 0610
        </Menu.Item>
        <Menu.Item
          as="a"
          name="mail"
          href="mailto:tokiobbq@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon name="mail" />
          tokiobbq@gmail.com
        </Menu.Item>
        <Menu.Item
          as="a"
          name="facebook"
          href="https://www.facebook.com/tokioBBQ/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon name="facebook" />
          Tokio BBQ
        </Menu.Item>
        <Menu.Item
          as="a"
          name="instagram"
          href="https://www.instagram.com/tokiobbq/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon name="instagram" />
          Tokio BBQ | roštilj & grill
        </Menu.Item>
      </Menu>
    </>
  );
}
