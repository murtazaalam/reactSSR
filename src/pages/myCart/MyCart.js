import React, { useState } from "react";
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
function MyCart() {
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      image_url:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
      product_name: "web development",
      price_before_coupon: 600,
      net_price: 200,
    },
    {
      image_url:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
      product_name: "web development",
      price_before_coupon: 600,
      net_price: 200,
    },
    {
      image_url:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
      product_name: "web development",
      price_before_coupon: 600,
      net_price: 200,
    },
  ]);
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
          {/* heading banner */}
          {/* breadcrumb nav */}
          {/* cart content block */}
          {/* {fetchError && <MessageBox variant="danger">{fetchError}</MessageBox>} */}
          {/* {applyCouponError && (
        <MessageBox variant="danger">{applyCouponError}</MessageBox>
      )} */}
          {/* {removeCouponError && (
        <MessageBox variant="danger">{removeCouponError}</MessageBox>
      )} */}
          {/* {removeItemError && (
        <MessageBox variant="danger">{removeItemError}</MessageBox>
      )} */}
          {/* {payError && <MessageBox variant="danger">{payError}</MessageBox>} */}
          {cartItems && (
            <section className="cart-content-block container">
              {!cartItems.length && (
                <h6> Empty Cart!!! Go to Marketplace and get some courses.</h6>
              )}
              {/* cart form */}
              <form action="#" className="cart-form">
                <div className="table-wrap">
                  <p>{cartItems.length} Courses in the cart.</p>
                  {cartItems.map((item, index) => (
                    <Card
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "20px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={item.image_url}
                        alt="Live from space album cover"
                      />
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <CardContent sx={{ flex: "1 0 auto" }}>
                          <Typography component="div" variant="h5">
                            {item.product_name}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                          >
                            Mac Miller
                          </Typography>
                        </CardContent>
                      </Box>
                      <CardActions>
                        <DeleteIcon />
                      </CardActions>
                    </Card>
                  ))}
                </div>
                <div className="cart-priceCard">
                  <Card>
                    <CardContent>
                      <Typography variant="h4" color="initial">
                        Total
                      </Typography>
                      <Typography variant="h2">Rs. 1300</Typography>
                      <Typography variant="body1" color="initial">
                        Subtotal: {"  "}
                        <span
                          className="price"
                          style={{ textDecoration: "line-through" }}
                        >
                          ₹
                          {cartItems
                            .reduce(
                              (a, curr) =>
                                a +
                                (curr.price_before_coupon
                                  ? curr.price_before_coupon
                                  : 0),
                              0
                            )
                            .toFixed(2)}
                        </span>
                      </Typography>
                      <Typography variant="body1" color="initial">
                        Discount:{"  "}
                        <span> ₹500</span>
                      </Typography>

                      {/* {(
                              cartItems.reduce(
                                (a, curr) =>
                                  a +
                                  (curr.price_before_coupon
                                    ? curr.price_before_coupon
                                    : 0),
                                0
                              ) - payloader.total_amt
                            ).toFixed(2)} */}
                    </CardContent>
                    <CardActions>
                      <button className="btn-grad">CheckOut</button>
                    </CardActions>
                  </Card>

                  {/* <RazorpayButton
                  amount={payloader.total_amt * 100}
                  order_id={paymentResponse.id}
                  onSuccess={handleSuccessPayment}
                /> */}
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
