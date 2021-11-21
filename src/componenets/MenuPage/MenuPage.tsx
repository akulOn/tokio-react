import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  Grid,
  Icon,
  Image,
  Label,
  Modal,
} from "semantic-ui-react";
import { Menu } from "../../types/Menu";
import MenuList from "../MenuList/MenuList";
import "./menuPage.css";

export default function MenuPage() {
  const [open, setOpen] = useState(false);
  const [openedImage, setOpenedImage] = useState("");

  const mainMenu: Menu = {
    Header: "UKUSNO S' ROŠTILJA",
    Items: [
      {
        Name: "SARAJEVSKI ĆEVAP",
        Price: "230.00/460.00 RSD",
        Portion: "5/10 komada",
        Description: "Juneće meso 125 g/250 g | 1/2 somuna 150 g",
      },
      {
        Name: "Pljeskavica",
        Price: "230.00/460.00 RSD",
        Portion: "Mala porcija / Velika porcija",
        Description: "Juneće meso 125 g/250 g | 1/2 somuna 150 g",
      },
      {
        Name: "SARAJEVSKI ĆEVAP",
        Price: "230.00/460.00 RSD",
        Portion: "5/10 komada",
        Description: "Juneće meso 125 g/250 g | 1/2 somuna 150 g",
      },
      {
        Name: "Pljeskavica",
        Price: "230.00/460.00 RSD",
        Portion: "Mala porcija / Velika porcija",
        Description: "Juneće meso 125 g/250 g | 1/2 somuna 150 g",
      },
      {
        Name: "SARAJEVSKI ĆEVAP",
        Price: "230.00/460.00 RSD",
        Portion: "5/10 komada",
        Description: "Juneće meso 125 g/250 g | 1/2 somuna 150 g",
      },
      {
        Name: "Pljeskavica",
        Price: "230.00/460.00 RSD",
        Portion: "Mala porcija / Velika porcija",
        Description: "Juneće meso 125 g/250 g | 1/2 somuna 150 g",
      },
      {
        Name: "SARAJEVSKI ĆEVAP",
        Price: "230.00/460.00 RSD",
        Portion: "5/10 komada",
        Description: "Juneće meso 125 g/250 g | 1/2 somuna 150 g",
      },
      {
        Name: "Pljeskavica",
        Price: "230.00/460.00 RSD",
        Portion: "Mala porcija / Velika porcija",
        Description: "Juneće meso 125 g/250 g | 1/2 somuna 150 g",
      },
      {
        Name: "SARAJEVSKI ĆEVAP",
        Price: "230.00/460.00 RSD",
        Portion: "5/10 komada",
        Description: "Juneće meso 125 g/250 g | 1/2 somuna 150 g",
      },
      {
        Name: "Pljeskavica",
        Price: "230.00/460.00 RSD",
        Portion: "Mala porcija / Velika porcija",
        Description: "Juneće meso 125 g/250 g | 1/2 somuna 150 g",
      },
      {
        Name: "SARAJEVSKI ĆEVAP",
        Price: "230.00/460.00 RSD",
        Portion: "5/10 komada",
        Description: "Juneće meso 125 g/250 g | 1/2 somuna 150 g",
      },
      {
        Name: "Pljeskavica",
        Price: "230.00/460.00 RSD",
        Portion: "Mala porcija / Velika porcija",
        Description: "Juneće meso 125 g/250 g | 1/2 somuna 150 g",
      },
      {
        Name: "SARAJEVSKI ĆEVAP",
        Price: "230.00/460.00 RSD",
        Portion: "5/10 komada",
        Description: "Juneće meso 125 g/250 g | 1/2 somuna 150 g",
      },
      {
        Name: "Pljeskavica",
        Price: "230.00/460.00 RSD",
        Portion: "Mala porcija / Velika porcija",
        Description: "Juneće meso 125 g/250 g | 1/2 somuna 150 g",
      },
      {
        Name: "SARAJEVSKI ĆEVAP",
        Price: "230.00/460.00 RSD",
        Portion: "5/10 komada",
        Description: "Juneće meso 125 g/250 g | 1/2 somuna 150 g",
      },
      {
        Name: "Pljeskavica",
        Price: "230.00/460.00 RSD",
        Portion: "Mala porcija / Velika porcija",
        Description: "Juneće meso 125 g/250 g | 1/2 somuna 150 g",
      },
      {
        Name: "SARAJEVSKI ĆEVAP",
        Price: "230.00/460.00 RSD",
        Portion: "5/10 komada",
        Description: "Juneće meso 125 g/250 g | 1/2 somuna 150 g",
      },
      {
        Name: "Pljeskavica",
        Price: "230.00/460.00 RSD",
        Portion: "Mala porcija / Velika porcija",
        Description: "Juneće meso 125 g/250 g | 1/2 somuna 150 g",
      },
      {
        Name: "SARAJEVSKI ĆEVAP",
        Price: "230.00/460.00 RSD",
        Portion: "5/10 komada",
        Description: "Juneće meso 125 g/250 g | 1/2 somuna 150 g",
      },
      {
        Name: "Pljeskavica",
        Price: "230.00/460.00 RSD",
        Portion: "Mala porcija / Velika porcija",
        Description: "Juneće meso 125 g/250 g | 1/2 somuna 150 g",
      },
    ],
  };

  const mezeMenu: Menu = {
    Header: "MEZE",
    Items: [
      {
        Name: "Kajmak",
        Price: "90.00 RSD",
        Portion: "",
        Description: "70 g mladog kajmaka",
      },
      {
        Name: "Sir Sjecanski",
        Price: "220.00 RSD",
        Portion: "",
        Description: "100 g",
      },
    ],
  };

  const salateMenu: Menu = {
    Header: "SALATE",
    Items: [
      {
        Name: "Kupus",
        Price: "170.00 RSD",
        Portion: "",
        Description: "200 g",
      },
      {
        Name: "Paradajz",
        Price: "210.00 RSD",
        Portion: "",
        Description: "200 g",
      },
    ],
  };

  const priloziMenu: Menu = {
    Header: "PRILOZI",
    Items: [
      {
        Name: "Pomfrit",
        Price: "170.00 RSD",
        Portion: "",
        Description: "200 g",
      },
      {
        Name: "Pekarski Pomfrit",
        Price: "190.00 RSD",
        Portion: "",
        Description: "200 g",
      },
    ],
  };

  const desertiMenu: Menu = {
    Header: "DESERTI",
    Items: [
      {
        Name: "BAKLAVA",
        Price: "220.00 RSD",
        Portion: "",
        Description: "",
      },
      {
        Name: "Domace palacinke",
        Price: "250.00 RSD",
        Portion: "",
        Description: "",
      },
    ],
  };

  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        closeIcon
      >
        <Modal.Header>Sarajevski cevapi combo</Modal.Header>
        <Modal.Content image>
          <Image size="medium" src={openedImage} wrapped />
          <Modal.Description>
            <p>
              10 cevapa sa kajmakom, somun, pekarski pomfrit i zelena salata
            </p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={() => setOpen(false)}
            as="a"
            name="phone"
            href="tel:+381666600610"
            positive
          >
            <Icon name="phone" />
            Porucite
          </Button>
        </Modal.Actions>
      </Modal>
      <Grid columns={3} divided stackable textAlign="center">
        <Grid.Row>
          <Container as="h1" textAlign="center" content="Preporucujemo" />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Card
              centered
              onClick={() => {
                setOpenedImage("/assets/menu/recommendations/cevapi.jpg");
                setOpen(true);
              }}
            >
              <Image src="/assets/menu/recommendations/cevapi.jpg" />
              <Card.Content>
                <Card.Header>Sarajevski cevapi combo</Card.Header>
                <Card.Description>
                  10 cevapa sa kajmakom, somun, pekarski pomfrit i zelena salata
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Label size="big">
                  <Icon name="food" /> 940.00 RSD
                </Label>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card centered>
              <Image src="/assets/menu/recommendations/teleceKrpice.jpg" />
              <Card.Content>
                <Card.Header>Telece krpice combo </Card.Header>
                <Card.Description>
                  Telece krpice u kajmaku, somun, pekarski pomfrit i sopska
                  salata
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Label size="big">
                  <Icon name="food" /> 1160.00 RSD
                </Label>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card centered>
              <Image src="/assets/menu/recommendations/pileciFile.jpg" />
              <Card.Content>
                <Card.Header>Pileci file combo</Card.Header>
                <Card.Description>
                  Pileci file, somun, pekarski pomfrit i sopska salata
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Label size="big">
                  <Icon name="food" /> 800.00 RSD
                </Label>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Card centered>
              <Image src="/assets/menu/recommendations/pljeskavica.jpg" />
              <Card.Content>
                <Card.Header>Pljeskavica combo</Card.Header>
                <Card.Description>
                  Pljeskavica sa kajmakom, somun, pekarski pomfrit i zelena
                  salata
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Label size="big">
                  <Icon name="food" /> 940.00 RSD
                </Label>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card centered>
              <Image src="/assets/menu/recommendations/biftekAllaTokio.jpg" />
              <Card.Content>
                <Card.Header>Biftek Al la Tokio</Card.Header>
                <Card.Description>
                  Biftek u umaku od ruzmarina uz grilovano povrće
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Label size="big">
                  <Icon name="food" /> 1680.00 RSD
                </Label>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card centered>
              <Image src="/assets/menu/recommendations/srpskaKobasica.jpg" />
              <Card.Content>
                <Card.Header>Srpska kobasica</Card.Header>
                <Card.Description>
                  Srpska kobasica 300 g | pekarski pomfrit 150 g + senf
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Label size="big">
                  <Icon name="food" /> 500.00 RSD
                </Label>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns={2} divided stackable>
        <Grid.Row>
          <Container as="h1" textAlign="center" content="Meni" />
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column>
            <MenuList menu={mainMenu} />
          </Grid.Column>
          <Grid.Column>
            <MenuList menu={mezeMenu} />
            <MenuList menu={salateMenu} />
            <MenuList menu={priloziMenu} />
            <MenuList menu={desertiMenu} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
