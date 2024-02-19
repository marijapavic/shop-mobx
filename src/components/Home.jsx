import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { observer } from "mobx-react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";

const images = [banner1, banner2];

const Home = observer(() => {
  return (
    <div className="slideshow-container">
      <Slide>
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slide>
    </div>
  );
});

export default Home;
