import React from "react";
import "./emp.css";
function EmployeeCard(props) {
  return (
    <main className="emp-card">
      <section>
        <div className="emp-img">
          <img src={props.data.pic} alt="" />
        </div>

        <h4 className="emp-name">{props.data.title1}</h4>
        <p className="emp-designation">{props.data.title2}</p>
      </section>
    </main>
  );
}

export default EmployeeCard;
