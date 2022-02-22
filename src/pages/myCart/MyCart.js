import React, { useState, useEffect } from "react";
import useRazorpay from "react-razorpay";
import Banner from "../../components/Generic/Banner/Banner";
import cartImage from "../../assets/images/cart1.jpg";
import DeleteIcon from "@mui/icons-material/Delete";
import "./myCart.css";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import { ToastContainer, toast } from "react-toastify";
import removeItemFromCart from "../../apis/api/RemoveFromCart";
import getFromCartApi from "../../apis/api/GetFromCart";
import addOrderApi from "../../apis/api/AddOrder";
import verifyOrderApi from "../../apis/api/OrderVerify";
import { Rating } from "@material-ui/lab";
import Loading from "../../components/Loader";
import PaymentSuccessDialog from "../../components/PaymentSuccessDialog";

function MyCart() {
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState();
  const [paymentMessage, setPaymentMessage] = useState("");
  const [deleteCount, setDeleteCount] = useState("");
  const [successAlert, setSuccessAlert] = useState(false);
  const [open, setOpen] = useState(false);
  let totalPrice = 0;
  const Razorpay = useRazorpay();

  useEffect(() => {
    getFromCartApi(setCartItems, setLoading);
  }, []);
  const handleClose = () => {
    setOpen(false);
    window.location.assign("/my-courses");
  };

  const removeFromCart = async (id) => {
    const response = await removeItemFromCart(id, setDeleteCount);
    if (response.status === 200) {
      toast.success(response.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (response.status === 400) {
      toast.warn(response.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  if (deleteCount > 0) {
    getFromCartApi(setCartItems);
  }

  const checkout = async () => {
    let totalPrice = cartItems.reduce(
      (a, curr) => parseInt(a) + parseInt(curr.price) - parseInt(curr.discount),
      0
    );
    let body = {
      total_amount: totalPrice,
      cart_item: cartItems,
    };
    let order = await addOrderApi(body);
    const options = {
      key: "rzp_test_rDOF9MHexhjJYj",
      amount: totalPrice,
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id,
      handler: function (response) {
        let verificationDetail = {
          razorpay_payment_id: response.razorpay_payment_id,
          order_id: response.razorpay_order_id,
        };
        verifyOrderApi(verificationDetail, setPaymentMessage, setOpen);
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
      <div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div>
          <div>
            <Banner
              style={{ marginTop: "71px" }}
              heading="My Cart"
              backgroundImage={cartImage}
              breadcrumb="cart"
            />
          </div>
          {cartItems ? (
            <section className="cart-content-block container">
              {!cartItems.length && (
                <h6>
                  {" "}
                  Empty Cart!!! Go to{" "}
                  <Link to="/all-courses/all">Marketplace</Link> and get some
                  courses.
                </h6>
              )}
              <Typography variant="p">
                {paymentMessage !== "" ? (
                  <>
                    <PaymentSuccessDialog
                      message={paymentMessage}
                      open={open}
                      handleClose={handleClose}
                    />
                  </>
                ) : (
                  ""
                )}
              </Typography>
              {/* cart form */}
              <form action="#" className="cart-form">
                <div className="table-wrap">
                  {cartItems.length > 0 && (
                    <p>{cartItems.length} Courses in the cart.</p>
                  )}

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
                {cartItems.length > 0 && (
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
                          className="btn-grad full-width"
                          onClick={checkout}
                        >
                          CheckOut
                        </button>
                      </CardActions>
                    </Card>
                  </div>
                )}
              </form>
            </section>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}

export default MyCart;
