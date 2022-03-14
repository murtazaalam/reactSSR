import React, { useState, useEffect } from "react";
import useRazorpay from "react-razorpay";
import DeleteIcon from "@mui/icons-material/Delete";
import "./myCart.css";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
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
import ButtonLoader from "../../assets/images/button_loader.gif";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../redux/slices/auth.slices";
import { cartAction } from "../../redux/slices/cart.slice";
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import SecureImage from '../../assets/images/payment-features-2.png';
import getAllReferals from '../../apis/api/GetReferals';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { getCourse } from "../../redux/slices/course.slice";

function MyCart() {
  const [loading, setLoading] = useState();
  const [verifyLoader, setVerifyLoader] = useState(false);
  const [referalError, setReferalError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [referalCode, setReferalCode] = useState("");
  const [checkoutLoader, setCheckoutLoader] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [paymentMessage, setPaymentMessage] = useState("");
  const [deleteCount, setDeleteCount] = useState("");
  const [cartData, setCartData] = useState();
  const [open, setOpen] = useState(false);
  const [user, isUser] = useState();
  const [error, setError] = useState();
  const [referalData, setReferalData] = useState();
  const [referalSucces, setReferalSucces] = useState(false);
  const [refreeName, setRefreeName] = useState();
  const [isItemSelected, setIsItemSelected] = useState('');
  const [courseData, setCourseData] = React.useState();
  const [OrderId, setOrderId] = useState();
  const [paymentId, setPaymentId] = useState()
  const navigate = useNavigate();
  const Razorpay = useRazorpay();
  let dispatch = useDispatch();
  let [y, setY] = useState([]);
  let verifiedCode = [];
  useEffect(() => {
    setLoading(true);
    getFromCartApi(setCartItems, setY, setLoading, setError);
  }, []);
  let { admin, isLogin } = useSelector((state) => state.AuthReducer);
  const handleClose = () => {
    setOpen(false);
    if(paymentMessage === "Payment Success" || 
      paymentMessage === "Order Placed"){
      getFromCartApi(setCartItems, setY, setLoading, setError);
      window.location.assign("/#/my-courses");
    }
    else{
      window.location.assign("/#/my-cart");
    }
    
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
      let data = await getFromCartApi(setCartData, setY, setLoading, setError);
      if (data) {
        dispatch(cartAction({ cartCount: data?.length }))
      } else {
        dispatch(cartAction({ cartCount: 0 }))
      }
      navigate('/my-cart')

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
    getFromCartApi(setCartItems, setY, setLoading, setError);
  }

  const checkout = async () => {
    setCheckoutLoader(true);
    setIsItemSelected('');
    if(referalCode === "" || referalSucces){
      let totalPrice = document.getElementById("totalPrice").innerHTML;
      let subTotal = document.getElementById("subTotal").innerHTML;
      let totalDiscount = document.getElementById("totalDiscount").innerHTML;
      let cartCheckedItem = y.filter((item) => {
        return item.isChecked === true;
      })
      if(cartCheckedItem.length > 0){
        cartCheckedItem.forEach((item) => {
          item.registrationType === "full" ? item.pay_state = "complete" : item.pay_state = "partial"
        });
        if(parseInt(totalPrice) > 0){
          let body = {
            total_amount: parseInt(totalPrice.trim()),
            sub_total: subTotal,
            total_discount: totalDiscount,
            cart_item: cartCheckedItem,
            refree_name: refreeName ? refreeName : null,
            order_type: "paid"
          };
          let order = await addOrderApi(body);
          
          const options = {
            key: "rzp_test_oaNqGXlOP7o5Dc",
            amount: parseInt(totalPrice)*100,
            currency: "INR",
            name: "Acme Corp",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: order.response.id,
            handler: async function (response) {
              let verificationDetail = {
                razorpay_payment_id: response.razorpay_payment_id,
                order_id: response.razorpay_order_id,
                cart_item: body
              };
              setOrderId(response.razorpay_order_id);
              setPaymentId(response.razorpay_payment_id);
              await verifyOrderApi(verificationDetail, setPaymentMessage, setOpen);
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
            let verificationDetail = {
              razorpay_payment_id: response.error.metadata.payment_id,
              order_id: response.error.metadata.order_id,
              cart_item: body
            };
            setOrderId(response.error.metadata.order_id);
            setPaymentId(response.error.metadata.payment_id);
            verifyOrderApi(verificationDetail, setPaymentMessage, setOpen);
          });
          setCheckoutLoader(false);
          rzp1.open();
        }
        else{
          let body = {
            total_amount : 0,
            sub_total: 0,
            total_discount: 0,
            cart_item: cartCheckedItem,
            refree_name: refreeName ? refreeName : null,
            order_type: "free"
          }
          let order = await addOrderApi(body);
          if(order?.message === "Order Added"){
            setOpen(true)
            setOrderId(order.order.techvanto_order_id)
            setPaymentMessage("Order Placed");
            setCheckoutLoader(false);
            let data = await getFromCartApi(setCartData, setY, setLoading, setError);
            if (data) {
              dispatch(cartAction({ cartCount: data?.length }))
            } else {
              dispatch(cartAction({ cartCount: 0 }))
            }
          }
          else{
            toast.error("Error while adding order", {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setCheckoutLoader(false);
          }
          
          // if(order){
          //   let data = await getFromCartApi(setCartData, setY, setLoading, setError);
          //   if (data) {
          //     dispatch(cartAction({ cartCount: data?.length }))
          //   } else {
          //     dispatch(cartAction({ cartCount: 0 }))
          //   }
          // }
          
          // if(order){
          //   setCheckoutLoader(false);
          // }
        }
      }
      else{
        setIsItemSelected("No Course Selected");
        setCheckoutLoader(false);
      }
    }
    else{
      setCheckoutLoader(false);
      setReferalError(true);
      setErrorText("Invalid Referal Code Entered")
    }
    
  };
  if (user === "Unauthorized" || user === "Session Expired") {
    toast.warn(user, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(logoutAction);
    navigate("/");
  }

  const handleCheckbox = (event, index) => {
    let copyY = y.map((item, i) => {
      return index === i ? { ...item, isChecked: event.target.checked } : item
    });
    setY(copyY);
  };
  const handleRadio = (event, index) => {
    let copyY = y.map((item, i) => {
      return index === i ? { ...item, registrationType: event.target.value } : item
    });
    setY(copyY);
  }

  const getReferalCode = (event) => {
    setReferalSucces(false)
    event.target.value === "" ? setReferalError(true) : setReferalError(false)
    event.target.value === "" ? setErrorText("Enter Referal Code") : setErrorText("")
    setReferalCode(event.target.value);
  }
  const handleVerify = async(event) => {
    event.preventDefault();
    setReferalSucces(false)
    setVerifyLoader(true)
    referalCode === "" ? setReferalError(true) : setReferalError(false)
    referalCode === "" ? setErrorText("Enter Referal Code") : setErrorText("")
    if(referalCode !==  "") {
      let allReferals = await getAllReferals(setReferalData, setVerifyLoader);
      verifiedCode = allReferals.filter(item => {
        return item.referal_code === referalCode
      });
      if(verifiedCode.length < 1){
        setReferalError(true)
        setErrorText("Invalid Referal Code")
      }
      else{
        setRefreeName(verifiedCode[0].refree_name)
        setReferalSucces(true);
        setReferalError(false);
      }
    }
    else{
      setVerifyLoader(false)
    }
    return;
  }
  const courseDetail = (id, type) => {
    if(type === "course"){
      dispatch(getCourse({ id, setCourseData }));
    }
  }
  return (
    <>
      {isLogin ? 
      <div>
        {loading ? (
          <Loading />
        ) : (
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
                <Box
                  component="section"
                  className="page-heading"
                  sx={{
                    background: `url(https://tv-academy-assets.s3.eu-west-2.amazonaws.com/my+cart.jpg)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="course-container">
                    {/* <img src={BlogHead1} alt="" width="15" /> */}
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item active">
                          Home
                          <div className="line"></div>
                        </li>
                        <li className="breadcrumb-item active">My Cart</li>
                      </ol>
                    </nav>
                    <h1 className="event-heading">My Cart</h1>
                  </div>
                </Box>
              </div>
              {cartItems && (
                <>
                  <section className="cart-content-block container">
                    {!cartItems.length && (
                      <Box sx={{ p: 2, mb: 15, mt: 9 }}>
                        <h6>
                          {" "}
                          <span style={{ fontWeight: "bolder" }}>
                            Empty Cart!!!
                          </span>
                          Go to <Link to="/all-courses/all">Marketplace</Link> and
                          get some courses.
                        </h6>
                      </Box>
                    )}
                    <Typography variant="p">
                      {paymentMessage !== "" ? (
                        <>
                          <PaymentSuccessDialog
                            message={paymentMessage}
                            orderId={OrderId}
                            paymentId={paymentId}
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
                      
                        {cartItems.map((item, index) => (
                          
                          <>
                            <Card
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "20px",
                              }}
                              className="cart-left-card"
                              key={index}
                            >
                              <Checkbox
                                checked={y[index]?.isChecked}
                                onChange={(e) => handleCheckbox(e, index)}
                                inputProps={{ 'aria-label': 'controlled' }}
                              />
                              <div
                                style={{
                                  background: `linear-gradient(${item.gradient})`,
                                  height: "194px",
                                }}
                              >
                                <a href={item.course_type === 'course' ? `/#/courses/${item.course_id}` : `/#/event/${item.event_id}`}
                                    onClick={() => courseDetail(item.course_id, item.course_type)}
                                    >
                                  <CardMedia
                                    component="img"
                                    className="techvanto-all-course-image"
                                    sx={{ width: 340, height: 194 }}
                                    style={{
                                      backgroundImage: `url(${ item.course_type === "course" ? item.course_image : item.event_image})`,
                                      height: "194px",
                                      minWidth: "280px",
                                    }}
                                  />
                                </a>
                              </div>

                              <Box
                                sx={{ display: "flex", flexDirection: "column" }}
                              >
                                <CardContent sx={{ flex: "1 0 auto" }}>
                                  <Typography component="div" variant="h5">
                                    <a href={item.course_type === 'course' ? `/#/courses/${item.course_id}` : `/#/event/${item.event_id}`}
                                    onClick={() => courseDetail(item.course_id, item.course_type)}
                                    className="cart-course-title"
                                    >
                                      { item.course_type === "course" ? item.course_name : item.event_name }
                                    </a>
                                  </Typography>
                                  <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                    component="div"
                                    sx={{ height: "92px", overflow: "hidden" }}
                                  >
                                    {item.description}
                                  </Typography>
                                  {item.course_type === "course" &&
                                    <Rating
                                      name="read-only"
                                      value={item.rating}
                                      readOnly
                                    />
                                  }
                                  {item.course_type === "course" &&
                                    <RadioGroup
                                      aria-labelledby="demo-controlled-radio-buttons-group"
                                      name="controlled-radio-buttons-group"
                                      sx={{ display: "flex", flexDirection: "row" }}
                                      value={y[index]?.registrationType}
                                      onChange={(e) => handleRadio(e, index)}
                                    >
                                      <FormControlLabel
                                        value="registration"
                                        name="radio"
                                        control={<Radio />}
                                        label="Pay Registration Fee"
                                      />
                                      <FormControlLabel
                                        value="full"
                                        name="radio"
                                        control={<Radio />}
                                        label="Full Fee"
                                      />
                                    </RadioGroup>
                                  }
                                </CardContent>
                              </Box>
                              <CardActions className="cart-action">
                                <DeleteIcon
                                  onClick={() => removeFromCart(item._id)}
                                  style={{ placeSelf: "flex-end" }}
                                />
                                {item.price != 0 & item.discount !== 0 ? (
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
                                  <p>{item.price != 0 ? `Rs.${item.price}` : 'Free'}</p>
                                )}
                              </CardActions>
                            </Card>
                          </>
                        ))}
                      </div>
                      {cartItems.length > 0 && (
                        <div className="cart-priceCard">
                          <Card>
                            <CardContent>
                              <Typography variant="h4" color="initial">
                                Total &nbsp;₹
                                <span id="totalPrice">{y.reduce((sum, curr) => {
                                  //return curr.isChecked ? sum + curr.registrationType === "full" ?  (parseInt(curr.data.price) - parseInt(curr.data.discount)) : parseInt(200) : sum + 0
                                  let total = 0
                                  if (curr.isChecked) {
                                    if (curr.registrationType === "full") {
                                      total = total + sum + parseInt(curr.data.price) - 
                                      parseInt(curr.data.discount ? curr.data.discount : 0)
                                    }
                                    else {
                                      
                                      total = total + sum + parseInt(curr.data.registration_fee)
                                    }
                                  }
                                  else{
                                    
                                    total = sum
                                  }
                                  return total
                                }, 0)}</span>
                              </Typography>
                              <Typography variant="h2"></Typography>
                              <Typography variant="body1" color="initial">
                                Subtotal:&nbsp; ₹
                                <span
                                  className="price"
                                  style={{ textDecoration: "line-through" }}
                                  id="subTotal"
                                >
                                  {cartItems.reduce(
                                    (a, curr) =>
                                      parseInt(a) + parseInt(curr.price),
                                    0
                                  )}
                                </span>
                              </Typography>
                              <Typography variant="body1" color="initial">
                                Total Discount: &nbsp; ₹
                                <span id="totalDiscount">
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
                            <CardActions sx={{display: "flex", flexDirection: "column"}}>
                              <FormControl
                                sx={{ marginBottom: '30px'}}
                                className="referal-aria"
                              >
                                <InputLabel htmlFor="component-outlined" error={referalError}>
                                  Referal Code(Optional)
                                </InputLabel>
                                <OutlinedInput
                                  id="component-outlined"
                                  label="Referal Code(Optional)"
                                  value={referalCode}
                                  onChange={(e) => getReferalCode(e)}
                                  error={referalError}
                                />
                                <button
                                  className="btn-verify"
                                  onClick={(e) => handleVerify(e)}
                                  disabled={verifyLoader}
                                  style={verifyLoader ? {backgroundColor: "var(--color-disable)"} :
                                  {backgroundColor: "var(--color-secondary)"}}
                                >

                                  {verifyLoader ? <img src={ButtonLoader} width="40" alt="" /> : 
                                  'Verify'}
                                </button>
                                {referalError && <p className="referal-error">{errorText}</p>}
                                {referalSucces && <p 
                                  className="referal-error"
                                  style={{
                                    color: 'var(--color-purchased)',
                                    fontWeight: '800'
                                  }}
                                >
                                  Applied Successfully({refreeName})
                                  <CheckCircleIcon className="check-icon" />
                                </p>}
                              </FormControl>
                              <button
                                type="button"
                                className="btn-grad full-width btn-checkout"
                                disabled={checkoutLoader}
                                style={checkoutLoader ? { backgroundColor: "var(--color-disable)"} : 
                                  {backgroundColor: "var(--color-secondary)" }}
                                onClick={checkout}
                              >
                                {checkoutLoader ? 
                                    <img src={ButtonLoader} width="80" alt="" />
                                  : 
                                      'Checkout'
                                    }
                              </button>
                              <p style={{color: "var(--color-secondary)", margin:"0"}}>{isItemSelected}</p>
                            </CardActions>
                            <div style={{backgroundColor: 'var(--color-primary)', padding: '10px'}}>
                              <img src={SecureImage} />
                            </div>
                          </Card>
                        </div>
                      )}
                    </form>
                  </section>
                </>
              )}
            </div>
          </div>
        )}
      </div>:
        navigate('/')
      }
    </>
  );
}

export default MyCart;
