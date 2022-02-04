import * as React from "react";
import Box from "@mui/material/Box";
//import Typography from '@mui/material/Typography';
import Modal from "@mui/material/Modal";
//import { Input } from "@mui/material";
//import BookDemoForm from "./Forms/BookDemoForm";
//import logo from "../../Assets/Images/logo-print-hd-transparent-removebg-preview.png";
import logo from "../../assets/images/logo-print-hd-transparent-removebg-preview.png";
import { Button } from "@mui/material";
import './basicModal.css';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <Button onClick={handleOpen} className="techvanto-modal-btn">
            {props.text}
        </Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className="techvanto-sidebar-logo">
                    <img src={`${logo}`} height="100%" width="150px" alt=""></img>
                </div>
                {/* <BookDemoForm name={props.name}></BookDemoForm> */}
            </Box>
        </Modal>
    </div>
  );
}
