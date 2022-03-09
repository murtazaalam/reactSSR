import routes from "../routes/Services.routes";
import axios from "axios";

export default async function verifyOrderApi(body, setPaymentMessage, setOpen) {
  await axios
    .post(routes.OrderVerify, body, {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      setPaymentMessage(res.data.message);
      setOpen(true);
    })
    .catch((error) => {
      if (error) {
            
      } else if (error.request) {
      //setApiError(true);
      } else {
      //setApiError(true);
      }
    });
}
