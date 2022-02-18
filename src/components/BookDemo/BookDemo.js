import * as React from "react";
//import { Form } from "react-final-form";
import {
  TextField,
  Container,
  CardHeader,
  CardContent,
  IconButton,
  Card,
} from "@mui/material";
import needAssistance from "../../assets/Svgs/needAssistance.svg";
import "./BookDemo.css";
import { CardActions } from "@material-ui/core";

const BookADemo = () => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [query, setQuery] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("hello world")
  };
  return (
    <section>
      <Container>
        <div className="techvanto-book-a-demo display-grid fr2">
          <div>
            <img src={needAssistance} alt="bookademo"></img>
          </div>
          <div>
            {/* <Card className="inhert-width" sx={{ p: 2 }}> */}
            <form onSubmit={handleSubmit} className="form-book">
              <CardHeader
                action={<IconButton aria-label=""></IconButton>}
                title="Need Assistance?"
                subheader=""
              />
              <CardContent className="card-content">
                <TextField
                  id="name"
                  label="Name"
                  sx={{ pb: 1 }}
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  id="email"
                  label="Email Id"
                  variant="outlined"
                  value={email}
                  sx={{ pb: 1 }}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  id="query"
                  label="Ask Query"
                  variant="outlined"
                  value={query}
                  sx={{ pb: 1 }}
                  multiline
                  rows={2}
                  // maxRows={4}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </CardContent>
              <CardActions>
                <button
                  style={{ width: "-webkit-fill-available" }}
                  className="btn-grad "
                >
                  Submit
                </button>
              </CardActions>
            </form>
            {/* </Card> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BookADemo;
