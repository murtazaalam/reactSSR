import React from "react";
import { Container } from "@mui/material";
import BasicModal from "../basicModal/BasicModal";
import "./contentHeaderImage.css";

const ContentHeaderImage = (props) => {
  return (
    <div
      className="techvanto-content-header-image"
      style={{ background: `#578bc0 url(${props.background}) 0 0 no-repeat` }}
    >
      <Container>
        <div className="techvanto-header-content">
          <p className="techvanto-campus-ambassador-right-content">
            <br />
            <br />
            <br />
            <span className="text-large">{props.title}</span>
            <div style={{ lineHeight: "normal" }}>
              <span className="text-small">{props.overview} </span>
              <br />
            </div>
            <br />
            <div className="techvanto-know-more-button btn-grad">
              <BasicModal text="Book Demo ►" name="Home"></BasicModal>
            </div>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ContentHeaderImage;
