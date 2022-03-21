import * as React from "react";
import { useState, useEffect } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Check from "./Check";
import getFromCartApi from "../apis/api/GetFromCart";
import ErrorIcon from '@mui/icons-material/Error';
import { Button, DialogContent, Typography } from "@mui/material";
import { DialogActions } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { cartAction } from "../redux/slices/cart.slice";

export default function PaymentSuccessDialog(props) {
  const [cartData, setCartData] = useState();
  const [y, setY] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  let dispatch = useDispatch();

  const { handleClose, open, message, orderId, paymentId } = props;

  useEffect(async() => {
    let data = await getFromCartApi(setCartData, setY, setLoading, setError);
    dispatch(cartAction({cartCount:data?.length}))
  })

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle sx={{display: 'flex', justifyContent: 'center'}}>
        {message === "Payment Success" || message === "Order Placed" ? <Check /> : <ErrorIcon fontSize="large" color="error"/>}
      </DialogTitle>
      <DialogContent>
        <Typography variant="h4">{message}!</Typography>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          {orderId && <Typography variant="span" component="span"><b>Order Id</b> : {orderId}</Typography>}
          {paymentId && <Typography variant="span" component="span"><b>Payment Id</b> : {paymentId}</Typography>}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}
