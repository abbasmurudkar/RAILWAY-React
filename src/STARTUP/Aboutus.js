import React from "react";
import Nav from "./components/Nav";
import styled from "styled-components";
import Backgrounds from "../ASSETS/AboutRailway.jpeg";
import Footer from "./components/Footer";
import { Button } from "rsuite";
import { Link } from "react-router-dom";
const Aboutus = () => {
  return (
    <div>
      <Nav />
      <Background className="about-bg">
        <div className="text-center">
          <h1>ABOUT US</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            enim ratione ipsam ea non labore. Unde omnis nesciunt laudantium
            sequi optio ut tempore velit facere nisi reiciendis? Omnis, debitis,
            provident ex similique ut voluptatem pariatur, voluptas quisquam
            dolores beatae explicabo. Officiis qui ad ex libero dolores? Omnis
            nostrum, rem esse assumenda eligendi sunt ex asperiores culpa sequi,
            inventore vel officia facere commodi. Porro, molestiae inventore
            quia enim maiores culpa debitis, error, molestias eius impedit
            expedita. Minus corrupti ipsa voluptatibus? Officiis fuga tempore
            magni expedita, neque eum iure earum, nihil asperiores, delectus
            nisi. Sit, nostrum corporis? Fugiat nulla tempore eos, repellendus,
            doloremque vero error animi nisi iste consectetur harum? Et dolore
            ad, ullam quam accusamus sequi deserunt? Possimus nisi consequatur
            sint? Ad, aut laborum repellendus eligendi odit rerum ullam sed esse
            aperiam odio, blanditiis a. Hic, qui placeat rerum dolores ipsa
            magnam delectus nobis, eaque quam molestias harum ad accusantium
            nesciunt laborum atque repellendus ex veniam et tenetur natus
            reprehenderit, ipsam at saepe quis. Quis sed natus quasi deleniti
            repudiandae ab perspiciatis optio numquam nihil quos, atque itaque
            debitis, nemo aliquid totam quisquam. Natus, eaque ipsum! Nulla,
            excepturi officia repudiandae maxime, qui quae odio aut modi soluta
            reiciendis laborum in numquam.
          </p>
        <Link to="/Blog"><Button style={{marginLeft:"10px",marginTop:"20px"}} size="lg" color="green" appearance="primary">See Blogs For More Details</Button></Link>
        </div>
      </Background>
      <Footer />
    </div>
  );
};

export default Aboutus;

const Background = styled.div`
  background-image: linear-gradient(
      to top,
      rgb(0 0 0 / 52%),
      rgb(212 255 219 / 73%)
    ),
    url(${Backgrounds});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 750px;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  padding: 60px;
  flex-direction: column;
  h1 {
    margin: 10px;
    margin-bottom: 20px;
  }
  p {
    margin: 10px;
    /* border: 2px solid red; */
    text-align: left;
  }
`;
