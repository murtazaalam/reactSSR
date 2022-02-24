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
import { ToastContainer, toast } from "react-toastify";
import sendQueryApi from "../../apis/api/SendQuery";
import ButtonLoader from "../../assets/images/button_loader.gif";
import { useSelector } from "react-redux";

const BookADemo = () => {

  let { admin, isLogin } = useSelector((state) => state.AuthReducer);

  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [query, setQuery] = React.useState();
  const [message, setMessage] = React.useState("");
  const [loader, setLoader] = React.useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    let body;
    const data =new FormData(e.currentTarget);
    setMessage("")
    setLoader(true);
      let emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      body = {
        name : data.get("name"),
        email : data.get("email"),
        query : data.get("query") ? data.get("query") : null
      }
      if(!body.email.match(emailValidate)){
        setLoader(false);
        setMessage("Invalid Email");
        return;
      }
      else{
        let success = await sendQueryApi(body, setMessage, setLoader);
        toast.success(success, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        if(success === "Query Sent"){
          emptyState();
        }
      }
  };
  const emptyState = () => {
    if(isLogin){
      setQuery("");
    }
    else{
      setName("")
      setEmail("");
      setQuery("");
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
                  value={isLogin ? admin.name : name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  id="email"
                  type="email"
                  name="email"
                  label="Email Id"
                  variant="outlined"
                  value={isLogin ? admin.email : email}
                  sx={{ pb: 1 }}
                  required
                  onChange={(e) => setEmail(e.target.value)}
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
