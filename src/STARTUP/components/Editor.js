import React from "react";
import styled from "styled-components";
import avtar from "../../ASSETS/avtar2.jpg";
import avtar2 from "../../ASSETS/avtar1.jpg";
const Editor = () => {
  return (
    <div className="d">
      <div
        className="testimonals"
        style={{width: "100%", paddingLeft: "30px",marginTop:"30px" }}
      >
    <h3>TESTIMONIALS</h3>
      </div>
      <Block>
        <div className="editor1">
          <img src={avtar} alt="loading" />
          <div className="paragraph">
            <h4>Raj makadia</h4>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              nam illum soluta dicta rem corrupti doloribus nisi ipsum
              consectetur recusandae?
            </p>
          </div>
          <p></p>
        </div>
        <div className="editor1">
          <img src={avtar2} alt="loading" />
          <div className="paragraph">
            <h4>Aniket Desai</h4>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              nam illum soluta dicta rem corrupti doloribus nisi ipsum
              consectetur recusandae?
            </p>
          </div>
        </div>
      </Block>
    </div>
  );
};

export default Editor;
const Block = styled.div`
  width: 100%;
  padding: 40px 70px 50px 70px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
;
  .editor1 {
    display: flex;
    width: 600px;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    img {
      height: 150px;
      width: 280px;
      border-radius: 50%;
      margin: 10px;
    }
    .paragraph {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 150px;
    }
  }
`;
