import * as React from "react";
//import { Form } from "react-final-form";
import {
  Button,
  TextField,
  Container,
  CardHeader,
  CardContent,
  IconButton,
  Card,
} from "@mui/material";
import needAssistance from "../../assets/Svgs/needAssistance.svg";

import "./BookDemo.css";

const BookADemo = () => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("booked!");
  };
  return (
    <section>
      <Container>
        <div className="techvanto-book-a-demo display-grid fr2">
          <div>
            <img src={needAssistance} alt="bookademo"></img>
          </div>
          <div>
            <Card className="inhert-width">
              <CardHeader
                action={<IconButton aria-label=""></IconButton>}
                title="Need Assistance"
                subheader=""
              />
              <form onSubmit={handleSubmit} className="form-book">
                <CardContent className="card-content">
                  <TextField
                    id="name"
                    label="Name"
                    sx={{ p: 0.5 }}
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    id="email"
                    label="Email Id"
                    variant="outlined"
                    value={email}
                    sx={{ p: 0.5 }}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </CardContent>
                <button className="btn-grad padding">Submit</button>
              </form>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BookADemo;
