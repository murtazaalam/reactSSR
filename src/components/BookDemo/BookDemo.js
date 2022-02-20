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
import sendQueryApi from "../../apis/api/SendQuery";
import ButtonLoader from "../../assets/images/button_loader.gif";

const BookADemo = () => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [query, setQuery] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loader, setLoader] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let body;
    const data =new FormData(e.currentTarget);
    setMessage("")
    setLoader(true);
    if(localStorage.getItem('token')){
      body = {
        query : data.get('query')
      }
      sendQueryApi(body, setMessage, setLoader);
    }else{
      let emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      body = {
        name : data.get("name"),
        email : data.get("email"),
        query : data.get("query")
      }
      if(!body.email.match(emailValidate)){
        setLoader(false);
        setMessage("Invalid Email");
        return;
      }
      sendQueryApi(body, setMessage, setLoader);
    }
    
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
              <p style={message === "Query Sent" ? {color: 'var(--color-green-icon)'} : {color: 'var(--color-secondary)'}}
                className="query-message"
              >
                  {message}
              </p>
              <CardContent className="card-content">
                <TextField
                  id="name"
                  name="name"
                  label="Name"
                  sx={{ pb: 1 }}
                  variant="outlined"
                  value={name}
                  required={localStorage.getItem('token') ? false : true}
                  onChange={(e) => setName(e.target.value)}
                  style={localStorage.getItem('token') ? {display: 'none'} : {display: 'inherit'}}
                />
                <TextField
                  id="email"
                  name="email"
                  label="Email Id"
                  variant="outlined"
                  value={email}
                  sx={{ pb: 1 }}
                  required={localStorage.getItem('token') ? false : true}
                  onChange={(e) => setEmail(e.target.value)}
                  style={localStorage.getItem('token') ? {display: 'none'} : {display: 'inherit'}}
                />
              
                <TextField
                  id="query"
                  name="query"
                  label="Ask Query"
                  variant="outlined"
                  value={query}
                  sx={{ pb: 1 }}
                  multiline
                  rows={2}
                  required
                  // maxRows={4}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </CardContent>
              <CardActions>
                <button
                  style={loader ? {backgroundColor: 'var(--color-disable)'} : {backgroundColor: 'var(--color-secondary)'}
                  }
                  disabled={loader ? true : false}
                  className="btn-grad book-demo"
                >
                  {loader ? <img src={ButtonLoader} width="80" /> : 'Submit'}
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
