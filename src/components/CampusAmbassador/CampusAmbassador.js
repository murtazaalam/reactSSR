import * as React from "react";
import "./CampusAmbassador.css";
import "mui-player/dist/mui-player.min.css";
import { Container, Button } from "@mui/material";
const CampusAmbassador = () => {
  // var Mp = new MuiPlayer({
  //     container:'#mui-player',
  // title:'Title',
  // src:'video/ca.mp4',
  // })
  return (
    <div className="background">
      <Container className="section-spacing">
        <section>
          <div className="techvanto-campus-ambassador">
            <div className="techvanto-campus-ambassador-left">
              <div className="techvanto-campus-ambassador-left-image">
                <div>
                  <video
                    src="https://www.youtube.com/watch?v=s1RtrrA8A_0"
                    playsinline
                    loop
                    controls
                    controlsList="nodownload"
                    width="100%"
                    height="100%"
                  />
                  {/* <MuiPlayer src="video/ca.mp4" container={'#mui-player'} ></MuiPlayer> */}
                </div>
              </div>
            </div>
            <div className="techvanto-campus-ambassador-right">
              <p className="techvanto-campus-ambassador-right-content">
                <div style={{ lineHeight: "normal" }}>
                  <span className="text-small">
                    Techvanto Academy’s Campus Ambassador program{" "}
                  </span>
                  <br />
                  <span className="text-small">
                    scours the most committed learners to relay our dream of
                    upgrading the academic and professional abilities of
                    hundreds like them. through college campus events, meet-ups,
                    online forums, and other channels.
                  </span>
                  <br />
                </div>
                <span className="text-large">Campus Ambassador</span>
                <br />
                <Button
                  variant="contained"
                  className="techvanto-know-more-button btn-grad"
                >
                  Know More ►
                </Button>
              </p>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default CampusAmbassador;
