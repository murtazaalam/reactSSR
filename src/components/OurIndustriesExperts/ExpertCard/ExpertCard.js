import React from "react";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";

function ExpertCard(props) {
  return (
    <main class="main">
      <section class="container">
        <article class="review">
          <div class="img-container">
            <img src={props.data.pic} alt="" id="person-img" />
          </div>

          <h4 id="author">{props.data.title1}</h4>
          <h5>
            <BusinessRoundedIcon />
            {props.data.title2}
          </h5>
          <p id="job">{props.data.author}</p>
        </article>
      </section>
    </main>
  );
}

export default ExpertCard;
