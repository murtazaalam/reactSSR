import routes from "../routes/Services.routes";
import axios from "axios";

export default function verifyOrderApi(body, setPaymentMessage, setOpen) {
  axios
    .post(routes.OrderVerify, body, {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res.data.message);
      setPaymentMessage(res.data.message);
      setOpen(true);
    })
    .catch((err) => {
      console.log(err);
    });
}
