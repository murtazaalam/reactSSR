import * as React from "react";
import "./StudentCard.css";

export default function StudentCard(props) {
  return (
    <main class="main">
      <section class="container container-width">
        <article class="review">
          <div class="img-container">
            <img src={props.data.pic} alt="" id="person-img" />
          </div>

          <h4 id="author">{props.data.title}</h4>
          <p id="job">{props.data.designation}</p>
          <p id="info">"{props.data.overview}"</p>
        </article>
      </section>
    </main>
  );
}
