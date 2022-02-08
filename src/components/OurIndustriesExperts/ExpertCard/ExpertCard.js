import React from "react";

function ExpertCard(props) {
  return (
    <main class="main">
      <section class="container">
        <article class="review">
          <div class="img-container">
            <img src={props.data.pic} alt="" id="person-img" />
          </div>

          <h4 id="author">{props.data.title}</h4>
          <p id="job">{props.data.author}</p>
        </article>
      </section>
    </main>
  );
}

export default ExpertCard;
