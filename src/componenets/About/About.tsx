import React, { useState } from "react";
import { Container, Grid, Image, Loader } from "semantic-ui-react";
import "./about.css";

interface Props {
  title: string;
  imgUri: string;
}

export default function About({ title, imgUri }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Grid stackable verticalAlign="middle">
      <Grid.Row columns={1}>
        <Grid.Column className="imageText">
          <Image
            centered
            size="large"
            src={imgUri}
            alt={title}
            onLoad={() => setLoaded(true)}
          />
          {loaded ? (
            <div className="centeredText">
              <h1>{title}</h1>
            </div>
          ) : (
            <Loader active inline="centered" />
          )}
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1}>
        <Grid.Column>
          <Container as="h1" textAlign="center">
            Roštilj & Grill
          </Container>
          <Container as="h3" textAlign="center">
            NAŠA PRIČA
          </Container>
          <Container as="p" textAlign="center">
            "Ideja je bila da otvorimo mesto gde će moći da se pojede izvorni
            sarajevski ćevap, koji se pravi od čistog junećeg mesa i to u
            somunu, jer oni koji se malo više razumeju, znaju da se originalni
            sarajevski ćevap služi u somunu, a ne u lepinji. Bilo je različitih
            predloga za ime restorana, ali ime naselja je presudilo u njegovom
            odabiru. Ovo je takav deo grada da svako ko u Subotici kaže da ide u
            Tokio, tačno se zna u koje naselje ide i mislim da smo to odlično
            uklopili u ime lokala."
          </Container>
          <Container as="p" textAlign="center">
            Menadžer - Dalibor Drača
          </Container>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Container as="h2" textAlign="center">
            Gde se nalazimo?
          </Container>
          <Container as="p" textAlign="center">
            Maksima Gorkog 9-11 24000 Subotica Centar grada - Tokio
          </Container>
        </Grid.Column>
        <Grid.Column textAlign="center">
          <Container
            style={{ minHeight: 100, minWidth: 100, width: 400, height: 400 }}
            as="iframe"
            src="https://maps.google.com/maps?q=tokio%20bbq&t=&z=15&ie=UTF8&iwloc=&output=embed"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Image src="/assets/about/enterijer.jpg" size="massive" />
        </Grid.Column>
        <Grid.Column>
          <Container as="h2" textAlign="center">
            RESTORAN
          </Container>
          <Container as="p" textAlign="center">
            Otvoren u samom srcu istoimenog naselja, restoran "Tokio BBQ" donosi
            dobro poznata jela sa roštilja. Zamisao je bila da se moderan
            enterijer i komforna bašta spoje sa ukusima tradicije, te tako
            sugrađanima pruži nova vrsta usluge.
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
