import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Akshitha Donthula </span>
            from <span className="purple"> Hyderabad, Telangana, India.</span>
            <br />I am a Computer Science student at ABV-IIITM GWALIOR.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading novels and books.
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching webseries, listening to music.
            </li>
            <li className="about-activity">
              <ImPointRight /> Love adventures.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always strive to become the best version of yourself"{" "}
          </p>
          <footer className="blockquote-footer">Akshitha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
