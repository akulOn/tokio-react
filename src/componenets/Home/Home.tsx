import React from "react";
import { Grid, Image } from "semantic-ui-react";
import "./home.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

export default function Home() {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <h1>Dobro došli!</h1>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <ImageGallery items={images} infinite={true} autoPlay={true} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
