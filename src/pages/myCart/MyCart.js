import React, { useState, useEffect, useCallback } from "react";
import useRazorpay from "react-razorpay";
import Banner from "../../components/Generic/Banner/Banner";
import cartImage from "../../assets/images/cart1.jpg";
import DeleteIcon from "@mui/icons-material/Delete";
import "./myCart.css";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import removeItemFromCart from "../../apis/api/RemoveFromCart";
import getFromCartApi from "../../apis/api/GetFromCart";
import addOrderApi from "../../apis/api/AddOrder";
import verifyOrderApi from "../../apis/api/OrderVerify";
import { Rating } from "@material-ui/lab";
import { Chip } from "@material-ui/core";

function MyCart() {
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState();
  const [deteteMessage, setDeleteMessage] = useState();
  const [grandPrice, setTotalPrice] = useState();
  const [paymentMessage, setPaymentMessage] = useState("");
  let totalPrice = 0;
  const Razorpay = useRazorpay();

  useEffect(() => {
    getFromCartApi(setCartItems);
  }, []);

  const removeFromCart = (id) => {
    removeItemFromCart(id, setDeleteMessage);
  };
  if (deteteMessage > 0) {
    getFromCartApi(setCartItems);
  }

  const checkout = async () => {
    let body = {
      total_amount: totalPrice,
      cart_item: cartItems,
    };
    let order = await addOrderApi(body);
    const options = {
      key: "rzp_test_rDOF9MHexhjJYj", // Enter the Key ID generated from the Dashboard
      amount: totalPrice, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
      handler: function (response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
        let verificationDetail = {
          razorpay_payment_id: response.razorpay_payment_id,
          order_id: response.razorpay_order_id,
        };
        verifyOrderApi(verificationDetail, setPaymentMessage);
      },
      prefill: {
        name: "Piyush Garg",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
  };
  return (
    <div>
      {" "}
      <div>
        <div>
          {loading && <h1>loading</h1>}
          <div>
            <Banner
              heading="My Cart"
              backgroundImage={cartImage}
              breadcrumb="cart"
            />
          </div>

          {cartItems && (
            <section className="cart-content-block container">
              {!cartItems.length && (
                <h6> Empty Cart!!! Go to Marketplace and get some courses.</h6>
              )}
              <Typography variant="p">
                {paymentMessage !== "" ? paymentMessage : ""}
              </Typography>
              {/* cart form */}
              <form action="#" className="cart-form">
                <div className="table-wrap">
                  <p>{cartItems.length} Courses in the cart.</p>
                  <p style={{ color: "red", fontWeight: 600 }}>
                    {deteteMessage
                      ? `${deteteMessage} Course deleted successfully.`
                      : ""}
                  </p>
                  {cartItems.map((item, index) => (
                    <Card
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "20px",
                      }}
                      key={index}
                    >
                      <div
                        style={{
                          background: `linear-gradient(${item.gradient})`,
                          height: "194px",
                        }}
                      >
                        <CardMedia
                          component="img"
                          className="techvanto-all-course-image"
                          sx={{ width: 340 }}
                          height="194"
                          //  width="340"
                          style={{
                            backgroundImage: `url(${item.course_image})`,
                            height: "194px",
                          }}
                        />
                      </div>

                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <CardContent sx={{ flex: "1 0 auto" }}>
                          <Typography component="div" variant="h5">
                            {item.course_name}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                          >
                            {item.description}
                          </Typography>
                          <Rating
                            name="read-only"
                            value={item.rating}
                            readOnly
                          />
                        </CardContent>
                      </Box>
                      <CardActions className="cart-action">
                        <DeleteIcon
                          onClick={() => removeFromCart(item._id)}
                          style={{ placeSelf: "flex-end" }}
                        />

                        {item.discount !== 0 ? (
                          <p>
                            {" "}
                            <span
                              style={{ textDecorationLine: "line-through" }}
                            >
                              Rs.{item.price}
                            </span>
                            {"  "}
                            Rs.{item.price - item.discount}
                          </p>
                        ) : (
                          <p>Rs.{item.price}</p>
                        )}
                      </CardActions>
                    </Card>
                  ))}
                </div>
                <div className="cart-priceCard">
                  <Card>
                    <CardContent>
                      <Typography variant="h4" color="initial">
                        Total &nbsp; ₹
                        {cartItems.reduce(
                          (a, curr) =>
                            parseInt(a) +
                            parseInt(curr.price) -
                            parseInt(curr.discount),
                          0
                        )}
                      </Typography>
                      <Typography variant="h2"></Typography>
                      <Typography variant="body1" color="initial">
                        Subtotal:&nbsp; ₹
                        <span
                          className="price"
                          style={{ textDecoration: "line-through" }}
                        >
                          {cartItems.reduce(
                            (a, curr) => parseInt(a) + parseInt(curr.price),
                            0
                          )}
                        </span>
                      </Typography>
                      <Typography variant="body1" color="initial">
                        Total Discount: &nbsp; ₹
                        <span>
                          {cartItems.reduce(
                            (a, curr) =>
                              parseInt(a) +
                              (parseInt(curr.discount)
                                ? parseInt(curr.discount)
                                : 0),
                            0
                          )}{" "}
                        </span>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <button
                        type="button"
                        className="btn-grad"
                        onClick={() => checkout(totalPrice)}
                      >
                        CheckOut
                      </button>
                    </CardActions>
                  </Card>
                </div>
              </form>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyCart;
