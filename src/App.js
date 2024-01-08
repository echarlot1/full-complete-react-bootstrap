import { useState } from "react";
import "./styles.css";
import img1 from "./images/image1.jpg";
import img2 from "./images/image2.jpg";
import img3 from "./images/image2.jpg";
import Component1 from "./Component1";
const App = () => {
  return (
    <div>
      <section id="core-concept">
        <ul>
          <Component1
            images={img1}
            alt="img1"
            title="Title1"
            description="I am Description1"
          />
          <Component1
            images={img2}
            alt="img2"
            title="Title2"
            description="I am description2"
          />
          <Component1
            images={img3}
            alt="img3"
            title="Title3"
            description="I am description3"
          />
        </ul>
      </section>
    </div>
  );
};

export default App;
