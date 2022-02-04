import React from "react";
import { Container } from "@mui/material";
import BasicModal from "../basicModal/BasicModal";
import './contentHeaderImage.css';

const ContentHeaderImage = () => {
  return (
      <div className="techvanto-content-header-image">
        <Container>
          <div className="techvanto-header-content">
            <p className="techvanto-campus-ambassador-right-content">
              <br />
              <br />
              <br />
              <span className="text-large">Indulge in limitless learning.</span>
              <div style={{ lineHeight: "normal" }}>
                <span className="text-small">Anytime, Anywhere. </span>
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