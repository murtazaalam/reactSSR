import * as React from "react";
import { Form } from "react-final-form";
import { Button, Container } from "@mui/material";
import needAssistance from "../../assets/Svgs/needAssistance.svg";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import "./BookDemo.css";
//import BookDemo from "../../Core/api/services/BookDemo";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    border: "inset",
    paddingLeft: "10px",
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const BookADemo = () => {
  const [email, setEmail] = React.useState("");
  const onSubmit = async (values) => {
    // console.log(values);

    // if (email === "") window.alert("Please fill email/phone.");
    // else {
    //   if (isNaN(email)) values["email"] = email;
    //   else values["phone"] = email;
    //   BookDemo(values);
    //   window.alert("Submit Successfully.");
    //   values["email"] = "";
    //   values["phone"] = "";
    // }
    alert("Boooked!");
  };
  console.log(email);
  return (
    <section>
      <Container>
        <div className="techvanto-book-a-demo display-grid fr2">
          <div>
            <img src={needAssistance} alt="bookademo"></img>
          </div>
          <div>
            <p className="techvanto-demo-right-content">
              <span className="text-large">Need Assistance</span>
              <div style={{ lineHeight: "normal" }}>
                <span className="text-small">
                  Need Help? Drop Your email or number. We will contact you.{" "}
                </span>
              </div>
              <br />
              <div className="techvanto-book">
                <Form
                  onSubmit={onSubmit}
                  initialValues={{ service: "Need a Assistance" }}
                  render={({
                    handleSubmit,
                    form,
                    submitting,
                    pristine,
                    values,
                  }) => (
                    <form
                      onSubmit={handleSubmit}
                      noValidate
                      style={{ display: "flex" }}
                    >
                      <Search name="email">
                        <StyledInputBase
                          name="email"
                          placeholder="Enter your Email/Number"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          inputProps={{ "aria-label": "search" }}
                        />
                      </Search>

                      <Button
                        variant="contained"
                        className="techvanto-know-more-button btn-grad"
                        type="submit"
                      >
                        Book A demo ►
                      </Button>
                    </form>
                  )}
                />
              </div>
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BookADemo;
