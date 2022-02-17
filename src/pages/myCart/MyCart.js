import React, { useState } from "react";
import Banner from "../../components/Generic/Banner/Banner";
import cartImage from "../../assets/images/cart1.jpg";
import DeleteIcon from "@mui/icons-material/Delete";
import "./myCart.css";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
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
                  {/* cart data table */}
                  <table className="table tab-full-responsive cart-data-table font-lato">
                    <thead className="hidden-xs">
                      <tr>
                        <th>&nbsp;</th>
                        <th className="col01">Product</th>
                        <th>Price</th>
                        {/* <th>Coupon</th>
                        <th>Discount</th>
                        <th>Total</th> */}
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td data-title="Product" className="col01">
                            <div>
                              <div className="pro-name-wrap">
                                <div className="alignleft no-shrink hidden-xs">
                                  <img
                                    src={item.image_url}
                                    alt="description"
                                    width="200px"
                                    height="120px"
                                  />
                                </div>
                              </div>
                              <div className="descr-wrap">
                                <p className="fw-normal">{item.product_name}</p>
                              </div>
                            </div>
                          </td>
                          <td data-title="Price">
                            <span>
                              <strong className="price element-block">
                                {" "}
                                ₹{item.price_before_coupon.toFixed(2)}
                              </strong>
                            </span>
                          </td>
                          {/* {item.coupon_id ? (
                            <td data-title="Coupon Id">
                              <div>
                                <div classNameName="quantity green">
                                  Applied: {item.coupon_name}
                                </div>
                                <button
                                  classNameName="remove-coupon1"
                                  //   onClick={() => removeCoupon(item.product_id)}
                                >
                                  Remove Coupon
                                </button>
                              </div>
                            </td>
                          ) : (
                            <td data-title="Coupon">
                              <div>
                                <div className="quantity">
                                  <input
                                    type="text"
                                    className="form-control"
                                    // onChange={(e) =>
                                    //   setcouponCode(e.target.value)
                                    // }
                                    placeholder="Coupon Code"
                                  />
                                  <button
                                    className="apply-coupon btn-grad"
                                    // onClick={() =>
                                    //   applyCoupon(item.product_id, couponCode)
                                    // }
                                  >
                                    Apply
                                  </button>
                                </div>
                              </div>
                            </td>
                          )} */}

                          {/* <td data-title="Discount">
                            <span>
                              <strong className="price element-block">
                                {" "}
                                ₹
                                {(
                                  item.price_before_coupon - item.net_price
                                ).toFixed(2)}
                              </strong>
                            </span>
                          </td>
                          <td data-title="Total">
                            <span>
                              <strong className="element-block price">
                                ₹{item.net_price.toFixed(2)}
                              </strong>
                            </span>
                          </td> */}
                          <td>
                            <i
                              href="#"
                              className="btn-remove fas fa-times"
                              //   onClick={() => removeItem(item.product_id)}
                            >
                              <span className="sr-only">
                                <DeleteIcon />
                              </span>
                            </i>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
